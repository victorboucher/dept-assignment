const WorkDetail = ({ work }) => {
  return (
    <p>{work.client}</p>
  )
}

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:3001/work/')
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
  const data = await fetch(`http://localhost:3001/work/${id}`)
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
