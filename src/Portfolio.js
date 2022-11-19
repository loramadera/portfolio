import React from "react";

import { Navigation } from './Navigation.js';
import './Portfolio.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';


import imgProfile1 from './images/Portfolio/profilelarge.png';
import imgVaca from './images/Portfolio/pp_vaca.png';
import imgCode from './images/Portfolio/pp_code.png';
import imgModel from './images/Portfolio/pp_modeling2.png';
import imgESO from './images/Portfolio/pp_eso2.png';
import imgArrows from './images/Portfolio/arrows.png';


function Portfolio() {
  const contentItems = [
    {'title': 'UX/UI & Design', 'text': 'UX/UI development, visual design & branding, and interactive design projects.', 'image': imgVaca },
    {'title': 'Coding', 'text': 'Unity projects coded in C# as well as React, HTML, CSS, and PHP.', 'image': imgCode },
    {'title': '3D-Modeling', 'text': '3D art projects created in Blender.', 'image': imgModel },
    {'title': 'Digital Art', 'text': 'Digital portraits (and others).', 'image': imgESO },

  ];

  const portfolioItems = contentItems.map((item, index) => {
    if (index % 2) {
      return <div className='flexbox darker-box'>
          <div className='flex1 box'>
            <div className='margins-extra'>  
              <h3 className='h3-broadacre align-center'>{item.title}</h3>
              <p className='p-light align-center'>{item.text}</p>
            </div>
          </div>
          <div className='flex1 box'>
            <img src= {item.image} width="100%"></img>
          </div>
      </div>
    } else { 
      return <div className='flexbox darker-box'>
          <div className='flex1 box'>
            <img src= {item.image} width="100%"></img>
          </div>
          <div className='flex1 box'>
            <div className='margins-extra'>  
              <h3 className='h3-broadacre align-center'>{item.title}</h3>
              <p className='p-light align-center'>{item.text}</p>
            </div>
          </div>
      </div>
    }
  });


  return (
    <div>
      <Navigation />
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
      <div className='flexbox'> 
          <div className='flex1 box'>
            <img className='img-profile padding-medium' src= {imgProfile1} width="100%"></img>
          </div>
        <div className='flex1 box'>
          <h1 className='h1-broadacre'>Nice to meet you! I'm Lora.</h1>
              <div className='flexbox top-small'>
                  <div className='flex1'>
                        <p className='p-bold'>Work</p>
                  </div>
                  <div className='flex2'>
                        <p className='p-light'>UX/UI Designer, Developer, 3D Modeler, Visual Designer</p>
                  </div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
               </div>
                <div className='flexbox'>
                  <div className='flex1'>
                        <p className='p-bold'>Life</p>
                  </div>
                  <div className='flex2'>
                        <p className='p-light'>Digital Artist, Gamer, Bookworm, Ski Instructor, Writer</p>
                  </div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
                  <div className='flex1'></div>
               </div>
            </div>   
      </div>
      <div className='align-center'> <img className='img-arrows' src= { imgArrows } ></img></div>  

      <div className='dark-box top-dark'>
        <h2 className='h2-broadacre top-medium bottom-medium box'>What I Do</h2>  
          { portfolioItems }
        </div>
       <div>
      


      </div>   
      
    </div>
  );

}


export { Portfolio }
