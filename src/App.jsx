import { useState } from 'react'
import './App.css'
import Navigation from './Customer/Component/Navigation/Navigation'
import Homepages from './Customer/Pages/HomePages/Homepages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        <Homepages/>
      </div>
    </>
  )
}

export default App
