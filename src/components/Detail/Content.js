import React from 'react'
import styles from './Content.module.css'
import Breadcrumbs from '../Breadcrumbs'

const Content = (brawler) => {
  const image = require(`../../assets/images/${brawler.avatar}`)

  return (
    <div className={styles.content}>
      <Breadcrumbs name={ brawler.name } />

      <div className={styles.heroWrapper}>
        <img src={image} alt={brawler.name} className={styles.hero} />
      </div>

      <div className={styles.thumbs}>
        <img src={image} alt={brawler.name} className={styles.thumb} />
        <img src={image} alt={brawler.name} className={styles.thumb} />
        <img src={image} alt={brawler.name} className={styles.thumb} />
        <img src={image} alt={brawler.name} className={styles.thumb} />
        <img src={image} alt={brawler.name} className={styles.thumb} />
      </div>

      <p className={styles.descriptionWrapper}><span className={styles.description}>{ brawler.description }</span></p>
    </div>
  )
}

export default Content
