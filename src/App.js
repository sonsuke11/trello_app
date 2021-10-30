import AppBar from 'components/AppBar/AppBar.js'
import BoardBar from 'components/BoardBar/BoardBar'
import Column from 'components/Column/Column'
import './App.scss'

function App() {
  return (
    <div className="trello-trungquandev-master">
      <AppBar />
      <BoardBar />
      <Column />
    </div>
  )
}

export default App
