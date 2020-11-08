import styled from "styled-components"
import ProjectsSlider from "./projects-slider"
import {projects} from './projects'
import { VisibilityContainer } from '../visibility-container/visibility-container';
import { config } from "react-spring";

export default function ProjectsBlock(): JSX.Element {

    return (
        <ProjectsBlockView>
            <VisibilityContainer mode={config.wobbly} from={{ transform: 'translate3d(-2rem, 0, 0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}>
                <Title>I've already done several great projects!!!</Title>
            <Subtitle>There are some of them:</Subtitle>
            </VisibilityContainer>
            
            <ProjectsSlider projects={projects} />
        </ProjectsBlockView>
    )
}

const ProjectsBlockView = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.text.primary};
    padding: 2rem;
`

const Title = styled.h2`
    margin: 0 auto;
    text-align: center;
`

const Subtitle = styled.h4`
    margin: 1rem auto;
    text-align: center;
`