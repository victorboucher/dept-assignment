import Link from 'next/link'
import styles from './CaseCard.module.css'

const CaseCard = ({ slug, client, title, listView }) => (
  <Link href={`/work/${slug}`}>
    <a className={`${styles.card} ${listView && styles.listView}`}>
      <img 
        className={styles.image} 
        src={`https://dept-assignment-victor.herokuapp.com/images/${slug}.png`} 
        alt={client}
      />
      <div>
        <p className={styles.client}>{client}</p>
        <p className={styles.title}>{title}</p>
        <span className={styles.view}>
          <span>&#9658;</span> 
          <p>VIEW CASE</p>
        </span>
      </div>
    </a>
  </Link>
)

export default CaseCard
