import React from "react";
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './Bio.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';

import imgMe from './images/bio/me.png';
import imgSki from './images/bio/snow.png';
import imgFantasy from './images/bio/fantasy.png';

import projLora from './images/bio/MaderaResume.pdf';

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

function Bio() {
  const contentItems = [
    { 'title': 'About Me', 'text': 'After graduating with a degree in economics from UC San Diego, I stumbled into UX/UI design and fell in love (my favorite story to tell). I love working on projects that are innovative and intellectually stimulating, and UX/UI intersects my fascination (both personal and professional) with people and psychology, with an artistic bent.', 'image': imgMe },
    { 'title': 'My Hobbies', 'text': 'I love skiing and pride myself on my ability to teach anyone to ski in a day (bunnies to blues). Disc golf, tennis, fitness training and hiking are also some favorite pastimes. I also love books and writing and am a published fantasy author!', 'image': imgSki },
    { 'title': 'Lets Call Them Quirks', 'text': 'I am a voracious consumer of fantasy and art. If I find a book series I love, it’ll be hard to tear away and crawl out of my cave for sunlight.', 'image': imgFantasy },
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
    if (window.innerWidth < 1200) {
      return contentItems.map((item, index) => {
        return <div className='margins-small bottom-medium'>
          <div className='flexbox darker-box'>
              <a href={item.link} className='a-none flex1 box'>
                <img src= {item.image} width="100%"></img>
              </a>
              <a href={item.link} className='a-none flex1 box'>
                <div className='margins-small'>  
                  <h3 className='h3-primary left-align'>{item.title}</h3>
                  <p className='p-primary left-align'>{item.text}</p>
                </div>
              </a>
          </div>
        </div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div className='margins-small bottom-medium'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <div className='margins-small'>  
                    <h3 className='h3-primary left-align'>{item.title}</h3>
                    <p className='p-primary left-align'>{item.text}</p>
                  </div>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <img src= {item.image} width="100%"></img>
                </a>
            </div>
          </div>
        } else { 
          return <div className='margins-small bottom-medium'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <img src= {item.image} width="100%"></img>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <div className='margins-small'>  
                    <h3 className='h3-primary left-align'>{item.title}</h3>
                    <p className='p-primary left-align'>{item.text}</p>
                  </div>
                </a>
            </div>
          </div>
        }
      });
    }
  }



  return(
    <div className='mobile'>
    <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
    <Navigation />
      <h1 className="h1-primary center-align top-large bottom-medium">Lora Madera</h1>

      <div className='bio-content'>
        <div>
          <Items />
        </div>
        <div className='bottom-medium'>
          <h3 className='h3-primary center-align'>Contact</h3>
          <a href={ projLora } className='a-none flex1 box'>
            <p className='p-primary center-align'>PDF Resume</p>
          </a>
          <p className='p-primary center-align'>Lora Madera</p>
          <p className='p-primary center-align'>Email: lora.k.madera@gmail.com</p>
        </div>
      </div>
    <div className=''>
       <Footer />
    </div>
    </div>
  );

 



}


export { Bio }