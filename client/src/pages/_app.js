import Head from 'next/head'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
