import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './Tasks'
import StopWatch from './StopWatch'
import ClassBased from './classbased'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <StopWatch/> */}
      {/* <Tasks /> */}
      <ClassBased />
    </>
  )
}

export default App
