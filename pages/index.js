import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankur | DevOps Developer</title>
        <link rel="icon" content="http://i.imgur.com/gk31YMY.png" />
      </Head>
    <Main />
    <About />
    <Contact />
    </div>
  )
}
