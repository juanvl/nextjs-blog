import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Sou o Juan, desenvolvedor de software desde 2012. Sou de Santa Catarina e estou morando na grande Florianópolis.</p>

        <p>Atuo como Front-end e atualmente trabalho principalmente com as tecnologias React e Typescript.</p>
      </section>
    </Layout>
  )
}
