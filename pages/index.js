import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/Home.module.css'
import HabilitBox from './components/habilitBox'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/images/codigo_fonte.png" />
      </Head>
      <div className={`${styles.page1} ${inter.className}`} id="page1">
        <ul>
          <ul className={styles.hello}>
            Olá, eu sou
          </ul>
          Luiz Henrique Barros
          <li>
            Desenvolvedor Front-End<hr className={styles.pointer} />
          </li>
          <li className={styles.contact_me}>
            <Link href="https://www.linkedin.com/in/luiz-henrique-barros-45a2b9281/">
              <button type="button">
                Me Contate
              </button>
            </Link>
          </li>
        </ul>
        <Image src="/images/next-js.png" width="350" height="200" />
      </div>
      <div className={styles.page2} id="page2">
        <Image src="/images/about.png" width="225" height="225" />
        <ul>
          <li className={styles.title}>
            Sobre mim
          </li>
          <li className={styles.text}>
            Sou uma pessoa perdidamente apaixonada por programação e tecnologia de modo geral. Minha jornada me conduziu por um profundo envolvimento com a manutenção de diversos bancos de dados, também vindo a explorar suas interligações em softwares empresariais e sites. Possuo também uma singela experiência na área web, vindo a trabalhar com o uso dela no meu recente trabalho (mesmo não pertencendo a essa área a empresa em questão) de maneira como para uso comercial/profissional, vendo que já desenvolvi em conjunto com mais um desenvolvedor PHP um site que foi vendido.<br /><br />
            Sou um profissional que por experiência acabei adquirindo muito tato as requisições e desejos do consumidor final pela experiência adquirida como programador Front-end, Delphi e suporte no ERP da minha última empresa.
          </li>
        </ul>
      </div>
      <div className={styles.page3} id="page3">
        <HabilitBox />
        <ul>
          <li className={styles.habilits}>
            Habilidades
          </li>
          <li className={styles.habilit_title} id="habilit_title">
            /* Selecione uma tecnologia para saber mais sobre */
          </li>
          <li className={styles.habilit_description} id="habilit_description">
          </li>
        </ul>
      </div>
    </div>
  )
}