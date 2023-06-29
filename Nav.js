import { useState, useEffect} from "react";
import React from "react";
import Logo from "../logo.png";
import gitlogo from "../icons8-github-64.png";
import linkedinlogo from "../icons8-linkedin-64.png";

function Nav() {
    const [navBar, setNavBar] = useState(false);


    const changeBackground = () => {
        if( window.scrollY >= 60) {
            setNavBar(true);
        }else {
            setNavBar(false);
        }

    };
 
    window.addEventListener('scroll', changeBackground);
    




       


   
    return(

        <nav className={navBar ? "nav-bar active" : "nav-bar" }>
            <div className="flex-div">
            <div className="logo"><img className="logo" src= {Logo} /></div>
            <div className="list-items">
            <ul className="el-ul">
                <a className="nav-el" href="#Home"><li>Home</li></a>
                <a className="nav-el"  href="Skills"><li>Skills</li></a>
                <a className="nav-el" href="#Projects"><li>Projects</li></a>
                <button className="dropdown">menu</button>
                </ul>
            </div>
                
                <div className="social-icons">
                    <ul>
                        <button className="drop-down">menu</button>
                    
                        <a href="#Github"><li className="social-list"> <img className="social-logo" src = {gitlogo} /></li></a>


                        <a href="#LinkedIn"> <li className="social-list"><img className="social-logo" src = {linkedinlogo} /></li></a>
                    </ul>  
                    
                </div>
            </div>
        </nav>
    );
}

export default Nav;