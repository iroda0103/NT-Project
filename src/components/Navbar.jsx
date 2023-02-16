import React, { Children} from "react";
import {Link} from 'react-router-dom';
import style from "./Navbar.module.css";

function Navbar(props) {
    let header = document.querySelector('.navbar')
    window.addEventListener('scroll', () => {
        let screenSize = window.scrollY;
        if (screenSize > 60) {
            header.style.position = 'static';
        }
        else {
            header.style.position = 'fixed';
        }
    })

    function signUp(){
        <Link to="sign-up">slom </Link>
      console.log("alsalskasjajsna")
    }
    const { children } = props
    return <div className="display navbar">
        <div className="logo">logo</div>
        <div className="display">
            <ul className="display navbar__list">
                <li> <Link to='/sign-in'>Topib oldim</Link> </li>
                <li><Link to='/sign-in'>Yo'qotdim</Link></li>
                 
                {/* <li onClick={signUp}>Sign up</li> */}
                <li><Link to='/sign-up'>Sign up</Link></li>
                <li><Link to='/sign-in'>Sign in</Link></li>
                
                
              
            </ul>
            <div className="display">
                <span>dark</span>
                {children}
            </div>
        </div>



    </div>
}
export default Navbar