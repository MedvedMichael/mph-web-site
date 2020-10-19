
import AboutMe from '../components/about-me/about-me'
import MainLayout from '../components/main-layout/main-layout'
import PictureSlider from '../components/picture-slider/picture-slider'
import Head from 'next/head'


export default function Home() {
  
  return (
    <>
    <Head>
        <script src="https://kit.fontawesome.com/fc94503bd8.js" crossOrigin="anonymous"></script>
        {/* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
        <script src="./api/firebase"></script> */}
    </Head>
    




      <MainLayout>
        <AboutMe  />
       
        {/* <PictureSlider dataURLs={['https://focus.ua/storage/pub/files/google-assistant-superpower-100824533-large.jpg']}/> */}
      </MainLayout>
      </>
  )
}
