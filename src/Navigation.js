import React from "react";

import './Navigation.css';
import imgLogo from './images/logo.png';

function Navigation() {
  return (

    <div className="flexbox">
          <div className="logo"> 
                <img src={imgLogo} width="50px"></img>
          </div>
          <div className="flex1">&nbsp;</div>
           <div>   
                <a href="/" className="nav-link">Portfolio</a>
                <a href="/about" className="nav-link">About</a>
          </div>
    </div>
  )
}

export { Navigation }