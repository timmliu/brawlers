import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Brawlers</h1>
      <h3>A gallery of favorite brawlers from Supercell's Brawl Stars</h3>
    </header>
  );
}

export default Header
