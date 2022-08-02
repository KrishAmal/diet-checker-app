import Head from 'next/head'
import Image from 'next/image'
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
        <div>Welcome to Diet Checker</div>
      </main>
    </div>
  )
}
