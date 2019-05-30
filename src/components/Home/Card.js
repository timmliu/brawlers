import React from 'react'
import styles from './Card.module.css'

const Card = ({ brawler }) => {
  const image = require(`../../assets/images/${brawler.avatar}`)
  return (
    <div className={styles.card}>
      <img src={image} alt={brawler.name} className={styles.avatar} />
      <div className={styles.name}>{brawler.name}</div>
      <div>{brawler.quote}</div>
    </div>
  )
}

export default Card
