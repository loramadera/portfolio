import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './UXUI.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';


import imgBookVerse from './images/UXUI/uxui_bookverse.png';
import imgBestiary from './images/UXUI/uxui_bestiary.png';
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

  const uxuiItems = [
    { 'title': 'BookVerse', 'text': 'A book cataloguing database.', 'image': imgBookVerse, 'link': '/bookverse' },
    { 'title': 'Bestiary', 'text': 'An interactive game design.', 'image': imgBestiary, 'link': '/bestiary' },
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

  function UXUI() {
    if (window.innerWidth < 1025) {
      return uxuiItems.map((item, index) => {
        return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
      });
    } else {
      return uxuiItems.map((item, index) => {
        if (index % 2) {
          return <div key={index} className='bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className='bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
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


  function Items() {
    if (window.innerWidth < 1025) {
      return visualItems.map((item, index) => {
        return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
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
          return <div key={index} className='bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
    } else {
      return <div key={index} className='bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
        }
      });
    }
  }


  const intItems = interactItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className='bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-primary center-align'>{item.title}</h3>
            <p className='p-primary center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img className='portfolio-img' src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className="bottom-medium">
        <a className='a-none flexbox darker-box' href={item.link}>
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

        <div className='mobile'>
          <div className='margins-extra mobile'>
            <h3 className='h3-primary center-align bottom-small mobile opacity'>UX/UI Design</h3>
            <div className='mobile'>
              <UXUI />
            </div>
          </div>
        </div>
            


        <div className='mobile'>
          <div className='margins-extra'>
            <h3 className='h3-primary center-align bottom-small mobile opacity'>Interactive Design</h3>
            <div className='mobile'>
              { intItems }
            </div>
          </div>
        </div>

          

        <div className='mobile'>
          <div className='margins-extra mobile'>
            <h3 className='h3-primary center-align bottom-small mobile opacity'>App & Visual Design</h3>
            <div className='mobile'>
              <Items />
            </div>
          </div>
        </div>

        <div className='mobile'>
          <div className='margins-extra'>
            <h3 className='h3-primary center-align bottom-small mobile opacity'>Branding & Visual Design</h3>
            <div className='mobile'>
              <div className='bottom-medium'>
                <a className='a-none flexbox darker-box' href='/mcc'>
                  <div className='flex1 box'>
                    <h3 className='h3-primary center-align'>Moraga Country Club</h3>
                    <p className='p-primary center-align'>Re-branding project of East Bay country club.</p>
                  </div>
                  <div className='img flex1'><img className='portfolio-img' src={imgMCC} width="100%" /></div>
                </a>
              </div>
            </div>
          </div>
        </div>

    <div className='mobile'><Footer /></div>
    
    </div>
  );
}

export { UXUI }