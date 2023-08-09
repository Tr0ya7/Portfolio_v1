import styles from '@/styles/components/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.content}>
            <ul>
                <li className={styles.logo}>
                    <Link href="/">
                        <Image src="/images/codigo_fonte.png" width="48" height="48" />
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
                    <Link href="https://drive.google.com/file/d/1nxchwWfnbzgfb2lvzMeRXt_pwEdOhhj9/view?usp=drive_link">
                        Curr&iacute;culo
                    </Link>
                </li>
            </ul>
        </div>
    )
}