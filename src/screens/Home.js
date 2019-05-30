import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Brawl Stars</h1>
        <h3>A gallery of favorite brawlers</h3>
      </header>
    </div>
  )
}

export default Home
