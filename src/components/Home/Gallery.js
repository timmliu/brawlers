import React, { useState } from 'react'
import styles from './Gallery.module.css'
import data from '../../data'
import Card from '../../components/Home/Card'
import { ChevronLeft, ChevronRight } from '../Icons'
import rotate from '../../utils/rotate'
import rotateToCenter from '../../utils/rotateToCenter'

const Gallery = () => {
  const [brawlers, setBrawlers] = useState(data.brawlers)

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div onClick={ () => setBrawlers(rotate(brawlers, 'left')) }>
          <ChevronLeft size={64} className={styles.chevron} />
        </div>
        <div className={styles.carousel}>
          { brawlers.map(brawler => {
            return <Card brawler={brawler} key={brawler.id} />
          }) }
        </div>
        <div onClick={ () => setBrawlers(rotate(brawlers, 'right')) }>
          <ChevronRight size={64} className={styles.chevron} />
        </div>
      </div>

      <div className={styles.dotsContainer}>
        <div className={styles.dotsWrapper}>
          { data.brawlers.map(b => (<div className={styles.dot} key={b.id} onClick={ () => setBrawlers(rotateToCenter({ array: brawlers, id: b.id })) }></div>) )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
