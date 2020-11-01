import Post, {Comment} from '../../interfaces/Post'
import styled from 'styled-components'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { AdminContext } from '../main-layout/main-layout'

interface PostsListProps {
    posts: Array<Post>
}

const PostsList = ({ posts }: PostsListProps) => {
    const isAdmin = useContext(AdminContext) === 'admin'
    const postsViews = posts.map(post => <PostView key={`post${post.id}`} post={post} isAdmin={isAdmin} />)
    return (
        <PostsListView>
            <Title>Posts</Title>
            <CardsList>
                {postsViews}
            </CardsList>
        </PostsListView>
    )
}

interface PostViewProps {
    post: Post,
    isAdmin: boolean,
}

const PostView = ({ post, isAdmin }: PostViewProps) => {
    const { text, title, id, comments: com } = post

    const [show, setShow] = useState(false)
    const [comments, setComments] = useState(com)

    // const cardText = show ? text : text.slice(0,70).replace('\n', ' ') + '...'
    const addComment = (comment: Comment) => {
        // console.log(comment)
        setComments([comment, ...comments])
    }

    return (
        <PostViewCard >
            <div onClick={({target}) => setShow(!show)}>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText>
                    {text}
                </CardText>
            </div>
            <CardComments style={show ? {} : {display: 'none'}}>
                <CommentsTitle>Comments</CommentsTitle>
                <LeaveCommentBlock addComment={addComment} postId={id}/>
                {comments ? comments.map((comment, index) => <CommentView key={'comment' + index } data={comment}/>) : 'There are no comments yet'}
            </CardComments>
        </PostViewCard>
    )
}

interface CommentProps {
    data: Comment
}

const CommentView = ({data}: CommentProps) => {
    const {text, name} = data
    return (
    <CommentCard>
        <h5>{name}</h5> 
        <span>{text}</span>
    </CommentCard>)
}

const LeaveCommentBlock = ({postId, addComment}) => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        fetch(`${process.env.API_URL}/api/comments`, {
            method: 'POST',
            body: JSON.stringify({name, text, postId})
        }).then(res => res.json())
        .then(res => addComment(res.comment))
        
    }
    return (
        <LeaveCommentForm onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
                
                <div style={{ display: 'flex', marginRight: 'auto' }}>
                    <div style={{ display: 'flex', margin: 'auto 0' }}>
                        <h4>Name</h4>
                        <LeaveCommentName type="text" onChange={({ target }) => setName(target.value)} />
                    </div>
                </div>
                <TextAreaBlock>
                    <h4>Leave comment</h4>
                    <TextInput onChange={({target}) => setText(target.value)} style={{ width: '95%' }}/>
                </TextAreaBlock>
            </div>
            <div>
                <LeaveCommentButton type="submit" value="Post comment" />
            </div>
        </LeaveCommentForm>)
}


export default PostsList

const LeaveCommentForm = styled.form`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.text.primary};
    padding-bottom: .5rem;
`
const LeaveCommentName = styled.input`
    background: ${props => props.theme.bg.inset};
    transition: ${props => props.theme.transition.primary};
    border-radius: 0.25rem;
    font-size: ${props => props.theme.fontSizes[0]};
    color: ${props => props.theme.text.primary};
    padding: .5rem;
    appearance: none;
    -webkit-appearance: none;
    flex-grow: 1;
    margin-left: 1rem;
`

const LeaveCommentButton = styled.input`
    display: block;
    margin-right: auto;
    margin-top: .5rem;
    font-size: ${props => props.theme.fontSizes[0]};
    background: #3160d6;
    color: ${props => props.theme.text.primary};
    padding: .5rem;
    ${props => props.theme.dark ? 'border-color:#000;' : 'border: none;'}
`

const TextAreaBlock = styled.div`
    flex-grow: 1;
`

const TextInput = styled.textarea`
    min-height: 4rem;
    background: ${props => props.theme.bg.inset};
    transition: ${props => props.theme.transition.primary};
    color: ${props => props.theme.text.primary};
    resize: none;

`


const PostsListView = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 2%;
    margin-top: 6rem;
`

const CardsList = styled.div`
    margin-top: 1.5rem;
`

const CommentsTitle = styled.h3`
    color: ${props => props.theme.text.primary}
`
const CommentCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: ${props => props.theme.bg.secondary};
    transition: ${props => props.theme.transition.primary};
    
    background-clip: border-box;
    border: ${props => props.theme.border.card};
    border-radius: 0.25rem;
    color: ${props => props.theme.text.primary};
    padding: .5rem;
    margin: .25rem;

    & h3 {

    }

    & h4 {

    }

`

const Title = styled.h1`
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.text.primary};
`

const PostViewCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: ${props => props.theme.bg.inset};
    transition: ${props => props.theme.transition.primary};
  /*Linear gradient... */
    z-index:2;
    
    background-clip: border-box;
    border: ${props => props.theme.border.card};
    border-radius: 0.25rem;
    color: ${props => props.theme.text.primary};
    margin: .75rem;
    

    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.bg.card};
        transition: ${props => props.theme.transition.opacity};
        z-index: -1;
        opacity: 0;
        border-radius: 0.125rem;
        /* opacity: 1 */
    }

    &:hover:after {
        opacity: 1;
    }
`

const CardTitle = styled.h2`
    text-align: left;
    text-transform: uppercase;
    margin-left: 1rem;
    margin-top: .5rem;
`

const CardText = styled.h4`
    padding: .75rem 1rem;
    display: flex;
    word-break: normal;
    user-select: none;
`

const CardComments = styled.div`
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    padding: 1rem;
`