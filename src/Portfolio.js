import React from "react";

import { Navigation } from './Navigation.js';
import './Portfolio.css';
import imgWhite from './images/Portfolio/white.png';
import imgVaca from './images/Portfolio/pp_vaca.png';
import imgCode from './images/Portfolio/pp_code.png';
import imgModeling from './images/Portfolio/pp_modeling2.png';
import imgESO from './images/Portfolio/pp_eso2.png';


function Portfolio() {
  const contentItems = [
    { 'title': 'UX/UI & Design', 'text': 'UX/UI, visual design & branding, and interactive design projects.', 'image': imgVaca, 'link': "/uxui" },
    { 'title': 'Code', 'text': 'Unity projects coded in C# as well as React, HTML, CSS, and PHP.', 'image': imgCode, 'link': "/code" },
    { 'title': '3D-Modeling', 'text': '3D art projects created in Blender.', 'image': imgModeling, 'link': "/3dmodeling" },
    { 'title': 'Digital Art', 'text': 'Digital portraits (and others).', 'image': imgESO, 'link': "/digitalart" },
  ];

  const portfolioItems = contentItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return 
      <div className="portfolio-item">
        <a className="portfolio-link flexbox" href={item.link}>
          <div className='flex1'>
            <h3 className='portfolio-h3'>{item.title}</h3>
            <p className='portfolio-p'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div className="portfolio-item">
        <a className="portfolio-link flexbox" href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1'>
            <div className='portfolio-info'>
              <h3 className='portfolio-h3'>{item.title}</h3>
              <p className='portfolio-p'>{item.text}</p>
            </div> 
          </div>
        </a>
      </div>;
    }
  });

  // move to Navigation.js file and include here with <Navigation />
  return (
    <div>
      <Navigation />
      <div className="portfolio">
        <div className="portfolio-hero">
          <div className="flexbox">
            <div className="flex1">
              <img src={imgWhite} width="100%"></img>
            </div>
            <div className="flex1">
              <h1 className="portfolio-h1">Hi, I'm Lora!</h1>
              <p className="portfolio-p">I'm a UX/UI designer in the San Francisco Bay Area with experience in visual design, programming, 3D-modeling, and digital art.</p>
            </div>
          </div>
        </div> 
        <h2 className='portfolio-h2'>What I do</h2>
        <div className="portfolio-content">
          { portfolioItems }
        </div>
      </div>
    </div>
  );

}


export { Portfolio }
