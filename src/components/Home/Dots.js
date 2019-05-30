import React from 'react'
import styles from './Dots.module.css'

const Dots = ({ brawlers }) => {
  console.log(`===== brawlers =====`)
  console.log(brawlers)
  return (
    <div className={styles.container}>
      <div className={styles.dotsWrapper}>
        { brawlers.map(b => {
          return <div className={styles.dot}></div>
        })}
      </div>
    </div>
  )
}

export default Dots
