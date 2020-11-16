import '../styles/globals.css'
import '../styles/real-fonts.css'
import Providers from '../components/Providers'

export default function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

