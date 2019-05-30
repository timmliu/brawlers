import React from 'react'
import styles from './Content.module.css'
import Breadcrumbs from '../Breadcrumbs'
import Hero from '../Hero'

const Content = (brawler) => {
  return (
    <div>
      <Breadcrumbs />
      <Hero />
      {/* images */}
      <p>{ brawler.description }</p>
    </div>
  )
}

export default Content
