import fs from 'fs';
import Head from 'next/head'
import Page from '../../components/Page'
import style from './index.module.css'
import MarkdownIt from 'markdown-it'

export default function Uses({ content }) {
  return (
    <>
      <Head>
        <title>Iván Barcia - Uses</title>
      </Head>
      <Page title={'Uses'} content={content} />
    </>
  )
}


export async function getStaticProps({ locale }) {

    const md = new MarkdownIt();

    let fileraw = fs.readFileSync(`${process.cwd()}/pages/uses/content.${locale}.md`, "utf-8");

    let content = {__html: md.render(fileraw)}

    return {
      props: {
          content
      },
    }
  }
