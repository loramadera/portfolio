import React from "react";

import { Navigation } from './Navigation.js';
import './Bestiary.css';
import './common/styles/typography.css';
import './common/styles/spacing.css';

import imgHero from './images/UXUI/Bestiary/bestiaryhero.png';
import imgSwords from './images/UXUI/Bestiary/swords.png';
import imgPerson1 from './images/UXUI/Bestiary/person1.png';
import imgPerson2 from './images/UXUI/Bestiary/person2.png';
import imgPerson3 from './images/UXUI/Bestiary/person3.png';
import imgPerson4 from './images/UXUI/Bestiary/person4.png';
import imgBook1 from './images/UXUI/Bestiary/book1.png';
import imgBook2 from './images/UXUI/Bestiary/book2.png';
import imgBook3 from './images/UXUI/Bestiary/book3.png';



function Bestiary() {



	return (
		<div>
			<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
			<Navigation />
			<img className='best-hero' src={ imgHero } width="100%"></img>
			<h1 className='h1-broad'>The Bestiary</h1>
			<h2 className='h2-broad'>UX/UI</h2>
			<h2 className='h2-broad'>Mobile Game Design</h2>


			<div className='big-border'></div>
			<div className='margins-large'>
				<h4 className='h4-broad top-small'>The Bestiary - what is it?</h4>
				<p className='p-broad'>The Bestiary, designed to be a component of a mobile fantasy game in which a player encounters different monsters. Each level’s monsters are more challenging than the last, and it is up to the player to study them (their weaknesses, strengths, etc.).  As they advince, they will build a reference guide of what they have learned - their own personal bestiary.</p>
			</div>


			<div className='big-border'></div>
			<div className='flexbox'>
				<div className='flex1'>
					
				</div>
				<div className='flex1'>

				</div>

			</div>


		</div>
		
		);
	}


export { Bestiary }






















