import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Modeling.css';

import imgCastle from './images/Modeling/castle.png';
import imgHallway from './images/Modeling/hallway.png';

import projCastle from './images/Modeling/Projects/castle.pdf';
import projHallway from './images/Modeling/Projects/hallway.pdf';

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

function Modeling() {
  const contentItems = [
    { 'title': 'Creepy Hallway', 'text': 'A hallway you do not want to visit.', 'image': imgHallway, 'link': projHallway },
    { 'title': 'Castle', 'text': 'A castle you DO want to visit.', 'image': imgCastle, 'link': projCastle },
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
          <div className='img flex1 box'><img src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
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
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
          </div>
          <div className='img flex1 box'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div className='bottom-medium'>
        <a className='a-none darker-box flexbox' href={item.link}>
          <div className='img flex1 box'><img src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
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
           <div> 
            <div className="modeling-hero">
              <h1 className='h1-broadacre center-align top-large'>3D Modeling</h1>
               <div className='dark-box top-dark padding-large'>
               <h3 className='h3-broadacre center-align bottom-small opacity'>Blender Projects</h3>
                <Items />
                </div>
            </div>
           </div>   
        </div>

    );
}

export { Modeling }
