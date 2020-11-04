import React, { useState, useEffect } from "react"
import { RSISImage } from "react-simple-image-slider"
import styled from "styled-components"
import Post, {Comment} from "../../interfaces/Post"
import Slider from "../slider/slider"
import CommentView from "./comment-view"
import LeaveCommentBlock from "./leave-comment-block"


interface PostViewProps {
    post: Post,
    isAdmin: boolean,
}

export default function PostView ({ post, isAdmin }: PostViewProps) {
    const { text, title, id, images, comments: com } = post

    const [show, setShow] = useState(false)
    const [comments, setComments] = useState(com)

    const cardText = show ? text : text.slice(0,100).replace('\n', ' ') + '...'
    const addComment = (comment: Comment) => {
        console.log(comment)
        setComments([comment, ...comments])
    }
    
    useEffect(()=>{
        comments.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    })


    return (
        <PostViewCard >
            <div onClick={() => setShow(!show)}>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText>
                    {cardText}
                </CardText>
                
            </div>
            <CardComments style={show ? {} : {display: 'none'}}>
            <Slider images={images}/>
                <CommentsTitle>Comments</CommentsTitle>
                <LeaveCommentBlock addComment={addComment} postId={id}/>
                {comments ? comments.map((comment, index) => <CommentView key={'comment' + index } data={comment}/>) : 'There are no comments yet'}
            </CardComments>
        </PostViewCard>
    )
}

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

const CommentsTitle = styled.h3`
    color: ${props => props.theme.text.primary}
`