import styles from './ToggleView.module.css'

const ToggleView = ({ listView, setListView }) => (
  <button 
    className={styles.button}
    onClick={() => setListView(prevState => !prevState)}
  >
    {listView ? 'Grid view' : 'List view'}
  </button>
)

export default ToggleView
