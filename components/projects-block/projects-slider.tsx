import { useState } from "react";
import styled from "styled-components";
import ProjectCard, { Project } from "./project-card";


interface ProjectsSliderProps {
    projects: Project[]
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps): JSX.Element {
    const [selected, setSelected] = useState(0)
    const projectViews =
        projects.map((props: Project, index: number) =>
            <ProjectCard key={`card${index}`} selected={index === selected} {...props} />)

    const onDotClick = (number: number) => {
        setSelected(number)
    }



    const dots = Array.from({ length: projects.length }, (v, index) => <Dot key={`dot${index}`} selected={index === selected} onClick={() => onDotClick(index)} />)
    return (
        <div>
            <ProjectsSliderView>
                {projectViews[selected]}
            </ProjectsSliderView>
            <Dots>
                {dots}
            </Dots>
        </div>
    )
}

const Dot = ({ selected, onClick }) => <DotView style={selected ? { background: '#3160d6' } : {}} onClick={onClick} />

const DotView = styled.div`
    
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: .5rem;
    background: #fff;
    transition: ${props => props.theme.transition.bg};
    &:hover {
        background: radial-gradient(#3160d6, #1f3761 );
    }
`


const Dots = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const ProjectsSliderView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`