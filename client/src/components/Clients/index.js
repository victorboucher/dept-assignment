import styles from './Clients.module.css'

const Clients = ({ clients }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>CLIENTS</h2>
    <p className={styles.text}>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
    <div className={styles.logoContainer}>
      {clients.map((client, index) => (
        <img 
          className={styles.logo} 
          src={`http://localhost:3001/images/clients/${client}.png`} 
          key={index}
        />
      ))}
    </div>
  </div>
)

export default Clients
