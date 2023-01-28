import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Code.css';

import imgCodeLogo  from './images/Code/logo.png';
import imgAzure from './productDemo/Images/Azure.png';

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

function Code() {
  const contentItems = [
    { 'title': 'My Portfolio Site', 'text': 'My portfolio site, coded from scratch in React.', 'image': imgCodeLogo, 'link': '/' },
    { 'title': 'Azure', 'text': 'A fantasy terrarium product site that I designed and coded.', 'image': imgAzure, 'link': '/product-demo-home' },
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

  function Items() {
    if (window.innerWidth < 1025) {
      return contentItems.map((item, index) => {
        return <div className='bottom-medium'>
        <a className='a-none darker-box flexbox' href={item.link}>
          <div className='img flex1 box'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div>
        <a className='a-none darker-box flexbox' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1 box'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div className='bottom-medium'>
        <a className='a-none darker-box flexbox' href={item.link}>
          <div className='img flex1 box'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>
        }
      });
    }
  }

  return (
        <div className='mobile'>
          <Navigation /> 
          <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>  
           <div className='mobile margins-extra'> 
            <div className="modeling-hero">
            <h1 className='h1-primary center-align top-medium'>Coding</h1>
              <div className='mobile'>
                <div className='top-small'>
                  <h3 className='h3-primary center-align bottom-small opacity'>React Web Development</h3>
                  <Items />
                </div>
              </div>  
            </div>
          </div>
         <div className='mobile top-medium'>
          <Footer />
          </div> 
        </div>

    );
}

export { Code }
