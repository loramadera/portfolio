import React from "react";
import './common/styles/typography.css';
import './common/styles/spacing.css';
import './Footer.css';


import imgGit from './images/Portfolio/github.png';
import imgLinkedin from './images/Portfolio/linkedin.png';
import imgInsta from './images/Portfolio/insta.png';


function Footer() {
  return (
    <div>
    <div className="center-align">
          <div>
           <a href="https://github.com/loragaloyan"> 
            <img className='img-footer padding-ultra-s' src= { imgGit } width="100%"></img> 
            </a>
           <a href="https://www.linkedin.com/in/lora-madera-683872142/"> 
            <img className='img-footer padding-ultra-s' src= { imgLinkedin } width="100%"></img>
            </a>
           <a href="https://www.instagram.com/lara.k.gamryn/"> 
            <img className='img-footer padding-ultra-s' src= { imgInsta } width="100%"></img>                 
            </a>
          </div>
    </div>
    <p className='p-primary center-align bottom-small'> © designed & coded by Lora Madera 2023</p>
    </div>
  );
}

export { Footer }