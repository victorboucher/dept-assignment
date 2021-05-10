import styles from './Nav.module.css'

const Nav = () => {
  const links = ['work', 'services', 'industries', 'stories', 'about', 'careers', 'contact']

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {links.map((link, index) => <a 
            key={index}
            className={styles.link}
            target='_blank' 
            href={`https://www.deptagency.com/${link}/`}
          >
            {link}
          </a>)}
        </div>
      </div>
    </div>
  )
}
  
export default Nav
