import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
const Nav = () => {
  
    return (
        <div className="">
            <nav className="main-nav ">
                <div className="main-nav-logo">
                    <h1><NavLink to="/">Tandem Quiz</NavLink></h1>
                </div>
                <nav className="main-nav-items">
                    <ul>
                        <li><NavLink to="/start">Start</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                            {/* <React.Fragment>
                                <li><NavLink to="/highlights">Highlighted</NavLink></li>
                            </React.Fragment> */}
                    </ul>
                </nav>
            </nav>
            <div className="hrDiv">
            <hr className="hr"  />
            </div>
        </div>
    )
 }
export default Nav;