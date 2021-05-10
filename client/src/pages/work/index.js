import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header, CaseCard, Clients, Filter } from 'components'
import styles from './Work.module.css'

const Work = ({ works, clients }) => {
  const router = useRouter()
  const filter = router.query.filter
  const [filteredWorks, setFilteredWorks] = useState(works)
  const [listView, setListView] = useState(false)
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
        <button 
          onClick={() => setListView(prevState => !prevState)}
        >
          {listView ? 'Grid view' : 'List View'}
        </button>
        <Filter 
          filter={filter}
          router={router}
          categories={categories}
        />
        <div className={styles.workContainer}>
          {filteredWorks.map((work, index) => <CaseCard {...work} listView={listView} key={index} />)}
        </div>
      </div>
      <Clients clients={clients} />
    </>
  )
}

export const getStaticProps = async () => {
  const workRes = await fetch('http://localhost:3001/work')
  const works = await workRes.json()

  const clientsRes = await fetch('http://localhost:3001/clients')
  const clients = await clientsRes.json()

  if (!works || !clients) {
    return {
      notFound: true
    }
  }

  return {
    props: { works, clients }
  }
}

export default Work
