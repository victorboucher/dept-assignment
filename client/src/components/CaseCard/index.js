import Link from 'next/link'
import styles from './CaseCard.module.css'

const CaseCard = ({ slug, client, title }) => (
  <Link href={`/work/${slug}`}>
    <a className={styles.card}>
      <img className={styles.image} src={`http://localhost:3001/images/${slug}.png`} />
      <p className={styles.client}>{client}</p>
      <p className={styles.title}>{title}</p>
      <span className={styles.view}>
        <span>&#9658;</span> 
        <p>VIEW CASE</p>
      </span>
    </a>
  </Link>
)

export default CaseCard
