import styles from './Footer.module.css'

const Footer = () => {
  const links = ['work', 'services', 'industries', 'stories', 'about', 'careers', 'contact']

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img 
          className={styles.logo} 
          src='/images/dept-white.png' 
          alt='Dept logo' 
        />
        <div className={styles.linkContainer}>
          {links.map((link, index) => <a 
            key={index}
            className={styles.link}
            target='_blank' 
            href={`https://www.deptagency.com/${link}/`}
          >
            {link}
          </a>)}
          <div className={styles.info}>
            <p>Chamber of Commerce: 63464101</p>
            <p>VAT: NL 8552.47.502.B01</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Scroll to the top
      </button>
    </footer>
  )
}

export default Footer
