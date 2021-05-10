import styles from './Footer.module.css'

const Footer = () => {
  const links = ['work', 'services', 'industries', 'stories', 'about', 'careers', 'contact']

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <img 
            className={styles.logo} 
            src='/images/dept-white.png' 
            alt='Dept logo' 
          />
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
          <div className={styles.icons}>
            <a target='_blank' href='https://www.facebook.com/DeptAgency/'>
              <img src='/icons/facebook.png' alt='Facebook icon' />
            </a>
            <a target='_blank' href='https://twitter.com/deptagency'>
              <img src='/icons/twitter.png' alt='Twitter icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com/deptagency/'>
              <img src='/icons/instagram.png' alt='Instagram icon' />
            </a>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.info}>Chamber of Commerce: 63464101</p>
          <p className={styles.info}>VAT: NL 8552.47.502.B01</p>
          <p className={styles.info}>Terms and conditions</p>
          <p className={styles.copyright}>© 2021 Dept Agency</p>
        </div>
      </div>
    </footer>
  )
}

{/* <button 
  className={styles.scrollButton}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
  Scroll to the top
</button> */}

export default Footer
