import {useState} from 'react'

export default function Loan(){
    const [loanDetails,setLoanDetails]=useState({
        loanamount:0,
        loanterm:0,
        interest:0,
        totalpaid:0
    
    })
    function handleChange(event){
        const {name,value}=event.target

        setLoanDetails(prevData =>(
            {
                ...prevData,
                [name]: value
            }
        ))
    
    
    
    }
    function handleSubmit(event){
        event.preventDefault()
        const monthlyInterestRate=(loanDetails.interest/100)/12
        console.log(monthlyInterestRate)
        const numberOfPayments=loanDetails.loanterm*12
        const tobepaid=Math.floor((loanDetails.loanamount)*monthlyInterestRate*Math.pow(1+monthlyInterestRate,numberOfPayments)/(Math.pow(1+monthlyInterestRate,numberOfPayments)-1))
        setLoanDetails(prevData=>({
            ...prevData,
            totalpaid:tobepaid
        }))
        
    }
    return (
     <form onSubmit={handleSubmit}>    
        <div className='Loan'>
            <label htmlFor='loanamount'>Loan Amount</label>
            <br/>
            <input 
            type='text'
            name='loanamount'
            value={loanDetails.loanamount}
            placeholder='Enter Loan amount'
            onChange={handleChange}
            id='loanamount'
            ></input>
            <br/>
            <br/>
            <label htmlFor='loanterm'>Loan Term</label>
            <br/>
            <input 
            type='text'
            name='loanterm'
            value={loanDetails.loanterm}
            placeholder='Enter loan Term'
            onChange={handleChange}
            id='loanterm'
            ></input>
            <br/>
            <br/>
            <label htmlFor='interest'>Interest rate </label>
            <br/>
            <input 
            type='text'
            name='interest'
            value={loanDetails.interest}
            placeholder='Enter loan Term'
            onChange={handleChange}
            id='interest'
            ></input>
            <h3>Interest paid monthly : ${loanDetails.totalpaid} </h3>
            <h4>Total Loan to be paid</h4>
        </div>
        <button>Calculate</button>
    </form>
    )
}