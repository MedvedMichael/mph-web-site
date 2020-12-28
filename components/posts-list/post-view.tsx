import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import { RSISImage } from "react-simple-image-slider"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import {Post, Comment} from "../../interfaces/blog-interfaces"
import Slider from "../slider/slider"
import CommentView from "./comment-view"
import LeaveCommentBlock from "./leave-comment-block"


interface PostViewProps {
    post: Post,
    isAdmin: boolean,
}

export default function PostView ({ post, isAdmin }: PostViewProps) {
    const { text, title, id, images, comments: com, timestamp } = post
    const date = new Date(timestamp)
    const [show, setShow] = useState(false)
    const [comments, setComments] = useState(com)

    const cardText = show ? text : text.slice(0,100).replace('\n', ' ') + (text.length > 100 ? '...' : '')
    const addComment = (comment: Comment) => {
        setComments([comment, ...comments])
    }

    const history = useRouter()
    
    useEffect(()=>{
        comments.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    })

    const onCardClick = ({target}) => {
        if(target.tagName !== 'BUTTON') {
            setShow(!show)
        }
    }

    const onEditPostButtonClick = () => {
        history.push(`/editor?id=${id}`)
    }

    const editPostButton = isAdmin ? (
        <EditPostButton>
            <button onClick={onEditPostButtonClick} className="std-button">Edit</button>
        </EditPostButton>
    ) : null

    const animation = useSpring({
        from: { opacity: 0, transform: 'translate3d(-4rem, 0, 0)' },
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: 'opacity 300ms ease'
    });

    return (
        <PostViewCard style={animation} className="post-view">
            
            <div style={{padding: '.5rem'}} onClick={onCardClick}>
                <TitleBlock>
                    <CardTitle>
                        {title}
                        
                    </CardTitle>
                    <DateView>{date.toLocaleDateString() + ' '+ date.toLocaleTimeString().slice(0,5)}</DateView>
                    {editPostButton}
                </TitleBlock>
                <CardText>
                    {cardText}
                </CardText>
                
            </div>
            <CardComments style={show ? {} : { display: 'none' }}>
                <Slider images={images} />
                <CommentsTitle>Comments</CommentsTitle>
                <LeaveCommentBlock addComment={addComment} postId={id} />
                {comments ? comments.map((comment, index) => <CommentView key={'comment' + index} data={comment} />) : 'There are no comments yet'}
            </CardComments>
        </PostViewCard>
    )
}

const PostViewCard = styled(animated.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: ${props => props.theme.bg.inset};
    transition: ${props => props.theme.transition.primary};
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

const TitleBlock = styled.div`
    display: flex;
    flex-direction: row;
`

const CardTitle = styled.h3`
    text-align: left;
    text-transform: uppercase;
    margin-left: 1rem;
    margin-top: .5rem;
    display: flex;
`

const CardText = styled.h5`
    padding: .75rem;
    margin-bottom: 0;
    display: flex;
    word-break: normal;
    user-select: none;
`

const CardComments = styled.div`
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: ${props => props.theme.transition.primary};
`

const CommentsTitle = styled.h3`
    color: ${props => props.theme.text.primary}
`

const EditPostButton = styled.div`
    margin: auto 1rem;
`

const DateView = styled.h6`
    margin: auto 1rem auto auto;
`