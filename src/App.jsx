import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Loan from './Loan.jsx'
import Faq from './Faq.jsx'
import questions from './questions.js'
import Quiz from './Quiz.jsx'
import Home from './Home.jsx'
import Cards from './Cards.jsx'
import cardinfo from './cardinfo.js'
import Contact from './Contact.jsx'
import About from './About.jsx'
export default function App() {
  const [card, setCard] = useState(cardinfo)
  const [faqData, setFaqData]=useState(questions.data.faq)
  const questionArray=faqData.map(faqItem =>{
    return(
    <div key={faqItem.id}>
      <h2 className='questionBox'>{faqItem.question}</h2>
      <p className='answerBox'>{faqItem.answer}</p>
    </div>
  )
  })
  const randomNumber =Math.floor(Math.random()*6+0)
  const randomNumber2 =Math.floor(Math.random()*6+0)
  const randomNumber3 =Math.floor(Math.random()*6+0)
  const infoarray=[card[randomNumber],card[randomNumber2],card[randomNumber3]]
  //  console.log(questionArray)
  //console.log(questionArray[0])
  // console.log(infoarray)
  return (
      <div>
        <Navbar />
        <section id="Home"><Home/></section>
        <section id="About"><About/></section>
        <section id="Resources"><Loan />
        <Quiz/>
        <Cards 
        key={infoarray[0]}
        array={infoarray}/>
        </section>
        <section id="FAQ"><Faq question={questionArray}/></section>
        <section id="contact"><Contact/></section>
        
      </div>   
      
  )
}

