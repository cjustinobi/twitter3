import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import '../flow/config.js'
import Links from '../components/Links'

export default function Home() {
  return (
    <div className={styles.container}>

      <Navbar />

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://developers.flow.com/tools/fcl-js">FCL</a> Next Scaffold
        </h1>

        <p className={styles.description}>
          For the Flow Blockchain
        </p>

        <Links />

      </main>
    </div>
  )
}
