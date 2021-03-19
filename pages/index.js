import fs from 'fs';
import Layout from '../components/Layout'
import style from './home/home.module.css'
import darkMode from '../states/darkmode'

export default function Home({ strings }) {
  return (
    <Layout>
      <div className={style.container}>
        <h1 className={style.name}>{strings.name}</h1>
        <h2 className={style.profession}>{strings.profession}</h2>
        <p className={style.interests}>{strings.interests}</p>
        <div className={style.social}>
          <a className={style.github} href="https://github.com/barcia" aria-label={strings.social.github} target="_blank" rel="noopener nofollow">
            <img src={ darkMode() ? "/github-white.svg" : "/github.svg"} alt={strings.social.github} />
          </a>
          <a className={style.figma} href="https://www.figma.com/@barcia" aria-label={strings.social.figma} target="_blank" rel="noopener nofollow">
            <img src="/figma.svg" alt={strings.social.figma} />
          </a>
          <a className={style.linkedin} href="https://www.linkedin.com/in/ivanbarcia" aria-label={strings.social.linkedin} target="_blank" rel="noopener nofollow">
            <img src="/linkedin.svg" alt={strings.social.linkedin} />
          </a>
          <a className={style.twitter} href="https://twitter.com/ivarcia" aria-label={strings.social.twitter} target="_blank" rel="noopener nofollow">
            <img src="/twitter.svg" alt={strings.social.twitter} />
          </a>
        </div>

        {/* <div className={style.cards}>
          <div className={style.now}>
            <h2>Now</h2>
          </div>
          <div  className={style.uses}>
            <h2>Uses</h2>
          </div>
        </div> */}
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
