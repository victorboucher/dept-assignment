import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header, CaseCard, Clients, Filter } from 'components'
import styles from './Work.module.css'
import ToggleView from 'components/ToggleView'

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
        <ToggleView 
          listView={listView}
          setListView={setListView}
        />
        <Filter 
          filter={filter}
          router={router}
          categories={categories}
        />
      </div>
      <div className={styles.workContainer}>
        {filteredWorks.map((work, index) => <CaseCard 
          {...work} 
          listView={listView} 
          key={index}
        />)}
      </div>
      <Clients clients={clients} />
    </>
  )
}

export const getStaticProps = async () => {
  const workRes = await fetch('https://dept-assignment-victor.herokuapp.com/work')
  const works = await workRes.json()

  const clientsRes = await fetch('https://dept-assignment-victor.herokuapp.com/clients')
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
