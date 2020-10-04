
import MainLayout from '../components/main-layout/main-layout'
import PictureSlider from '../components/picture-slider/picture-slider'


export default function Home() {
  return (
      <MainLayout>
        <PictureSlider dataURLs={['https://focus.ua/storage/pub/files/google-assistant-superpower-100824533-large.jpg']}/>
      </MainLayout>
  )
}
