import React, { useState } from 'react'
import styles from './Gallery.module.css'
import data from '../../data'
import Card from '../../components/Home/Card'
import { ChevronLeft, ChevronRight } from '../Icons'
import rotate from '../../utils/rotate'
import rotateToCenter from '../../utils/rotateToCenter'

const Gallery = () => {
  const centerIndex = Math.floor(data.brawlers.length / 2)

  data.brawlers = data.brawlers.map((b, i) => Object.assign({}, b, { active: i === centerIndex }))

  const [staticBrawlers, setStaticBrawlers] = useState(data.brawlers.slice(0))
  const [brawlers, setBrawlers] = useState(data.brawlers)

  const activate = (array, index) => {
    return array.map((v, i) => {
      v.active = index === i
      return v
    })
  }

  const handleDotsClick = (array, id) => {
    const indexToActivate = array.findIndex(v => v.id === id)
    setBrawlers(rotateToCenter({ array, id, centerIndex }))
    setStaticBrawlers(activate(staticBrawlers, indexToActivate))
  }

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
          { staticBrawlers.map(b => (<div className={ b.active ? styles.dotActive : styles.dot } key={b.id} onClick={ () => handleDotsClick(brawlers, b.id) }></div>) )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
