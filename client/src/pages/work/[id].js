import Head from 'next/head'
import { Header } from 'components'

const WorkDetail = ({ work }) => {
  return (
    <>
      <Head>
        <title>Dept | {work.client}</title>
      </Head>
      <p>{work.client}</p>
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
    props: { work }
  }
}

export default WorkDetail
