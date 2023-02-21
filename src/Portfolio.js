import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './Portfolio.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';


import imgMobile from './images/blackmobilepic.png';
import imgVaca from './images/Portfolio/pp_vaca.png';
import imgCode from './images/Portfolio/pp_code.png';
import imgModel from './images/Portfolio/pp_modeling2.png';
import imgESO from './images/Portfolio/pp_eso2.png';
import imgArrows from './images/Portfolio/arrows.png';
import imgPic from './images/blackpic.png';


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

function Portfolio() {
  const contentItems = [
    {'title': 'UX/UI & Design', 'text': 'UX/UI & Visual Design, Branding', 'image': imgVaca, 'link': '/uxui' },
    {'title': 'Coding', 'text': 'C# projects as well as React, Flutter, HTML, CSS.', 'image': imgCode, 'link': '/code' },
    {'title': '3D-Modeling', 'text': '3D art projects created in Blender.', 'image': imgModel, 'link': '/modeling' },
    {'title': 'Illustration', 'text': 'Portraits & other.', 'image': imgESO, 'link': '/digitalart'},
  ];

  const bubbleItems = [
    { 'image': imgMobile }
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

  function Top() {
    if (window.innerWidth < 1025 ) {
      return (
        <div className='center-align top-medium'>
          <img className='bub-mobile' src= {imgMobile} width="100%"></img>
            <h2 className='h3-primary top-small center-align'>Hi, I'm Lora!</h2>
            <p className='p-primary center-align'>UX/UI Designer</p>
            <p className='p-primary center-align'>Full-Stack Engineer</p>
            <p className='p-primary center-align'>Visual Designer</p>
        </div>
      );
    }
    return (
      <div>
        <img className='img-pic padding-medium' src= {imgPic} width="100%"></img>
      </div>
    );
  }

  function Items() {
    if (window.innerWidth < 1025) {
      return contentItems.map((item, index) => {
        return (
          <div key={index} className='margins-small bottom-medium'>
            <div className='flexbox darker-box'>
              <a href={item.link} className='a-none flex1 box'>
                <img className="portfolio-img" src= {item.image} width="100%"></img>
              </a>
              <a href={item.link} className='a-none flex1 box'>
                <div className='margins-small'>  
                  <h3 className='h3-primary left-align'>{item.title}</h3>
                  <p className='p-primary left-align'>{item.text}</p>
                </div>
              </a>
            </div>
          </div>
        );
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div key={index} className='bottom-medium'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <div>  
                    <h3 className='h3-primary center-align'>{item.title}</h3>
                    <p className='p-primary center-align'>{item.text}</p>
                  </div>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <img className="portfolio-img" src= {item.image} width="100%"></img>
                </a>
            </div>
          </div>
        } else { 
          return <div key={index} className='bottom-medium'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <img className="portfolio-img" src= {item.image} width="100%"></img>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <div>  
                    <h3 className='h3-primary center-align'>{item.title}</h3>
                    <p className='p-primary center-align'>{item.text}</p>
                  </div>
                </a>
            </div>
          </div>
        }
      });
    }
  }

  return (
    <div className='mobile'>
    <Navigation />
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
      <div className='center-align mobile bottom-small'>
        <Top />
      </div>     
      
      <div className='mobile margins-extra'>
        <h2 className='h3-primary bottom-small box center-align'>What I Do</h2>
        <Items />
      </div>  

    <div className='mobile'>
      <Footer />
    </div>  

    </div>
  );

}

export { Portfolio }
