import styles from '@/styles/components/navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.content}>
            <ul>
                <li className={styles.logo}>
                    Logo
                </li>
                <li>
                    Início
                </li>
                <li>
                    Sobre mim
                </li>
                <li>
                    Projetos
                </li>
                <li>
                    Habilidades
                </li>
            </ul>
        </div>
    )
}