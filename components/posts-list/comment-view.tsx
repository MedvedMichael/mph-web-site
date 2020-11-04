import styled from 'styled-components'
import {Comment} from '../../interfaces/Post'

interface CommentProps {
    data: Comment
}

export default function CommentView ({data}: CommentProps) {
    const {text, name, timestamp} = data
    const date = new Date(timestamp)
    return (
        <CommentCard>
            <CommentTitle>
                <h5>{name}</h5>
                <h6>{date.toLocaleDateString() + ' '+ date.toLocaleTimeString().slice(0,5)}</h6>
            </CommentTitle>
            <span>{text}</span>
        </CommentCard>)
}


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

const CommentTitle = styled.div`
    display: flex;
    flex-direction: row;

    & h6 {
        margin-left: auto;
    }
`
