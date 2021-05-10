import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <img className={styles.logo} src='images/dept-black.png' alt='Dept logo' />
      </div>
    </nav>
  )
}

export default Navigation
