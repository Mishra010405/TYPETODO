
import './App.css'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
 

  return (
    <main>
      <h1 className="text-5xl font-bold text-center">
      TODO REACT + TYPESCRIPT
      </h1>
    <Addtodo/>
    <Todos/>
    </main>
  )
}

export default App
