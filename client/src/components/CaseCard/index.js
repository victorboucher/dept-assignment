import Link from 'next/link'
import styles from './CaseCard.module.css'

const CaseCard = ({ data }) => (
  <Link href={`/work/${data.slug}`}>
    <a className={styles.card}>
      <img className={styles.image} src='/images/header.png' />
      <p className={styles.client}>{data.client}</p>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.view}>
        <span>&#9658;</span> 
        VIEW CASE
      </p>
    </a>
  </Link>
)

export default CaseCard
