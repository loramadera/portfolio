import React from "react";

import './Wedding.css';
import imgUs from './images/us.jpeg';
import imgFlower from './images/flowerborder.png';
import '../common/styles/spacing.css';




function Wedding() {
 
  return (
    <div>
    <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
      <div className='img-us'>
        <img src= {imgUs} className='image-us-image'></img>
      </div>
      <div className='flexbox'>
        <div className='img-empty'></div>
        <div className='flex1 content'>
          <img src= {imgFlower} width="100%"></img>
          <h1 className='h1-primary center-align'>Luke & Lora</h1>
          <h2 className='h2-primary center-align top-small'>Welcome to our wedding!</h2>
          <h2 className='h2-primary center-align top-small'>04.10.2023</h2>
        </div>
      </div>
   
    </div>
  );

}

export { Wedding }
