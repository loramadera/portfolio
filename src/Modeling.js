import React from "react";

import { Navigation } from './Navigation.js';
import './Modeling.css';

import imgCastle from './images/Modeling/castle.png';
import imgHallway from './images/Modeling/hallway.png';

import projCastle from './images/Modeling/Projects/castle.pdf';
import projHallway from './images/Modeling/Projects/hallway.pdf';


function Modeling() {
  const contentItems = [
    { 'title': 'Creepy Hallway', 'text': 'A hallway you do not want to visit.', 'image': imgHallway, 'link': projHallway },
    { 'title': 'Castle', 'text': 'A castle you DO want to visit.', 'image': imgCastle, 'link': projCastle },
  ];

  const modelingItems = contentItems.map((item, index) => {
    if (index % 2) {
      return <div className="modeling-item">
        <a className="modeling-link flexbox" href={item.link}>
          <div className='flex1'>
            <h3 className='modeling-h3'>{item.title}</h3>
            <p className='modeling-p'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div className="modeling-item">
        <a className="modeling-link flexbox" href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1'>
            <h3 className='modeling-h3'>{item.title}</h3>
            <p className='modeling-p'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

      return (
        <div>
          <Navigation />   
           <div className="modeling"> 
            <div className="modeling-hero">
              <h1 className='modeling-h1'>3D Modeling</h1>
               <div className="modeling-content">
                { modelingItems }
                </div>
            </div>
           </div>   
        </div>

    );
}

export { Modeling }
