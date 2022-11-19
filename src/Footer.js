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
           <a href="https://www.linkedin.com/in/lora-galoyan-683872142?original_referer=https%3A%2F%2Fwww.google.com%2F"> 
            <img className='img-footer padding-ultra-s' src= { imgLinkedin } width="100%"></img>
            </a>
           <a href="https://www.instagram.com/lara.k.gamryn/"> 
            <img className='img-footer padding-ultra-s' src= { imgInsta } width="100%"></img>                 
            </a>
          </div>
    </div>
    <p className='p-light center-align bottom-small'> © Lora Galoyan 2022</p>
    </div>
  );
}

export { Footer }