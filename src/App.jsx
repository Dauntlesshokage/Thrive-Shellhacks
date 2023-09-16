import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Loan from './Loan.jsx'
import Faq from './Faq.jsx'
import questions from './questions.js'
export default function App() {
  const [count, setCount] = useState(0)
  const [faqData, setFaqData]=useState(questions.data.faq)
  // console.log(faqData.question)
  const array1=faqData.map(thing=>thing.element)
  console.log(array1)
  return (
      <div>
        <Navbar />
        <Loan />
        <Faq/>  
      </div>   
      
  )
}

