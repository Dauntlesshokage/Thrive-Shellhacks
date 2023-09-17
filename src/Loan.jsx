import {useState} from 'react'

export default function Loan(){
    const [loanDetails,setLoanDetails]=useState({
        loanamount:'',
        loanterm:'',
        interest:'',
        totalpaid:'0',
        totaldue:'0'
    
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
        if(loanDetails.interest===''||loanDetails.loanamount===''||loanDetails.loanterm===''){
            setLoanDetails(prevData=>({
                ...prevData,
                totalpaid:0,
                totaldue:0
            }))
        }
        else{
            const monthlyInterestRate=(loanDetails.interest/100)/12
            console.log(monthlyInterestRate)
            const numberOfPayments=loanDetails.loanterm*12
            const tobepaid=Math.floor((loanDetails.loanamount)*monthlyInterestRate*Math.pow(1+monthlyInterestRate,numberOfPayments)/(Math.pow(1+monthlyInterestRate,numberOfPayments)-1))
            const totdue=+loanDetails.loanamount+(+(loanDetails.totalpaid*12*loanDetails.loanterm))
            setLoanDetails(prevData=>({
                ...prevData,
                totalpaid:tobepaid,
                totaldue:totdue
            }))
        }
    }
    return (
     <form className="loanform"onSubmit={handleSubmit}>    
     <h1 className='loantitle'>Try this loan calculator</h1>
     <p>Enter your loan information to calculate how much you would need to pay each month</p>
        <div className='Loan'>
            <div className='loandetails'>
            <label htmlFor='loanamount'><h3>Loan Amount</h3></label>
            <input 
                type='number'
                name='loanamount'
                value={loanDetails.loanamount}
                placeholder='Enter Loan amount'
                onChange={handleChange}
                id='loanamount'
            ></input>
            <br/>
            <label htmlFor='loanterm'><h3>Loan Term</h3></label>
            <input 
                type='text'
                name='loanterm'
                value={loanDetails.loanterm}
                placeholder='Enter Loan Term'
                onChange={handleChange}
                id='loanterm'
            ></input>
            <br/>
            <label htmlFor='interest'><h3>Interest rate </h3></label>
            <input 
                type='text'
                name='interest'
                value={loanDetails.interest}
                placeholder='Enter Loan Term'
                onChange={handleChange}
                id='interest'
            ></input>
            <br/>
            <br/>
            
            
            <button>Calculate</button>
            </div>
            <div className='loanoutput'>
                <div>
                    <h1>Interest paid monthly : ${loanDetails.totalpaid} </h1>
                    <h4>Total Loan to be paid :${loanDetails.totaldue}</h4>
                </div>
            </div>
            
        </div>
        
    </form>
    )
}