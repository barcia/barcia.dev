import Layout from '../../components/Layout'
import style from './index.module.css'

export default function Page({ title, content }) {
  return (
    <Layout>
      <article>
        <header>
          <h1 className={style.title}>{title}</h1>
        </header>
        <div dangerouslySetInnerHTML={content} />
      </article>
    </Layout>
  )
}
