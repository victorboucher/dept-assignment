import { useState } from 'react'
import { Header, Navigation, CaseCard, Clients, Footer } from 'components'
import styles from './Work.module.css'

const Work = ({ work }) => {
  const [filter, setFilter] = useState(null)
  console.log(work)

  return (
    <>
      <Navigation />
      <Header />
      <div className={styles.container}>
        <label className={styles.label}>
          Show me
          <select>
            <option>all work</option>
            <option>..</option>
          </select>
        </label>
        <div className={styles.workContainer}>
          {work.map((work, index) => <CaseCard data={work} key={index} />)}
        </div>
      </div>
      <Clients />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetch('http://localhost:3001/work')
  const work = await data.json()

  if (!work) {
    return {
      notFound: true
    }
  }

  return {
    props: { work }
  }
}

export default Work
