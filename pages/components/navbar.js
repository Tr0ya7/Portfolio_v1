import styles from '@/styles/components/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.content}>
            <ul>
                <li className={styles.logo}>
                    <Link href="/">
                        Logo
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Início
                    </Link>
                </li>
                <li>
                    <Link href="../about-me">
                        Sobre mim
                    </Link>
                </li>
                <li>
                    <Link href="../projects">
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href="../habilits">
                        Habilidades
                    </Link>
                </li>
            </ul>
        </div>
    )
}