import React from 'react'

export default function Contact(props){
     console.log(props)
    return(
        <div className='cardbody'>
        <div className='card'>
          {/* <img src="./assets/liam.jpg" className='card-img'/> */}
          <h1 className='card-title'>Ananth Lakshman Kumar</h1>
          <p className='card-desc'> Graduate Student at The University of Florida</p>
          <a className='cardbutton' href="https://www.linkedin.com/in/ananthmeesala/">Linkedin</a>
          <a className='cardbutton' href="https://github.com/Dauntlesshokage">Github</a>
        </div>
        <div className='card'>
          {/* <img src="./assets/nate.png" className='card-img'/> */}
          <h1 className='card-title'>Nathaniel Clark</h1>
          <p className='card-desc'> Second year Computer Science and Psychology major from New College of Florida</p>
          <a className='cardbutton' href="https://www.linkedin.com/in/nate-clark-62304a292/">Linkedin</a>
          <a className='cardbutton' href="https://www.github.com/nateclarktech">Github</a>
        </div>
        <div className='card'>
          {/* <img src="C:\Users\anant\shellhacks\src\assets\taxes.png" className='card-img'/> */}
          <h1 className='card-title'>Long Do Hoang</h1>
          <p className='card-desc'> Second year Computer Science major from University of South Florida</p>
          <a className='cardbutton' href="https://www.linkedin.com/in/hoanglongchic/">Linkedin</a>
          <a className='cardbutton' href="https://github.com/theHaL253">Github</a>
        </div>
        </div>
    )
}