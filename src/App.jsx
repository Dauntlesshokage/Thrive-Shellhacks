import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Loan from './Loan.jsx'
import Faq from './Faq.jsx'
import questions from './questions.js'
import Quiz from './Quiz.jsx'
import Home from './Home.jsx'

export default function App() {
  const [count, setCount] = useState(0)
  const [faqData, setFaqData]=useState(questions.data.faq)
  const questionArray=faqData.map(faqItem =>{
    return(
    <div key={faqItem.id}>
      <h2 className='questionBox'>{faqItem.question}</h2>
      <p className='answerBox'>{faqItem.answer}</p>
    </div>
  )
  })

  //  console.log(questionArray)
  //console.log(questionArray[0])
  return (
      <div>
        <Navbar />
        <section id="Home"><Home/></section>
        <section id="Resources"><Loan />
        <Quiz/>
        </section>
        <section id="FAQ"><Faq question={questionArray}/></section>
      </div>   
      
  )
}

