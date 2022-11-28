import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './MCC.css';
import './common/styles/typography.css';
import './common/styles/spacing.css';

import imgHero from './images/UXUI/MCC/mcchero7.png';
import imgLC from './images/UXUI/MCC/logosincolor.png';
import imgWhite from './images/UXUI/MCC/whitelogo.png';
import imgExplorations from './images/UXUI/MCC/explorations.png';
import imgSignage from './images/UXUI/MCC/signage.png';
import imgLetterhead from './images/UXUI/MCC/letter.png';
import imgMagazine from './images/UXUI/MCC/magazine.png';
import imgFB from './images/UXUI/MCC/fb.png';
import imgLaptop from './images/UXUI/MCC/laptop.png';




function MCC() {

	const logoItems = [
		{ 'title': 'Logo Explorations', 'text': 'Moraga is a small town in the San Francisco East Bay region. Known for its lush green landscape and surplus of trees, the beginning of this re-branding project seemed obvious - encapsulate the essence of the club and its surrounding region in its logo.', 'image': imgExplorations },
		{ 'title': 'Final Logo', 'text': 'Further exploration solidified the  direction of trees and petals in the final design. The logo, in all its forms, emulates the iconic tree that stands in the middle of the country club’s golf course.', 'image': imgLC },

		];


	const logoContent = logoItems.map((item, index) => {
	if (index % 2) {
		return <div className='margins-extra'>	
			<div className='flexbox top-small'>	
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-broad '>{item.title}</h4>
						<p className='p-broad'>{item.text}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
		return <div className='margins-extra'>
			<div className='flexbox top-small'>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-broad '>{item.title}</h4>
						<p className='p-broad'>{item.text}</p>
					</div>
				</div>
			</div>
		</div>
		}
	});




	return (
		<div>
			<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
			<Navigation />
			<img className='top-large' src={ imgHero } width="100%"></img>
			<h1 className='h1-aleg-b top-medium center-align'>Moraga Country Club</h1>
			<h2 className='h2-aleg-b'>Branding Re-Design</h2>


			<div className='bottom-border'>
				<h3 className='h3-alegreya'>About the Club</h3>
			</div>
			<div className='margins-large'>
				<p className='p-broad'>The new Moraga Country Club clubhouse opened in 2012 and was the final piece of an elaborate puzzle, making Moraga Country Club the outstanding facility it is today. The architecture of the building replicates the early Californian Mission Style with stucco exterior, tile roof and decorative iron and woodwork. The interior and exterior designs are one with its surroundings and is the jewel of the club. </p>
			</div>


			<div className='bottom-border'>
				<h3 className='h3-alegreya'>Logos</h3>
			</div>
			<div>
			 { logoContent }
			</div>


			<div className='bottom-border'>
				<h3 className='h3-alegreya'>Branding</h3>
			</div>
			<div className='margins-medium'>	
					<img className='darker-box padding-medium center-align border-box' src={ imgSignage } width="100%"></img>
					<img className='darker-box padding-medium center-align border-box' src={ imgLetterhead } width="100%"></img>
					<img className='darker-box padding-medium center-align border-box' src={ imgMagazine } width="100%"></img>
					<img className='darker-box padding-medium center-align border-box' src={ imgFB } width="100%"></img>
					<img className='darker-box padding-medium center-align border-box' src={ imgLaptop } width="100%"></img>
			</div>



		      <Footer />

		</div>		
		);
	}


export { MCC }






















