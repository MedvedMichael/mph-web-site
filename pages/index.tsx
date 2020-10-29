
import AboutMe from '../components/about-me/about-me'
import MainLayout from '../components/main-layout/main-layout'
import PictureSlider from '../components/picture-slider/picture-slider'
import Head from 'next/head'
import SkillsBlock from '../components/skills-block/skills-block'


export default function Home() {

  return (
    <>
      <MainLayout>
        <AboutMe />
        <SkillsBlock/>
        {/* <PictureSlider dataURLs={['https://focus.ua/storage/pub/files/google-assistant-superpower-100824533-large.jpg']}/> */}
      </MainLayout>
    </>
  )
}


