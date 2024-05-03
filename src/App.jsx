import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import PasswordGen from './components/PasswordGen'
import MultiStatePractice from './components/MultiStatePractice'
import IncrementTask from './components/IncrementTask'
import StateAssign from './components/StateAssign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PasswordGen /> */}
      <MultiStatePractice />
      {/* <IncrementTask /> */}
      {/* <StateAssign /> */}
    </>

  )
}

export default App
