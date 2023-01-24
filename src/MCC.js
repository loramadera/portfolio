import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './MCC.css';
import './common/styles/typography.css';
import './common/styles/spacing.css';

import imgHero from './images/UXUI/MCC/mcchero.png';
import imgLC from './images/UXUI/MCC/logosincolor.png';
import imgExplorations from './images/UXUI/MCC/explorations.png';
import imgSignage from './images/UXUI/MCC/signage.png';
import imgLetterhead from './images/UXUI/MCC/letter.png';
import imgMagazine from './images/UXUI/MCC/magazine.png';
import imgFB from './images/UXUI/MCC/fb.png';
import imgLaptop from './images/UXUI/MCC/laptop.png';

import projMCC from './images/UXUI/MCC/MCC.pdf';

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


function MCC() {

	const logoItems = [
		{ 'title': 'Logo Explorations', 'text': 'Moraga is a small town in the San Francisco East Bay region. Known for its lush green landscape and surplus of trees, the beginning of this re-branding project seemed obvious - encapsulate the essence of the club and its surrounding region in its logo.', 'image': imgExplorations },
		{ 'title': 'Final Logo', 'text': 'Further exploration solidified the  direction of trees and petals in the final design. The logo, in all its forms, emulates the iconic tree that stands in the middle of the country club’s golf course.', 'image': imgLC },

		];

		const [items, setItems] = React.useState(logoItems)
	  React.useEffect(() => {
	    const debouncedHandleResize = debounce(function handleResize() {
	      setItems(logoItems)
	    }, 100)

	    window.addEventListener('resize', debouncedHandleResize)

	    return _ => {
	      window.removeEventListener('resize', debouncedHandleResize)
	    }
	  })


	  function Items() {  
	    if (window.innerWidth < 1025) {
	      return logoItems.map((item, index) => {
	        return <div className='margins-extra'>
			<div className='flexbox top-small'>
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h3-primary mobile'>{item.title}</h4>
						<p className='p-primary'>{item.text}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
	      });
	    } else {
	      return logoItems.map((item, index) => {
		       if (index % 2) {
		          return <div>	
				<div className='flexbox top-small'>	
					<div className='flex1 box'>
						<div className='margins-small'>	
							<h4 className='h3-primary mobile'>{item.title}</h4>
							<p className='p-primary'>{item.text}</p>
						</div>
					</div>
					<div className='flex1 margins-small box'>
						<img src= {item.image} width="100%"></img>
					</div>
				</div>
			</div>
		} else {
			return <div>
				<div className='flexbox top-small'>
					<div className='flex1 margins-small box'>
						<img src= {item.image} width="100%"></img>
					</div>
					<div className='flex1 box'>
						<div className='margins-small'>	
							<h4 className='h3-primary mobile'>{item.title}</h4>
							<p className='p-primary'>{item.text}</p>
						</div>
					</div>
				</div>
			</div>
			}
		   });
	    }
	  }



	return (
		<div className='mobile'>
			<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
			<Navigation />
			<div className='margins-larger img-mcc top-small'>
				<img src={ imgHero } width="100%"></img>
			</div>
			<div className='flexbox top-small margins-large row'>
				<div className='flex1 margins-small'>
					<a className='a-none' href='/gaia'>
						<p className='p-primary'>Previous</p>
					</a>
				</div>	
			</div>

			<div className='margins-large top-small'>
				<h1 className='h1-primary center-align'>Moraga Country Club</h1>
				<p className='p-primary margins-extra center-align'>A case study project featuring a complete brand reconstruction of logos, online & social media presence, letterhead, and advertising.</p>
				<div className='flex1 center-align margins-small'>
					<a href= {projMCC}>
						<button className='best-case-study padding-ultra-s mobile-margins'>View Full Case Study</button>
					</a>		
				</div>

				<div className='mobile'>
					<div className='bottom-border'>
						<h3 className='h3-primary'>About the Club</h3>
					</div>
				</div>	
				<div className='margins-small'>
					<p className='p-primary'>The new Moraga Country Club clubhouse opened in 2012 and was the final piece of an elaborate puzzle, making Moraga Country Club the outstanding facility it is today. The architecture of the building replicates the early Californian Mission Style with stucco exterior, tile roof and decorative iron and woodwork. The interior and exterior designs are one with its surroundings and is the jewel of the club. </p>
				</div>


				<div className='bottom-border'>
					<h3 className='h3-primary'>Logos</h3>
				</div>
				<div>
				 <Items />
				</div>


				<div className='bottom-border'>
					<h3 className='h3-primary'>Branding</h3>
				</div>
				<div className='margins-small'>	
						<img className='bottom-small center-align border-box' src={ imgSignage } width="100%"></img>
						<img className='bottom-small center-align border-box' src={ imgLetterhead } width="100%"></img>
						<img className='bottom-small center-align border-box' src={ imgMagazine } width="100%"></img>
						<img className='bottom-small center-align border-box' src={ imgFB } width="100%"></img>
						<img className='bottom-small center-align border-box' src={ imgLaptop } width="100%"></img>
				</div>


				<div className='flexbox top-small row'>
					<div className='flex1 margins-small'>
						<a className='a-none' href='/gaia'>
							<p className='p-primary'>Previous</p>
						</a>
					</div>		
				</div>
			</div>

      <div className='mobile'>
			 <Footer />
			</div>

		</div>		
		);
	}


export { MCC }






















