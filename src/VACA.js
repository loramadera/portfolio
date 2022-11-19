import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './VACA.css';

import imgHero from './images/UXUI/VACA/vacahero.png';
import imgBeau from './images/UXUI/VACA/beautyshot.png';
import imgColor from './images/UXUI/VACA/colors.png';
import imgIcon from './images/UXUI/VACA/icons.png';
import imgLogo from './images/UXUI/VACA/logo.png';
import imgOnboard from './images/UXUI/VACA/onboarding.png';
import imgStyle from './images/UXUI/VACA/styletile.png';

function VACA() {
const contentItems = [
	{'title': 'Logo Creation', 'text': 'Following a series of sketches, the intended logo for this project would convey sophistication and subtly hint at multiple forms of travel - flight and voyage.', 'image': imgLogo },
	{'title': 'Typography and Textures', 'text': 'A style tile demonstrates various color and texture explorations, finishign with type design choices.', 'image': imgStyle },
	{'title': 'Iconography & Data Visuals', 'text': 'It was important for the iconography and tools in this application to reflect the app’s atmosphere and luxurious intent.', 'image': imgIcon },
];

const vacaItems = contentItems.map((item, index) => {
	if (index % 2) {
		return <div className='vaca-item'>	
			<div className='flexbox'>	
				<div className='flex1 box'>
					<h2 className='vaca-h2'>{item.title}</h2>
					<p className='vaca-p'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
		return <div className='vaca-item'>
			<div className='flexbox'>
				<div className='img flex1 box'>
					<img src={item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<h2 className='vaca-h2'>{item.title}</h2>
					<p className='vaca-p'>{item.text}</p>
				</div>
			</div>
		</div>

	}
});


return (
<div>
<Navigation />
<div className='vaca'>	
	<div className="vaca-hero">
		<img src={ imgHero } width="100%"></img>
	</div>
	<div>
		<h1 className='vaca-h1'>VACA</h1>
		<h2 className='vaca-h2'>The Travel App</h2>
		<p className='vaca-hero-text'>VACA allows the tracking and creation of a travel project, start to finish. Budgets, daily schedules, and weather forecasts are some of the features in this app.</p>
	</div>
	<div className='flexbox'>
		<div className='flex1 box'>
			<img src= { imgColor } width="100%"></img>
		</div>
		<div className='flex1 box'>
				<h3 className='vaca-h3'>Tracking</h3>
				<p className='vaca-p'>Seasonal weather trends, regional site-seeing index, flight and hotel booking calendar</p>
				<h3 className='vaca-h3'>Target Audience</h3>
				<p className='vaca-p'>age 25-45
				married with children
				working class</p>
				<h3 className='vaca-h3'>Word List</h3>
				<p className='vaca-p'>travel, booking, flights, country, abroad, nature, planning, trip, vacation, overseas, hotel, boarding, itinerary, schedule, check list</p>
		</div>
	</div>

	<div className='vaca-content'>
		{ vacaItems }
	</div>

	<div className='vaca-onboard'>
		<img src= {imgOnboard} width="100%"></img>
	</div>

	<div className='vaca-beauty'>
		<img src= {imgBeau} width="100%"></img>
	</div>

</div>

 <Footer />
</div>
);
}

export { VACA }