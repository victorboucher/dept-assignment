import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Nav, NavBar, Footer } from 'components'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [showNav])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Footer />
      {showNav && <Nav />}
      <NavBar showNav={showNav} setShowNav={setShowNav} />
    </>
  )
}

export default App
