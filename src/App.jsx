import './App.css'
import Paginator from './Paginator'

function App() {
  return (
    <div className="App">
      <Paginator page={1} total={100} />
    </div>
  )
}

export default App
