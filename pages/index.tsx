
import AboutMe from '../components/about-me/about-me'
import MainLayout from '../components/main-layout/main-layout'
import SkillsBlock from '../components/skills-block/skills-block'


export default function Home() {

  return (
    <>
      <MainLayout>
        <AboutMe />
        <SkillsBlock/>
      </MainLayout>
    </>
  )
}


