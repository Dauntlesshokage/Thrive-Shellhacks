
import { useState } from 'react'
import questions from './questions.js'
export default function Faq(){

    const [faqData, setFaqData]=useState(questions.data.faq)
    console.log(faqData)
    return(
        <div>
            <h2>Q: Can I get a federal loan as a Non-US Citizen in the USA?</h2>
            <p> Only eligible non-citizens are able to get federal student loans.  Generally permanent resident of the US are considered eligible non-citizens and can get federal loans if they meet the other basic eligibility requirements.  For more information please visit: <a href='https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens'>https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens</a></p>
        </div>
    )
}