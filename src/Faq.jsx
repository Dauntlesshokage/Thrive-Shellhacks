
import { useState } from 'react'
import questions from './questions.js'
export default function Faq(props){

    
   
    return(
        <div className='faqcontainer'>
           <h1 className='faqtitle'>Frequently Asked Questions</h1> 
           {props.question}
         
        </div>
    )
}