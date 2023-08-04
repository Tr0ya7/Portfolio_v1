import styles from '@/styles/components/footer.module.css'

export default function Footer() {
    return (
        <>
            <ul className={styles.content}>
                Logo
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
        </>
    )
}