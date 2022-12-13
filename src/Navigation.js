import React from "react";
import {useState, useEffect} from 'react';

import './common/styles/typography.css';
import './common/styles/spacing.css';

import './Navigation.css';
import imgLogo from './images/logo.png';
import imgAbout from './images/about.png';
import imgPortfolio from './images/portfolio.png';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}


function Navigation() {

  const contentItems = [
    { 'title': 'Portfolio', 'image': imgPortfolio, 'link': '/portfolio'},
    { 'title': 'About', 'image': imgAbout, 'link': '/about'},
  ];

  const [items, setItems] = React.useState(contentItems)
  
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setItems(contentItems)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  if (window.innerWidth < 1025) {
    return ( 
    <div className='flexbox row nav top-small'>
      <div className='flex1'> 
        <a href="/">
          <img className='nav-logo padding-small margins-small' src={imgLogo} width='50px'></img>
        </a>  
      </div>
      <div className='flex1 right-align'>          
          <div>
            <a href='/'><img className='nav-img  padding-small' src={imgPortfolio} width='100%'></img></a>
            <a href='/about'><img className='nav-img-2  padding-small' src={imgAbout} width='100%'></img></a>
          </div>  
      </div>
    </div>  
    );
  } else {
    return (
      <div className="flexbox">
        <div> 
          <a href="/">
            <img className='logo' src={imgLogo} width='100%'></img>
          </a>
        </div>
        <div className="flex1">&nbsp;</div>
        <div className='navigation-menu'>   
          <a href="/" className='p-primary nav-link'>Portfolio</a>
          <a href="/about" className='p-primary nav-link'>About</a>
        </div>
      </div>
    )
  }
}

export { Navigation }
