import Link from "next/link"
import styles from '../../../styles/Navbar.module.css'

const Navbar = () => {
    return (
    <div className={styles.topnav}>
        <Link href="/">Home</Link>       
        <Link href="/about">About</Link>
        <Link href="/messages/sup">Whats up</Link>
        <Link href="/Team">Team</Link>
        <Link href="/playerselection">Join</Link>
        
  </div> 
    )
}

export default Navbar;