import React from 'react'

const AppCard = ({title, imagen, logo}) => {
  return (
    <div style={{backgroundImage: `url(${imagen})`}}>
    <nav><a>{logo}</a></nav>
    <h1>{title}</h1>

    </div>
  )
}

export default AppCard
