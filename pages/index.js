import Head from 'next/head'
import Layout from '../components/Layout'
import style from './home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={style.container}>
        <h1 className={style.name}>Iván Barcia</h1>
        <h2 className={style.profession}>Deseñador web e desenvolvedor</h2>
        <p className={style.interests}>Interesado en estándares web, CSS, JavaScript, deseño, UX, e desenvolvemento de produtos dixitais en xeral.</p>
        <div className={style.social}>
          <a href="https://github.com/barcia" aria-label="Perfil de GitHub de Iván" target="_blank" rel="noopener nofollow">
            <img src="/github.svg" />
          </a>
          <a href="https://www.linkedin.com/in/ivanbarcia" aria-label="Perfil de LinkedIn de Iván" target="_blank" rel="noopener nofollow">
            <img src="/linkedin.svg" />
          </a>
          <a href="https://twitter.com/ivarcia" aria-label="Perfil de Twitter de Iván" target="_blank" rel="noopener nofollow">
            <img src="/twitter.svg" />
          </a>
        </div>
      </div>
    </Layout>
  )
}
