import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function html_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `HTML`;
    description.innerHTML = `HTML é uma linguagem de marcação usada para criar e estruturar o conteúdo de páginas da web. Ela é a base fundamental para a construção de sites e permite definir a forma como os elementos e informações são exibidos no navegador.`;
  }

  function css_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `CSS`;
    description.innerHTML = `CSS é uma linguagem de estilo utilizada em conjunto com o HTML para controlar a apresentação e o layout de páginas da web. Enquanto o HTML define a estrutura e os elementos da página, o CSS é responsável por determinar como esses elementos devem ser estilizados e posicionados na tela.`;
  }
  
  function sass_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `SASS`;
    description.innerHTML = `Sass oferece recursos adicionais que tornam a escrita e a manutenção de folhas de estilo mais eficientes e poderosas. Ele introduz recursos como variáveis, aninhamento de seletores, mixins (fragmentos de código reutilizáveis) e importação de arquivos, permitindo a criação de estilos mais organizados e modulares.`;
  }
  
  function bootstrap_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `BOOTSTRAP`;
    description.innerHTML = `Bootstrap é um framework de código aberto desenvolvido pelo Twitter que facilita a criação de interfaces web responsivas e estilizadas. Ele é baseado em HTML, CSS e JavaScript e fornece um conjunto de estilos predefinidos, componentes e utilitários que podem ser usados como base para o design e desenvolvimento de sites e aplicativos web.`;
  }

  function fontAwesome_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `FONT AWESOME`;
    description.innerHTML = `Font Awesome é uma biblioteca de ícones de fonte de código aberto amplamente utilizada na criação de interfaces web e aplicativos. Ela fornece uma coleção de ícones vetoriais, que podem ser facilmente incorporados em projetos web através de uma fonte personalizada ou usando SVG (Scalable Vector Graphics).`;
  }

  function javascript_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `JAVASCRIPT`;
    description.innerHTML = `JavaScript é uma linguagem de programação de alto nível, dinâmica e interpretada, amplamente utilizada para desenvolvimento web. Ela foi criada originalmente para ser executada nos navegadores, permitindo a criação de interatividade e dinamismo nas páginas da web.`;
  }

  function react_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `REACT`;
    description.innerHTML = `React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para a criação de interfaces de usuário interativas e dinâmicas em aplicações web. Ele permite o desenvolvimento de interfaces reativas, onde as mudanças de estado são automaticamente refletidas no DOM (Document Object Model) sem a necessidade de atualizar toda a página.`;
  }

  function next_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `NEXT.JS`;
    description.innerHTML = `Next.js é um framework de código aberto para o desenvolvimento de aplicações web em React. Ele é construído sobre o React e oferece uma série de recursos adicionais que facilitam a criação de aplicações web rápidas, escaláveis e com ótimo desempenho.`;
  }

  function c_sharp_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `C#`;
    description.innerHTML = `C-Sharp é uma linguagem de programação moderna, orientada a objetos e de propósito geral desenvolvida pela Microsoft no ano 2000. Ela faz parte da plataforma .NET e é amplamente utilizada para desenvolver aplicativos e sistemas corporativos. O C# é conhecido por sua segurança, tipagem estática, suporte a programação assíncrona e integração com a plataforma .NET, que oferece uma ampla variedade de bibliotecas e recursos para desenvolvimento de software. É uma escolha popular entre os desenvolvedores que trabalham em ambientes Windows e na plataforma .NET devido à sua eficiência, facilidade de aprendizado e suporte a uma variedade de aplicativos, incluindo desktop, web e jogos.`;
  }

  function xamarin_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `XAMARIN`;
    description.innerHTML = `Xamarin é uma plataforma de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para Android, iOS e Windows usando uma única base de código em C#. Com Xamarin, os desenvolvedores podem compartilhar a maior parte da lógica de negócios e funcionalidades entre as diferentes plataformas, o que reduz o tempo de desenvolvimento e facilita a criação de aplicativos multiplataforma com desempenho e experiência de usuário semelhantes aos aplicativos desenvolvidos em linguagens nativas. A plataforma também oferece o Xamarin.Forms, um framework de interface de usuário que simplifica ainda mais o desenvolvimento compartilhando a interface gráfica entre as plataformas. Xamarin é amplamente utilizado por empresas e desenvolvedores para criar aplicativos móveis eficientes, rápidos e nativos com a vantagem de reutilização de código para diferentes sistemas operacionais.`;
  }

  function delphi_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `DELPHI`;
    description.innerHTML = `Delphi é uma plataforma de desenvolvimento de software que inclui uma linguagem de programação orientada a objetos, uma IDE visual e uma biblioteca de componentes para criar aplicativos nativos para Windows e multiplataforma (iOS, Android, macOS e Linux). Desenvolvido pela Embarcadero Technologies, o Delphi é conhecido por seu Desenvolvimento Rápido de Aplicativos (RAD), que permite aos desenvolvedores criar aplicativos de forma ágil e produtiva, com ampla utilização em aplicações de negócios, sistemas corporativos e outros projetos que requerem interface gráfica rica e funcionalidades específicas. A linguagem de programação do Delphi é baseada em Pascal e a IDE oferece um conjunto completo de ferramentas para criar e depurar aplicativos. Além disso, a plataforma suporta acesso a bancos de dados e tem uma comunidade ativa de desenvolvedores.`;
  }

  function db_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `DATA BASES`;
    description.innerHTML = `
    Firebird, MySQL e SQLite são sistemas de gerenciamento de banco de dados (SGBDs) que permitem armazenar, manipular e consultar dados em aplicações e sistemas. Cada um deles tem suas próprias características e usos específicos:<br /><br /> 
    FIREBIRD
      <li>
        Firebird é um SGBD relacional de código aberto baseado no InterBase.
      </li>
      <li>
        É totalmente gratuito e oferece suporte a diversos sistemas operacionais, incluindo Windows, Linux e macOS.
      </li>
      <li>
        Possui recursos avançados, como suporte a transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), procedimentos armazenados, gatilhos, chaves estrangeiras e mais.
      </li>
      <li>
        É amplamente utilizado em aplicações empresariais e sistemas críticos devido à sua confiabilidade e desempenho.<br /><br />
      </li>
      <br /><br />
    </ul>
    MYSQL
      <li>
        MySQL é um SGBD relacional de código aberto desenvolvido pela Oracle Corporation.
      </li>
      <li>
        É conhecido por ser rápido, fácil de usar e altamente escalável.
      </li>
      <li>
        Suporta várias plataformas, incluindo Windows, Linux e macOS.
      </li>
      <li>
        É amplamente utilizado em aplicações web e sistemas que requerem alta disponibilidade e desempenho, como sites e aplicativos de comércio eletrônico.
      </li>
      <br /><br />
    </ul>
    SQLITE
      <li>
        SQLite é um SGBD embutido e de código aberto, o que significa que não requer um servidor de banco de dados separado para funcionar.
      </li>
      <li>
        É uma biblioteca leve e rápida, projetada para ser incorporada diretamente em aplicações.
      </li>
      <li>
        Suporta todas as operações de um SGBD completo, mas é mais adequado para aplicações desktop, dispositivos móveis e projetos de pequeno a médio porte.
      </li>
      <li>
        É amplamente utilizado em aplicativos móveis, navegadores da web e outros projetos que requerem um banco de dados local simples e sem a necessidade de gerenciamento de um servidor de banco de dados.
      </li>
      <br /><br />
    </ul>
    `;
  }

  function git_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `GIT`;
    description.innerHTML = ``;
  }

  function github_click() {
    const title = document.querySelector(`#habilit_title`);
    const description = document.querySelector(`#habilit_description`);
    
    title.innerHTML = `GITHUB`;
    description.innerHTML = ``;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <button type="button">Me Contate</button>
          </li>
        </ul>
        <Image src="/image/" width="200" height="200" />
      </div>
      <div className={styles.page2} id="page2">
        <Image src="/images/" width="200" height="200" />
        <ul>
          <li className={styles.title}>
            Sobre mim
          </li>
          <li className={styles.text}>
          Sou uma pessoa determinada que estou sempre em constante estudo, sempre buscando aprender novas tecnologias e ferramentas do mercado e me envolver em projetos novos buscando sempre me arriscar em me expor a novos desafios. <br />
          Sou um profissional que adquiri tato as requisições e desejos do consumidor final pela experiência adquirida como programador Front-end, Delphi e suporte no ERP da minha última empresa.
          </li>
        </ul>
      </div>
      <div className={styles.page3} id="page3">
        <div className={styles.habilit_box}>
          <Image className={`${styles.box} ${styles.html_box}`} onClick={html_click} src="/images/habilits-shields/html.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.css_box}`} onClick={css_click} src="/images/habilits-shields/css.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.sass_box}`} onClick={sass_click} src="/images/habilits-shields/sass.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.bootstrap_box}`} onClick={bootstrap_click} src="/images/habilits-shields/bootstrap.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.fontAwesome_box}`} onClick={fontAwesome_click} src="/images/habilits-shields/fontAwesome.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.javascript_box}`} onClick={javascript_click} src="/images/habilits-shields/javascript.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.react_box}`} onClick={react_click} src="/images/habilits-shields/react.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.next_box}`} onClick={next_click} src="/images/habilits-shields/next.png" width="80" height="80" />
          <Image className={`${styles.box} ${styles.c_sharp_box}`} onClick={c_sharp_click} src="/images/habilits-shields/c-sharp.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.xamarin_box}`} onClick={xamarin_click} src="/images/habilits-shields/xamarin.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.delphi_box}`} onClick={delphi_click} src="/images/habilits-shields/delphi.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.db_box}`} onClick={db_click} src="/images/habilits-shields/db.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.git_box}`} onClick={git_click} src="/images/habilits-shields/git.png" width="96" height="96" />
          <Image className={`${styles.box} ${styles.github_box}`} onClick={github_click} src="/images/habilits-shields/github.png" width="96" height="96" />
        </div>
        <ul>
          <li className={styles.habilits}>
            Habilidades
          </li>
          <li className={styles.habilit_title} id="habilit_title">
            title
          </li>
          <li className={styles.habilit_description} id="habilit_description">
          </li>
        </ul>
      </div>
    </>
  )
}