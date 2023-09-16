import React from 'react'
const [loanDetails,setLoanDetails]=React.useState({
    loanamount:"0",
    loanterm:"0",
    interest:"0"

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
export default function Loan(){
    return (
        <div className='Loan'>
            <label htmlFor='loanamount'>Loan Amount</label>
            <input 
            type='text'
            name='loanamount'
            value={loanDetails.loanamount}
            placeholder='Enter Loan amount'
            onChange={handleChange}
            id='loanamount'
            ></input>
            
        </div>
    )
}