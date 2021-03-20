import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iván Barcia</title>
        <meta name="description" content="Deseñador web e desenvolvedor. Interesado en estándares web, CSS, JavaScript, deseño, UX, e desenvolvemento de produtos dixitais en xeral." />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-domain="barcia.dev" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
