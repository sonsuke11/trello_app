import React from 'react'
import Card from 'components/Card/Card'

import './Column.scss'
import { mapOrder } from 'utils/sorts'
const Column = ({ column }) => {
  const { title } = column
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  return (
    <div className="column">
      <header>{title}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ul>
      <footer>Add another to card</footer>
    </div>
  )
}
export default Column
