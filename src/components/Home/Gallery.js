import React from 'react'
import styles from './Gallery.module.css'
import data from '../../data'
import Card from '../../components/Home/Card'
import Dots from '../../components/Home/Dots'
import { ChevronLeft, ChevronRight } from '../Icons'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <ChevronLeft size={64} className={styles.chevron} />
      <div className={styles.carousel}>
        { data.brawlers.map(brawler => {
          return <Card brawler={brawler} key={brawler.name} />
        }) }
      </div>
      <ChevronRight size={64} className={styles.chevron} />
      <Dots brawlers={data.brawlers} />
    </div>
  )
}

export default Gallery
