import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header, CaseCard, Clients } from 'components'
import styles from './Work.module.css'

const Work = ({ works }) => {
  const router = useRouter()
  const filter = router.query.filter
  const [filteredWorks, setFilteredWorks] = useState(works)
  const categories = [...new Set(works.map(work => work.category))]

  useEffect(() => {
    if (!filter || filter === 'all') return setFilteredWorks(works)
    setFilteredWorks(works.filter(work => work.category === filter))
  }, [filter])

  return (
    <>
      <Head>
        <title>Dept | Work</title>
      </Head>
      <Header 
        title='Work'
        image='/images/header.png'
      />
      <div className={styles.container}>
        <label className={styles.label}>
          Show me
          <select 
            className={styles.select}
            onChange={(e) => router.push({
              pathname: '/work',
              query: { filter: e.target.value }
            }, undefined, { scroll: false })}
            value={filter && filter}
          >
            <option value='all'>all work</option>
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
        </label>
        <div className={styles.workContainer}>
          {filteredWorks.map((work, index) => <CaseCard {...work} key={index} />)}
        </div>
      </div>
      <Clients />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetch('http://localhost:3001/work')
  const works = await data.json()

  if (!works) {
    return {
      notFound: true
    }
  }

  return {
    props: { works }
  }
}

export default Work
