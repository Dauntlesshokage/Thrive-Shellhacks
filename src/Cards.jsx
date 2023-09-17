import React from 'react'

export default function Cards(props){
     console.log(props)
    return(
        <div>
        <center><h1>Resources</h1></center>
        <div className='cardbody'>
        <div className='card'>
          {/* <img src="./assets/liam.jpg" className='card-img'/> */}
          <h1 className='card-title'>Resource 1</h1>
          <p className='card-desc'> International financial Aid Resources and Information</p>
          <a className='cardbutton' href="https://www.internationalstudent.com/international-financial-aid/">Check Resource </a>
        </div>
        <div className='card'>
          {/* <img src="./assets/taxes.png" className='card-img'/> */}
          <h1 className='card-title'>Resource 2</h1>
          <p className='card-desc'> U.S. Financial aid information for international students</p>
          <a className='cardbutton' href="https://www.wes.org/advisor-blog/u-s-financial-aid-for-international-students/">Check Resource </a>
        </div>
        <div className='card'>
          {/* <img src="C:\Users\anant\shellhacks\src\assets\taxes.png" className='card-img'/> */}
          <h1 className='card-title'>Resource 3</h1>
          <p className='card-desc'> What you should know about taxes in the U.S. as an international student</p>
          <a className='cardbutton' href="https://www.studyinternational.com/news/tax-returns-international-student-us/">Check Resource </a>
        </div>
        </div>
        </div>
    )
}