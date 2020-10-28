import '../styles/globals.css'
// import '../styles/flatly.bootstrap.min.css'
import { useEffect } from 'react'

import Providers from '../components/Providers'

export default function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

