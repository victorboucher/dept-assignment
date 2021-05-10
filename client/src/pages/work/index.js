import { Navigation } from 'components'
import styles from './Work.module.scss'

const Work = ({ work }) => {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        {work.map(work => <p>{work.title}</p>)}
      </div>
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
