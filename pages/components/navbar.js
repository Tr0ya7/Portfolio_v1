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
                    <Link href="#page1">
                        Início
                    </Link>
                </li>
                <li>
                    <Link href="#page2">
                        Sobre mim
                    </Link>
                </li>
                <li>
                    <Link href="#page3">
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link href="../resume">
                        Curr&iacute;culo
                    </Link>
                </li>
            </ul>
        </div>
    )
}