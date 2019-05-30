import React from 'react'
import styles from './Gallery.module.css'
import data from '../../data'
import Card from '../../components/Home/Card'
import Dots from '../../components/Home/Dots'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.left}></div>
      { data.brawlers.map(brawler => {
        return <Card brawler={brawler} key={brawler.name} />
      }) }
      <div className={styles.right}></div>
      <Dots brawlers={data.brawlers} />
    </div>
  )
}

export default Gallery
