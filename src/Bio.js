import React from "react";
import { Navigation } from './Navigation.js';
import './Bio.css';

import imgMe from './images/bio/me.png';
import imgSki from './images/bio/snow.png';
import imgFantasy from './images/bio/fantasy.png';


function Bio() {
  const bioItems = [
    { 'title': 'Bio', 'text': 'After graduating with a degree in economics from UC San Diego, I stumbled into design while pursuing a career in law, and it was the perfect intersection of my true passions - art and storytelling. I got my start in UX/UI design and web development (React and Flutter) and am passionate about building 3D worlds, metaverse, and immersive experiences. ', 'image': imgMe },
    { 'title': 'Hobbies', 'text': 'I love skiing and pride myself on my ability to teach anyone to ski in a day (bunnies to blues). Disc golf, tennis, fitness training and hiking are also some favorite pastimes. Fun fact: I also love writing and am a published author!', 'image': imgSki },
    { 'title': 'Lets Call Them Quirks', 'text': 'I’m a voracious consumer of fantasy - if I find a book series I love, it’ll be hard to tear away and crawl out of my cave for sunlight. I’m a Tolkien loremaster and Harry Potter acolyte, and my annual Hogwarts parties are very serious business (people fly in for them).  ', 'image': imgFantasy },
 ];


  const pageItems = bioItems.map((item, index) => {
    if (index % 2) {
      return <div className="bio-item">
        <a className="item_link flexbox" href={item.link}>
          <div className='flex1'>
            <h3 className="bio-h3">{item.title}</h3>
            <p className="bio-p">{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div className="bio-item">
        <a className="item_link flexbox" href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1'>
            <h3 className='bio-h3'>{item.title}</h3>
            <p className='bio-p'>{item.text}</p>
          </div>
        </a>
      </div>;
      }
    });


  return(
    <div>
    <Navigation />
      <h1 className="bio-h1">About Me</h1>
      <div className="bio-items">
        {pageItems}
      </div>

    </div>

  );

 



}


export { Bio }