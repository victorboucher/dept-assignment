import styles from './Header.module.css'

const Header = ({ title, image }) => {
  return (
    <header 
      className={styles.header}
      style={{ backgroundImage: `url(${image})`}}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}

export default Header
