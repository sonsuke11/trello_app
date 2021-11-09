import React from 'react'
import './Card.scss'
const Task = ({ card }) => {
  return (
    <li className="card-item">
      {card.cover && <img className="card-cover" src={card.cover} alt="" />}
      {card.title}
    </li>
  )
}
export default Task
