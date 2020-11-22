import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Parallax from "../parallax/parallax";

const Programming = forwardRef((_, ref) => {

    const programmingRef = useRef()
    useImperativeHandle(ref, () => ({
        programmingRef
    }))
    
    const content = (
        <ProgrammingContent ref={programmingRef} id="programming">
            <Text >I really love programming!!!</Text>
            <Subtext>I don't like simple tasks as they're often really boring :)</Subtext>
            <Subtext>Only unsolvable tasks turn me on 😉</Subtext>
            <Subtext >If you are faced with a similar task, contact me)))</Subtext>
        </ProgrammingContent>
    )
    return (
        <Parallax bgSrc='/pictures/programming-bg.jpg' content={content}/>
    )
})

export default Programming

const ProgrammingContent = styled.div`
display: flex;
flex-direction: column;
    background: ${props => props.theme.bg.primary};
    transition: ${props => props.theme.transition.bg};
    width: 100%;
    height: 14rem;
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

const Subtext = styled.span`
text-align: center;
display: block;
    margin: auto;
    font-size: ${props => props.theme.fontSizes[4]};
    color: ${props => props.theme.text.primary}
`