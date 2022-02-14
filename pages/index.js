import Head from 'next/head'
import Image from 'next/image'
import styles from '../../TriviaMax/styles/Home.module.css'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_DEVMESSAGE)
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Trivia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pick your champion!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Image
          src="/Player4.png"
          alt="Player4"
          width={32}
          height={48}
        />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>

    </>
  )
}
