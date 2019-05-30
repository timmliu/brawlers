import React from 'react'
import styles from './Header.module.css'

const Header = (brawler) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{brawler.name}</h1>
    </header>
  );
}

export default Header
