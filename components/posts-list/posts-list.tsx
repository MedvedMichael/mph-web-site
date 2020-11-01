import Post, {Comment} from '../../interfaces/Post'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
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

interface PostViewProps {
    post: Post,
    isAdmin: boolean,
}

const PostView = ({ post, isAdmin }: PostViewProps) => {
    const { text, title, id, comments } = post

    const [show, setShow] = useState(false)

    const cardText = show ? text : text.slice(0,70).replace('\n', ' ') + '...'
    
    return (
        <PostViewCard onClick={() => setShow(!show)}>
            <CardTitle>
                {title}
            </CardTitle>
            <CardText>
                {cardText}
            </CardText>
            <CardComments style={show ? {} : {display: 'none'}}>
                <CommentsTitle>Comments</CommentsTitle>
                {comments ? comments.map(comment => <CommentView key={comment.name + comment.timestamp} data={comment}/>) : 'There are no comments yet'}
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

export default PostsList

const CommentsTitle = styled.h3`
    color: ${props => props.theme.text.primary}
`
const CommentCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: ${props => props.theme.bg.secondary};
    
    background-clip: border-box;
    border: ${props => props.theme.border.card};
    border-radius: 0.25rem;
    color: ${props => props.theme.text.primary};
    padding: .5rem;

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
    background: ${props => props.theme.bg.secondary};
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
`

const CardComments = styled.div`
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    padding: 1rem;
`