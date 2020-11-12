import styled from "styled-components";
import Parallax from "../parallax/parallax";

export default function Programming () {
    const content = (
        <ProgrammingContent>
            <Text>I really love programming!!!</Text>
        </ProgrammingContent>
    )
    return (
        <Parallax bgSrc='/pictures/programming-bg.jpg' content={content}/>
    )
}

const ProgrammingContent = styled.div`
display: flex;

    background: ${props => props.theme.bg.primary};
    width: 100%;
    height: 5rem;
    position: relative;
    z-index: 6;
`

const Text = styled.h1`
    text-align: center;
    text-transform: uppercase;
    display: block;
    margin: auto;

    font-size: ${props => props.theme.fontSizes[6]};
    color: ${props => props.theme.text.primary}
`