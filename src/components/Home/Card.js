import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import Detail from '../../screens/Detail'

const Card = ({ brawler }) => {
  const image = require(`../../assets/images/${brawler.avatar}`)
  const url = `detail/${brawler.slug}`
  return (
    <div className={styles.card}>
      <Link to={url}><img src={image} alt={brawler.name} className={styles.avatar} /></Link>
      <Link to={url}><div className={styles.name}>{brawler.name}</div></Link>
      <div>{brawler.quote}</div>
    </div>
  )
}

export default Card
