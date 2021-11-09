import AppBar from 'components/AppBar/AppBar.js'
import BoardBar from 'components/BoardBar/BoardBar'
import BoardBarContent from 'components/BoardContent/BoardBarContent'
import './App.scss'

function App() {
  return (
    <div className="trello-trungquandev-master">
      <AppBar />
      <BoardBar />
      <BoardBarContent />
    </div>
  )
}

export default App
