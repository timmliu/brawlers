import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IconContext } from "react-icons"

export const ChevronLeft = (props) => {
  const { size, color, className } = props

  return (
    <IconContext.Provider value={{ size, color, className }}>
      <div>
        <FaChevronLeft />
      </div>
    </IconContext.Provider>
  )
}

export const ChevronRight = (props) => {
  const { size, color, className } = props

  return (
    <IconContext.Provider value={{ size, color, className }}>
      <div>
        <FaChevronRight />
      </div>
    </IconContext.Provider>
  )
}
