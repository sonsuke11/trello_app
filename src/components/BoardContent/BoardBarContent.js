import Column from 'components/Column/Column'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import './BoardBarContent.scss'
import { initialData } from 'actions/initialData'
const BoardBarContent = () => {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFromDb = initialData.boards.find(
      (board) => (board.id = 'board-1')
    )
    if (boardFromDb) {
      setBoard(boardFromDb)
      setColumns(boardFromDb.columns)
    }
  }, [])
  console.log('board :>> ', board)
  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: '10px', color: 'white' }}>
        Board not found
      </div>
    )
  }
  return (
    <div className="board-content">
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  )
}
export default BoardBarContent
