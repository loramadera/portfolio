import React from "react";
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './Bio.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';

import imgMe from './images/bio/me.png';
import imgSki from './images/bio/snow.png';
import imgFantasy from './images/bio/fantasy.png';

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
    { 'title': 'My Bio', 'text': 'After graduating with a degree in economics from UC San Diego, I stumbled into design while pursuing a career in law, and it was the perfect intersection of my core passions and inclinations - art and storytelling. I got my start in UX/UI design and web development (React and Flutter) and am passionate about building 3D worlds, metaverse, and immersive experiences. ', 'image': imgMe },
    { 'title': 'My Hobbies', 'text': 'I love skiing and pride myself on my ability to teach anyone to ski in a day (bunnies to blues). Disc golf, tennis, fitness training and hiking are also some favorite pastimes. Fun fact: I also love writing and am a published author!', 'image': imgSki },
    { 'title': 'Lets Call Them Quirks', 'text': 'I’m a voracious consumer of fantasy - if I find a book series I love, it’ll be hard to tear away and crawl out of my cave for sunlight. I’m a Tolkien loremaster and Harry Potter acolyte, and my annual Hogwarts parties are very serious business (people fly in for them).  ', 'image': imgFantasy },
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
        return <div className='margins-small bottom-medium'>
          <div className='flexbox darker-box'>
              <a href={item.link} className='a-none flex1 box'>
                <img src= {item.image} width="100%"></img>
              </a>
              <a href={item.link} className='a-none flex1 box'>
                <div className='margins-small'>  
                  <h3 className='h3-broadacre left-align'>{item.title}</h3>
                  <p className='p-light left-align'>{item.text}</p>
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
                    <h3 className='h3-broadacre left-align'>{item.title}</h3>
                    <p className='p-light left-align'>{item.text}</p>
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
                    <h3 className='h3-broadacre left-align'>{item.title}</h3>
                    <p className='p-light left-align'>{item.text}</p>
                  </div>
                </a>
            </div>
          </div>
        }
      });
    }
  }



  return(
    <div>
    <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
    <Navigation />
      <h1 className="h1-broadacre center-align top-large bottom-medium">About Me</h1>

      <div className='dark-box margins-small top-large'>
            <div>
              <Items />
            </div>
          </div>
  <div className='top-medium mobile'>
     <Footer />
  </div>

    </div>
  );

 



}


export { Bio }