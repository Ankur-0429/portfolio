import Link from "next/link"
import ToggleSwitch from "../ToggleSwitch";
import styles from '../../styles/NavBar.module.css'
import Image from 'next/image'
import image from '../../public/logoSmall.jpg'

export default function Navbar() {

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Image src={image} alt="logo"/>
        </div>
        <nav>
            <ul className={styles.navLink}>
                <div><Link href="#projects">Projects</Link></div>
                <div><Link href="#contacts">Contact</Link></div>
            </ul>
        </nav>
        <ToggleSwitch />
    </header>
  )
}