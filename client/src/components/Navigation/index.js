import { dept } from 'assets/images'
import styles from './Navigation.scss'

const Navigation = () => {
  return (
    <div style={styles.container}>
      <img src={dept} alt='Dept logo' />
      <p>Nav</p>
    </div>
  )
}

export default Navigation
