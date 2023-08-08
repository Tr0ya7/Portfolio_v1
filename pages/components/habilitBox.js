import styles from '@/styles/components/habilitBox.module.css'
import HabilitBoxOnClick from './habilitBoxOnClick'

export default function HabilitBox() {   
    return (
        <div className={styles.habilit_box}>
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.html_box}`} 
                text_title="HTML" 
                text_description="HTML é uma linguagem de marcação usada para criar e estruturar o conteúdo de páginas da web. Ela é a base fundamental para a construção de sites e permite definir a forma como os elementos e informações são exibidos no navegador." 
                src="/images/habilits-shields/html.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.css_box}`} 
                text_title="CSS" 
                text_description="CSS é uma linguagem de estilo utilizada em conjunto com o HTML para controlar a apresentação e o layout de páginas da web. Enquanto o HTML define a estrutura e os elementos da página, o CSS é responsável por determinar como esses elementos devem ser estilizados e posicionados na tela." 
                src="/images/habilits-shields/css.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.sass_box}`} 
                text_title="SASS" 
                text_description="Sass oferece recursos adicionais que tornam a escrita e a manutenção de folhas de estilo mais eficientes e poderosas. Ele introduz recursos como variáveis, aninhamento de seletores, mixins (fragmentos de código reutilizáveis) e importação de arquivos, permitindo a criação de estilos mais organizados e modulares." 
                src="/images/habilits-shields/sass.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.bootstrap_box}`} 
                text_title="BOOTSTRAP" 
                text_description="Bootstrap é um framework de código aberto desenvolvido pelo Twitter que facilita a criação de interfaces web responsivas e estilizadas. Ele é baseado em HTML, CSS e JavaScript e fornece um conjunto de estilos predefinidos, componentes e utilitários que podem ser usados como base para o design e desenvolvimento de sites e aplicativos web." 
                src="/images/habilits-shields/bootstrap.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.fontAwesome_box}`} 
                text_title="FONT AWESOME"
                text_description="Font Awesome é uma biblioteca de ícones de fonte de código aberto amplamente utilizada na criação de interfaces web e aplicativos. Ela fornece uma coleção de ícones vetoriais, que podem ser facilmente incorporados em projetos web através de uma fonte personalizada ou usando SVG (Scalable Vector Graphics)."
                src="/images/habilits-shields/fontAwesome.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.javascript_box}`} 
                text_title="JAVASCRIPT" 
                text_description="JavaScript é uma linguagem de programação de alto nível, dinâmica e interpretada, amplamente utilizada para desenvolvimento web. Ela foi criada originalmente para ser executada nos navegadores, permitindo a criação de interatividade e dinamismo nas páginas da web>" 
                src="/images/habilits-shields/javascript.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.react_box}`} 
                text_title="REACT" 
                text_description="React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para a criação de interfaces de usuário interativas e dinâmicas em aplicações web. Ele permite o desenvolvimento de interfaces reativas, onde as mudanças de estado são automaticamente refletidas no DOM (Document Object Model) sem a necessidade de atualizar toda a página."
                src="/images/habilits-shields/react.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.next_box}`} 
                text_title="NEXT.JS" 
                text_description="Next.js é um framework de código aberto para o desenvolvimento de aplicações web em React. Ele é construído sobre o React e oferece uma série de recursos adicionais que facilitam a criação de aplicações web rápidas, escaláveis e com ótimo desempenho."
                src="/images/habilits-shields/next.png" 
                width="80" height="80" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.c_sharp_box}`} 
                text_title="C#" 
                text_description="C-Sharp é uma linguagem de programação moderna, orientada a objetos e de propósito geral desenvolvida pela Microsoft no ano 2000. Ela faz parte da plataforma .NET e é amplamente utilizada para desenvolver aplicativos e sistemas corporativos. O C# é conhecido por sua segurança, tipagem estática, suporte a programação assíncrona e integração com a plataforma .NET, que oferece uma ampla variedade de bibliotecas e recursos para desenvolvimento de software. É uma escolha popular entre os desenvolvedores que trabalham em ambientes Windows e na plataforma .NET devido à sua eficiência, facilidade de aprendizado e suporte a uma variedade de aplicativos, incluindo desktop, web e jogos."
                src="/images/habilits-shields/c-sharp.png" 
                width="96" height="96"
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.xamarin_box}`} 
                text_title="XAMARIN" 
                text_description="Xamarin é uma plataforma de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para Android, iOS e Windows usando uma única base de código em C#. Com Xamarin, os desenvolvedores podem compartilhar a maior parte da lógica de negócios e funcionalidades entre as diferentes plataformas, o que reduz o tempo de desenvolvimento e facilita a criação de aplicativos multiplataforma com desempenho e experiência de usuário semelhantes aos aplicativos desenvolvidos em linguagens nativas. A plataforma também oferece o Xamarin.Forms, um framework de interface de usuário que simplifica ainda mais o desenvolvimento compartilhando a interface gráfica entre as plataformas. Xamarin é amplamente utilizado por empresas e desenvolvedores para criar aplicativos móveis eficientes, rápidos e nativos com a vantagem de reutilização de código para diferentes sistemas operacionais." 
                src="/images/habilits-shields/xamarin.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.delphi_box}`} 
                text_title="DELPHI" 
                text_description="Delphi é uma plataforma de desenvolvimento de software que inclui uma linguagem de programação orientada a objetos, uma IDE visual e uma biblioteca de componentes para criar aplicativos nativos para Windows e multiplataforma (iOS, Android, macOS e Linux). Desenvolvido pela Embarcadero Technologies, o Delphi é conhecido por seu Desenvolvimento Rápido de Aplicativos (RAD), que permite aos desenvolvedores criar aplicativos de forma ágil e produtiva, com ampla utilização em aplicações de negócios, sistemas corporativos e outros projetos que requerem interface gráfica rica e funcionalidades específicas. A linguagem de programação do Delphi é baseada em Pascal e a IDE oferece um conjunto completo de ferramentas para criar e depurar aplicativos. Além disso, a plataforma suporta acesso a bancos de dados e tem uma comunidade ativa de desenvolvedores." 
                src="/images/habilits-shields/delphi.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.db_box}`} 
                text_title="DATA BASES"
                text_description="Firebird, MySQL e SQLite são sistemas de gerenciamento de banco de dados (SGBDs) que permitem armazenar, manipular e consultar dados em aplicações e sistemas. Cada um deles tem suas próprias características e usos específicos:<br /><br /> 
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
                    É amplamente utilizado em aplicações empresariais e sistemas críticos devido à sua confiabilidade e desempenho.
                </li>
                <br /><br />
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
                </li>" 
                src="/images/habilits-shields/db.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.git_box}`} 
                text_title="GIT"
                text_description="Git é um sistema de controle de versão distribuído que permite o rastreamento das alterações feitas em um projeto de software ao longo do tempo. Ele permite que várias pessoas trabalhem em um mesmo projeto simultaneamente, mantendo um histórico detalhado das modificações feitas em cada arquivo."
                src="/images/habilits-shields/git.png" 
                width="96" height="96" 
            />
            <HabilitBoxOnClick 
                className={`${styles.box} ${styles.github_box}`} 
                text_title="GITHUB" 
                text_description="GitHub é uma plataforma de hospedagem de código-fonte que utiliza o Git como base. Ela permite que desenvolvedores armazenem seus projetos Git de forma centralizada na nuvem, facilitando o compartilhamento, colaboração e contribuição de código. Além disso, o GitHub oferece ferramentas para revisão de código, controle de problemas (issues), gerenciamento de projetos e integração contínua." 
                src="/images/habilits-shields/github.png" 
                width="96" height="96"
            />
        </div>
    )
}