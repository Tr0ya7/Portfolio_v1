import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          <ul className={styles.hello}>
            Olá, eu sou
          </ul>
          Luiz Henrique Barros
          <li>
            Desenvolvedor Front-End<hr className={styles.pointer} />
          </li>
          <li className={styles.contact_me}>
            <button type='button'>Me Contate</button>
          </li>
        </ul>
        <Image src="/image/" width="200" height="200" />
      </main>
    </>
  )
}
