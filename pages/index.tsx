
import styled from 'styled-components'
import AboutMe from '../components/about-me/about-me'
import MainLayout from '../components/main-layout/main-layout'
import ProjectsBlock from '../components/projects-block/projects-block'
import SkillsBlock from '../components/skills-block/skills-block'


export default function Home() {

  return (
    <>
      <MainLayout title="MPH's website">
        <AboutMe />
        <SkillsBlock/>
        <ProjectsBlock/>
      </MainLayout>
    </>
  )
}


