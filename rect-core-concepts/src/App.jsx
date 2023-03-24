import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './Components/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Device name="I-phone" price="34000"></Device>
      <Device name="Samsu" price="44000"></Device>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  )
}

export default App
