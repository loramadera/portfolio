import React from "react";
import {useState, useEffect} from 'react';

import { Navigation } from './ProductDemoNav.js';

import imgButterfly from './Images/butterfly1.png';


function ProductDemoNav() {


 
  return (
    <div className="product-demo">
      <link rel="stylesheet" href="https://use.typekit.net/guv2awx.css"></link>
      <div className="product-demo-nav-header">
        <div className="product-demo-nav-background">
          <img className='img-butterfly' src={imgButterfly} width='100%'></img>
        </div> 
        <div className='product-demo-nav-foreground'>
          <div className="flexbox">  
            <div className="flex1">&nbsp;</div>
            <div className='right-align top-small'>   
              <a href="/product-demo-home" className='product-nav product-primary padding-small'>Home</a>
              <a href="/product-demo" className='product-nav product-primary padding-small'>Creation</a>
              <a href="/product-demo-cart" className='product-nav product-primary padding-small'>Cart</a>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
  
}

export { ProductDemoNav }
