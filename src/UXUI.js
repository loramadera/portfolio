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


  const visItems = visualItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

  const intItems = interactItems.map((item, index) => {
    // 1st, 3rd, ...
    if (index % 2) {
      return <div key={index} className='margins-small bottom-medium'>
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
          </div>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
        </a>
      </div>;
    } else {
      return <div key={index} className="margins-small bottom-medium">
        <a className='a-none flexbox darker-box' href={item.link}>
          <div className='img flex1'><img src={item.image} width="100%" /></div>
          <div className='flex1 box'>
            <h3 className='h3-broadacre center-align'>{item.title}</h3>
            <p className='p-light center-align'>{item.text}</p>
          </div>
        </a>
      </div>;
    }
  });

  


  return (
    <div>
      <Navigation />   
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
          <h1 className='h1-broadacre center-align top-large'>UX/UI & Design</h1>
          <div className='dark-box top-dark'>
                <div className='padding-large'> 
                <div><h3 className='h3-broadacre center-align bottom-small opacity'>UX/UI</h3></div> 
                  <div>
                    <a className='a-none' href='/bookverse'> 
                      <div>
                        <h3 className='h3-broadacre center-align'>BookVerse</h3>
                        <p className='p-light center-align bottom-small'>Interactive book “universe” discovery app.</p>
                      </div>   
                      <div className="flex1 darker-box padding-large">
                          <img src={imgBookVerse} width="100%"></img>
                      </div>
                    </a>
                   
                    <a className='a-none' href='/bestiary'> 
                        <div>  
                          <h3 className='h3-broadacre center-align top-medium'>The Bestiary</h3>
                          <p className='p-light center-align bottom-small'>Game interface design.</p>
                        </div>
                      <div className="flex1 darker-box padding-large">
                          <img src={imgBestiary} width="100%"></img>
                      </div>
                    </a>
                </div>
              </div>         
          </div>

          <div className='dark-box top-dark'>
                <div className='padding-large'> 
                <div><h3 className='h3-broadacre center-align bottom-small opacity'>Branding & Visual Design</h3></div> 
                  <div>
                    <a className='a-none' href='/mcc'> 
                      <div>
                        <h3 className='h3-broadacre center-align'>Moraga Country Club</h3>
                        <p className='p-light center-align bottom-small'>Full re-branding of East Bay county club establishment.</p>
                      </div>   
                      <div className="flex1 darker-box padding-large">
                          <img src={imgMCC} width="100%"></img>
                      </div>
                    </a>
                </div>
              </div>         
          </div>


           <div className='dark-box top-dark padding-large'>
            <h3 className='h3-broadacre center-align bottom-small opacity'>Interactive Design</h3>
            <div>
              { intItems }
            </div>
          </div>

          <div className='dark-box top-dark padding-large'>
            <h3 className='h3-broadacre center-align bottom-small opacity'>App & Visual Design</h3>
            <div>
              { visItems }
            </div>
          </div>



    <Footer />
    </div>
  );
}

export { UXUI }