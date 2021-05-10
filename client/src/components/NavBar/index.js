import { useState } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = ({ showNav, setShowNav }) => (
  <nav className={`${styles.nav} ${showNav ? styles.activeNav : ''}`}>
    <div className={styles.container}>
      <Link href='/'>
        <a>
          <img className={styles.logo} src='/images/dept-black.png' alt='Dept logo' />
        </a>
      </Link>
      <div 
        className={`${styles.button} ${showNav ? styles.active : ''}`} 
        onClick={() => setShowNav(prevState => !prevState)}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
)

export default NavBar
