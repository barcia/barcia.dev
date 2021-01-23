import fs from 'fs';
import Head from 'next/head'
import Page from '../../components/Page'
import style from './index.module.css'
import MarkdownIt from 'markdown-it'

export default function Now({ content }) {
  return (
    <>
      <Head>
        <title>Iván Barcia - Now</title>
      </Head>
      <Page title={'Now'} content={content} />
    </>
  )
}


export async function getStaticProps({ locale }) {

    const md = new MarkdownIt();

    let fileraw = fs.readFileSync(`${process.cwd()}/pages/now/content.${locale}.md`, "utf-8");

    let content = {__html: md.render(fileraw)}

    return {
      props: {
          content
      },
    }
  }
