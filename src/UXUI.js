import React from "react";

import { Navigation } from './Navigation.js';
import './UXUI.css';
import imgBookVerse from './images/UXUI/BookVerse/bookversehero4.png';
import imgBestiary from './images/UXUI/Bestiary/bestiaryhero.png';
import imgVACA from './images/UXUI/pp_vaca3.png';
import imgSadhan from './images/UXUI/uxui_sadhan.png';
import imgMCC from './images/UXUI/uxui_mcc.png';
import imgSpace from './images/UXUI/uxui_spaceexploration.png';
import imgGaia from './images/UXUI/uxui_gaia.png';




function UXUI() {
  const visualItems = [
    { 'title': 'VACA', 'text': 'A luxurious travel app visual design.', 'image': imgVACA, 'link': '/vaca' },
    { 'title': 'Sadhan', 'text': 'Meditation app visual design with timer and community interaction.', 'image': imgSadhan, 'link': '/sadhan' },
    { 'title': 'Moraga Country Club', 'text': 'Full rebranding and re-design of a popular East Bay country club.', 'image': imgMCC, 'link': '/mcc'},
     ];

  const interactItems = [
    { 'title': 'Space Exploration', 'text': 'A timeline of major space exploration events.', 'image': imgSpace, 'link': '/spacexploration'},
    { 'title': 'Project Gaia', 'text': 'An interactive educational interface on environmental sustainability.', 'image': imgGaia, 'link': '/gaia'},
  ];


  const visItems = visualItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className="uxui-item">
        <a className="uxui-link flexbox" href={item.link}>
          <div className='flex1'>
            <h3 className='uxui-h3'>{item.title}</h3>
            <p className='uxui-p'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className="uxui-item">
        <a className="uxui-link flexbox" href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1'>
            <h3 className='uxui-h3'>{item.title}</h3>
            <p className='uxui-p'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

  const intItems = interactItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className="uxui-item">
        <a className="uxui-link flexbox" href={item.link}>
          <div className='flex1'>
            <h3 className='uxui-h3'>{item.title}</h3>
            <p className='uxui-p'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className="uxui-item">
        <a className="uxui-link flexbox" href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1'>
            <h3 className='uxui-h3'>{item.title}</h3>
            <p className='uxui-p'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

  // move to Navigation.js file and include here with <Navigation />
  return (
    <div>
      <Navigation />   
       <div className='uxui'> 
        <div className='uxui-hero'>
          <h1 className='uxui-h1'>UX/UI & Design</h1>
          
          <a className='uxui-link' href='/bookverse'> 
            <h3 className='uxui-h3'>BookVerse</h3>
            <p className='uxui-p'>Interactive book “universe” discovery app.</p>
            <div className="flex1">
                <img src={imgBookVerse} width="100%"></img>
            </div>
          </a>
         
          <a className='uxui-link' href='/bestiary'> 
            <h3 className='uxui-h3'>The Bestiary</h3>
            <p className='uxui-p'>Game interface design.</p>
            <div className="flex1">
                <img src={imgBestiary} width="100%"></img>
            </div>
          </a>
        </div> 

        <h2 className='uxui-h2'>Visual Design & Branding</h2>
        <div className='uxui-content'>
          { visItems }
        </div>

        <h2 className='uxui-h2'>Interactive Design</h2>
        <div className='uxui-content'>
          { intItems }
        </div>

      </div>
    </div>
  );
}

export { UXUI }