import fs from 'fs';
import Head from 'next/head'
import Layout from '../components/Layout'
import style from './home/home.module.css'

export default function Home({ strings }) {
  return (
    <Layout>
      <div className={style.container}>
        <h1 className={style.name}>{strings.name}</h1>
        <h2 className={style.profession}>{strings.profession}</h2>
        <p className={style.interests}>{strings.interests}</p>
        <div className={style.social}>
          <a href="https://github.com/barcia" aria-label={strings.social.github} target="_blank" rel="noopener nofollow">
            <img src="/github.svg" />
          </a>
          <a href="https://www.linkedin.com/in/ivanbarcia" aria-label={strings.social.linkedin} target="_blank" rel="noopener nofollow">
            <img src="/linkedin.svg" />
          </a>
          <a href="https://twitter.com/ivarcia" aria-label={strings.social.twitter} target="_blank" rel="noopener nofollow">
            <img src="/twitter.svg" />
          </a>
        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps({ locale }) {

  const rawcontent = fs.readFileSync(`${process.cwd()}/pages/home/strings.${locale}.json`, "utf-8");
  let strings = JSON.parse(rawcontent);

  return {
    props: {
      strings
    },
  }
}
