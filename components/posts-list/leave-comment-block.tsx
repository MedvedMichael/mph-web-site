import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { addNewComment } from "../../services/client/blog-service";
import { Comment } from '../../interfaces/blog-interfaces'
import Spinner from "../spinner/spinner";

interface LeaveCommentBlockProps {
    postId: string
    addComment: (comment: Comment) => void
}

export default function LeaveCommentBlock({ postId, addComment }: LeaveCommentBlockProps) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        if (!name || !text) return;
        setLoading(true)
        addNewComment({ name, text, postId }).then(res => {
            if (name === '' || text === '')
                return;
            addComment(res.comment)
            setText('')
            setLoading(false)
        })



    }
    return (
        <LeaveCommentForm onSubmit={handleSubmit}>
            <LeaveCommentContainer >
                <div style={{ display: 'flex', marginRight: 'auto' }}>
                    <div style={{ display: 'flex', margin: 'auto 0' }}>
                        <h4>Name</h4>
                        <LeaveCommentName value={name} type="text" onChange={({ target }) => setName(target.value)} />
                    </div>
                </div>
                <TextAreaBlock>
                    <h4>Leave comment</h4>
                    <TextInput value={text} onChange={({ target }) => setText(target.value)} style={{ width: '95%' }} />
                </TextAreaBlock>
            </LeaveCommentContainer>
            <div style={{display: 'flex'}}>
                <LeaveCommentButton className="std-button" type="submit" value="Post comment" />
                {loading ? <div style={{ width: '2rem', height: '2rem', marginLeft: '1rem' }}>
                    <LoadingSpinner />
                </div> : null}
            </div>
        </LeaveCommentForm>)
}

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
    /* margin-right: auto; */
    margin-top: .5rem;
    font-size: ${props => props.theme.fontSizes[0]};
    ${props => props.theme.dark ? 'border-color:#000;' : 'border: none;'}
`

const LeaveCommentContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row-reverse;
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
    border: 1px solid #fff;

`

const LoadingSpinner = styled.div`
    
    color: #ffffff;
    font-size: 1rem;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 1rem auto;
    position: relative;
    transform: translateZ(0);
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    @keyframes load6 {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    }
    @keyframes round {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            \ transform: rotate(360deg);
        }
    }
`