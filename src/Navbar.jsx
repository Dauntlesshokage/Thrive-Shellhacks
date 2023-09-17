import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default function Navbar(){
    return(
       
        <nav className='nav'>
            <a href="/" className='title'>Thrive</a>
            <ul>
            <li>
              <Link activeClass="active" smooth spy to="Home">
                HOME
              </Link>
              
            </li>
            <li>
              <Link activeClass="active" smooth spy to="About">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Resources">
                RESOURCES
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="FAQ">
                FAQ
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT 
              </Link>
            </li>
            </ul>

        </nav>
            
       
        
    )
}
