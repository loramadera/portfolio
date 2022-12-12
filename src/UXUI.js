import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './UXUI.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';


import imgBookVerse from './images/UXUI/BookVerse/bookversehero4.png';
import imgBestiary from './images/UXUI/Bestiary/bestiaryhero.png';
import imgVACA from './images/UXUI/pp_vaca3.png';
import imgSadhan from './images/UXUI/uxui_sadhan.png';
import imgMCC from './images/UXUI/uxui_mcc.png';
import imgSpace from './images/UXUI/uxui_spaceexploration.png';
import imgGaia from './images/UXUI/uxui_gaia.png';

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


function UXUI() {
  const visualItems = [
    { 'title': 'VACA', 'text': 'A luxurious travel app visual design.', 'image': imgVACA, 'link': '/vaca' },
    { 'title': 'Sadhan', 'text': 'Meditation app visual design.', 'image': imgSadhan, 'link': '/sadhan' },
     ];

  const brandItems = [
    { 'title': 'Moraga Country Club', 'text': 'Full branding redesign.', 'image': imgMCC, 'link': '/mcc'},
  ];

  const interactItems = [
    { 'title': 'Project Gaia', 'text': 'Educational interface on environmental sustainability.', 'image': imgGaia, 'link': '/gaia'},
  ];


const [items, setItems] = React.useState(visualItems)
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setItems(visualItems)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  function Items() {
    if (window.innerWidth < 1025) {
      return visualItems.map((item, index) => {
        return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box shadow' href={item.link}>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
      });
    } else {
      return visualItems.map((item, index) => {
        if (index % 2) {
          return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box shadow' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box shadow' href={item.link}>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
        }
      });
    }
  }


  const intItems = interactItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box shadow' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className="margins-small bottom-medium">
        <a className='a-none flexbox darker-box shadow' href={item.link}>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

  


  return (
    <div className='mobile'>
      <Navigation />   
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
          <h1 className='h1-primary center-align top-large'>UX/UI & Design</h1>
          <div className='dark-box top-dark'>
                <div className='padding-large mobile'> 
                <div><h3 className='h3-primary center-align bottom-small opacity mobile'>UX/UI</h3></div> 
                  <div>
                    <a className='a-none' href='/bookverse'> 
                      <div>
                        <h3 className='h3-primary center-align mobile'>BookVerse</h3>
                        <p className='p-primary center-align bottom-small'>Interactive book “universe” discovery app.</p>
                      </div>   
                      <div className="flex1 darker-box padding-large shadow">
                          <img className='portfolio-img' src={imgBookVerse} width="100%"></img>
                      </div>
                    </a>
                   
                    <a className='a-none' href='/bestiary'> 
                        <div>  
                          <h3 className='h3-primary center-align top-medium'>The Bestiary</h3>
                          <p className='p-primary center-align bottom-small'>Game interface design.</p>
                        </div>
                      <div className="flex1 darker-box padding-large shadow">
                          <img className='portfolio-img' src={imgBestiary} width="100%"></img>
                      </div>
                    </a>
                </div>
              </div>         
          </div>

         <div className='mobile'>
            <div className='dark-box top-dark padding-large'>
              <h3 className='h3-primary center-align bottom-small mobile opacity'>Branding & Visual Design</h3>
              <div className='mobile'>
                <div className='margins-small bottom-medium'>
                  <a className='a-none flexbox darker-box shadow' href='/mcc'>
                   <div className='img flex1'><img className='portfolio-img' src={imgMCC} width="100%" /></div>
                    <div className='flex1 box'>
                      <h3 className='h3-primary center-align'>Moraga Country Club</h3>
                      <p className='p-primary center-align'>Re-branding project of East Bay country club.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

           <div className='mobile'>
            <div className='dark-box top-dark padding-large'>
              <h3 className='h3-primary center-align bottom-small mobile opacity'>Interactive Design</h3>
              <div className='mobile'>
                { intItems }
              </div>
            </div>
          </div>

          

          <div className='mobile'>
            <div className='dark-box top-dark padding-large mobile'>
              <h3 className='h3-primary center-align bottom-small mobile opacity'>App & Visual Design</h3>
              <div className='mobile'>
                <Items />
              </div>
            </div>
          </div>

    <div className='mobile'><Footer /></div>
    
    </div>
  );
}

export { UXUI }