import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Loan from './Loan.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Loan />
      </div>   
      
  )
}

