import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { addNewComment } from "../../services/client/blog-service";


export default function LeaveCommentBlock ({postId, addComment}) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        if(!name || !text) return;

        addNewComment({name, text, postId}).then(res => {
            if(name === '' || text === '')
                return;
            addComment(res.comment)
            setText('')
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
                    <TextInput value={text} onChange={({target}) => setText(target.value)} style={{ width: '95%' }}/>
                </TextAreaBlock>
            </LeaveCommentContainer>
            <div>
                <LeaveCommentButton className="std-button" type="submit" value="Post comment" />
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
    margin-right: auto;
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