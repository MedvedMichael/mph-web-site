import { animated, useSpring } from "react-spring";
import styled from "styled-components"

export interface Project {
    title: string
    text: string
    image: string
    src?: string[]
    selected?: boolean
}

export default function ProjectCard ({title, text, image, selected, src}: Project) {
    const imageAnimation = useSpring({
        from: { opacity:'0' },
        opacity: '1',
    });
    const textParts = text.split('\n').map((part, index) => <ProjectCardText key={`text${index}`}>{part}</ProjectCardText>)

    const sources = src ? (
        <ProjectCardSources>
            <h3>Sources: </h3> {src.map(s => (
                <a key={s} href={s} target="_blank">
                    <SourceIcon aria-hidden={true} className={`fab fa-github`} />
                </a>))}
        </ProjectCardSources>) : null

    return (
        <ProjectCardView style={!selected ? {opacity: 0} : {}}>
            <ProjectCardTitle>{title}</ProjectCardTitle>
            {textParts}
            {sources}
            <ProjectCardImage style={imageAnimation} src={image}/>
        </ProjectCardView>
    )
}

const ProjectCardView = styled.div`
    display: flex;
    flex-direction: column;
    transition: ${props => props.theme.transition.primary};
`

const ProjectCardTitle = styled.h1`
    margin: 0 auto;
    padding: .5rem;
    text-transform: uppercase;
    text-align: center;
`

const ProjectCardText = styled.span`
    font-size: ${props => props.theme.fontSizes[3]};
    text-align: center;
    position: relative;
`

const ProjectCardImage = styled(animated.img)`
    width: 80vw;
    height: 44.5vw;
    margin: 1rem auto 0 auto;
`

const ProjectCardSources = styled.div`
    display: flex;
    margin: 1rem auto 0 auto;
`

const SourceIcon = styled.i`
    font-size: x-large;
    color: #fff;
    margin: .75rem;
`