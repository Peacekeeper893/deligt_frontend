import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-primary rounded-lg md:m-12 p-4 m-1'>{props.children}</div>
  )
}

export default Card