import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = (props) => {
  return (
    <div>
      <Link to="/"><span className={styles.link}>Home</span></Link><span className={styles.nolink}> / {props.name}</span>
    </div>
  )
}

export default Breadcrumbs
