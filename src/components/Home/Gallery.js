import React, { useState } from 'react'
import styles from './Gallery.module.css'
import data from '../../data'
import Card from '../../components/Home/Card'
import Dots from '../../components/Home/Dots'
import { ChevronLeft, ChevronRight } from '../Icons'
import rotate from '../../utils/rotate'

const Gallery = () => {
  const [brawlers, setBrawlers] = useState(data.brawlers)

  return (
    <div className={styles.gallery}>
      <div onClick={ () => setBrawlers(rotate(brawlers, 'left')) }>
        <ChevronLeft size={64} className={styles.chevron} />
      </div>
      <div className={styles.carousel}>
        { brawlers.map(brawler => {
          return <Card brawler={brawler} key={brawler.name} />
        }) }
      </div>
      <div onClick={ () => setBrawlers(rotate(brawlers, 'right')) }>
        <ChevronRight size={64} className={styles.chevron} />
      </div>
      <Dots brawlers={data.brawlers} />
    </div>
  )
}

export default Gallery
