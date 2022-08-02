import Head from 'next/head'
import ProteinStatBox from "../components/ProteinStatBox"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diet Checker</title>
        <meta name="description" content="Diet Checker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="prose text-xl italic underline decoration-blue-500 decoration-wavy font-bold underline-offset-2">Diet Checker</div>
        <ProteinStatBox />
      </main>
    </div>
  )
}
