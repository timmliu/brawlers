import React from 'react'
import Header from '../components/Detail/Header'
import Content from '../components/Detail/Content'
import data from '../data'

const Detail = (props) => {
  const brawler = data.brawlers.find(b => b.slug === props.match.params.slug)

  return (
    <div>
      <Header { ...brawler } />
      <Content { ...brawler } />
    </div>
  )
}

export default Detail
