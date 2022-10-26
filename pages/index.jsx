import Head from 'next/head'
import ProteinStatBox from "../components/ProteinStatBox"
import styles from '../styles/Home.module.css'
import fetchMessage from '../js/sample'

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
        <div className="prose text-xs mt-6 pa-1 px-3 uppercase font-bold decoration-slate-900 border-2 rounded border-slate-800/100">{fetchMessage()}</div>
      </main>
    </div>
  )
}
