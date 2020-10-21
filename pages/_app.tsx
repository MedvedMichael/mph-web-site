import '../styles/globals.css'
// import '../styles/flatly.bootstrap.min.css'
import { useEffect } from 'react'

// import Providers from '../components/providers/providers'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.getItem('theme')
  }, [])
  return (
  // <Providers>
    <Component {...pageProps} />
  // </Providers>
  )}

