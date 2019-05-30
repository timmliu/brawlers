import React from 'react'
import styles from './Content.module.css'
import Breadcrumbs from '../Breadcrumbs'
import Hero from '../Hero'

const Content = (brawler) => {
  return (
    <div className={styles.content}>
      <Breadcrumbs name={ brawler.name } />
      <Hero />
      {/* images */}
      <p>{ brawler.description }</p>
    </div>
  )
}

export default Content
