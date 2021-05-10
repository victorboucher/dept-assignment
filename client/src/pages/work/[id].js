import Head from 'next/head'
import styles from './Work.module.css'

const WorkDetail = ({ client, title, slug }) => {
  return (
    <>
      <Head>
        <title>Dept | {client}</title>
      </Head>
      <div className={styles.detailContainer}>
        <h1>{client}</h1>
        <h2>{title}</h2>
        <img 
          className={styles.image} 
          src={`https://dept-assignment-victor.herokuapp.com/images/${slug}.png`} 
          alt={client}
        />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await fetch('https://dept-assignment-victor.herokuapp.com/work/')
  const work = await data.json()

  const paths = work.map(test => ({
    params: { id: test.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const data = await fetch(`https://dept-assignment-victor.herokuapp.com/work/${id}`)
  const work = await data.json()

  if (!work) {
    return {
      notFound: true
    }
  }

  return {
    props: { ...work }
  }
}

export default WorkDetail
