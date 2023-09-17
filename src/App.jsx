import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import Loan from './Loan.jsx'
import Faq from './Faq.jsx'
import questions from './questions.js'
import Quiz from './Quiz.jsx'
export default function App() {
  const [count, setCount] = useState(0)
  const [faqData, setFaqData]=useState(questions.data.faq)
  const questionArray=faqData.map(faqItem =>{
    return(
    <div key={faqItem.id}>
      <h3>{faqItem.question}</h3>
      <p>{faqItem.answer}</p>
    </div>
  )
  })

  //  console.log(questionArray)
  //console.log(questionArray[0])
  return (
      <div>
        <Navbar />
        <Loan />
        <Faq question={questionArray}/> 
        <Quiz/>
         
      </div>   
      
  )
}

