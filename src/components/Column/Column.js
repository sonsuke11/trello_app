import React from 'react'
import Card from 'components/Card/Card'

import './Column.scss'
const Column = () => {
  return (
    <div className="column">
      <header>Brainstorm</header>
      <ul className="card-list">
        <Card />
        <li className="card-item">Add your task here</li>
      </ul>
      <footer>Add another to card</footer>
    </div>
  )
}
export default Column
