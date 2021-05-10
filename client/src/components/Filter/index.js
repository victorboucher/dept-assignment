import styles from './Filter.module.css'

const Filter = ({ filter, router, categories }) => (
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
)

export default Filter
