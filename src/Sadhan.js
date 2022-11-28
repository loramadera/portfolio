import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Sadhan.css';

import imgHero from './images/UXUI/Sadhan/sadhanhero.png';
import imgTimer from './images/UXUI/Sadhan/omg.png';
import imgBeauty from './images/UXUI/Sadhan/sadhanbeauty.png';
import imgColors from './images/UXUI/Sadhan/colors.png';
import imgIcons1 from './images/UXUI/Sadhan/icons1.png';
import imgIcons2 from './images/UXUI/Sadhan/icons2.png';

function Sadhan() {
const contentItems = [
	{'title': 'Timer', 'text': 'True to its theme, the meditation timer features an original design featuring the Om symbol.', 'image': imgTimer },
	{'title': 'Version: Artistry & Textures', 'text': 'Metallic and detailed features are  artistic demonstrations within visual design.', 'image': imgIcons1 },
	{'title': 'Version: Design for Programming', 'text': 'For programming execution, iconography designs would be made mindful of the parameters of coding.', 'image': imgIcons2 },
	
];

const sadhanItems = contentItems.map((item, index) => {
	if (index % 2) {
		return <div className='sadhan-item'>	
			<div className='flexbox margins-large'>	
				<div className='flex1 box'>
					<div className='flexbox'>
						<div className='flex1'></div>
						<div className='flex1'><img className='sadhan-img center-align' src= {item.image} width="100%"></img></div>
						<div className='flex1'></div>
					</div>
				</div>
				<div className='flex1 box'>
					<h2 className='h2-broad left-align margins-small'>{item.title}</h2>
					<p className='p-broad margins-small'>{item.text}</p>
				</div>
			</div>
		</div>
	} else {
		return <div className='sadhan-item'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h2 className='h2-broad left-align margins-small'>{item.title}</h2>
					<p className='p-broad margins-small'>{item.text}</p>
				</div>
				<div className='flex1 box'>
					<div className='flexbox'>
						<div className='flex1'></div>
						<div className='flex1'><img className='sadhan-img center-align' src= {item.image} width="100%"></img></div>
						<div className='flex1'></div>
					</div>
				</div>
			</div>
		</div>

	}
});


return (
<div>
<Navigation />
<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
<div>
	<div className="sadhan-hero">
		<img src={ imgHero } width="100%"></img>
	</div>
	<div>
		<h1 className='h1-broad center-align top-medium'>Sadhan</h1>
		<h2 className='h3-broad'>Meditation App</h2>
		<h2 className='h3-broad opacity bottom-medium'>Visual Design</h2>
		<p className='p-broad center-align'>Sadhan is defined functionally by its meditation timer and connection with other members of a meditation community.</p>
	</div>
	<div className='dark-box top-dark'>
			<div className='flexbox margins-medium top-medium'>
				<div className='flex1 box'>
					<img className='sadhan-img' src= { imgColors } width="100%"></img>
				</div>
				<div className='flex1 box'>
						<h3 className='h3-broad margins-small'>Meditation Timer</h3>
						<p className='p-broad margins-small'>Starts/stops timer, toggles chime and prayer.</p>
						<h3 className='h3-broad margins-small'>Group Meditation</h3>
						<p className='p-broad margins-small'>Displays group meditation schedules, charts other meditators around the world.</p>
				</div>
			</div>

			<div className='sadhan-content'>
				{ sadhanItems }
			</div>

			<div className='sadhan-beauty'>
				<img src= {imgBeauty} width="100%"></img>
			</div>
		</div>	
</div>

 <Footer />
</div>
);
}

export { Sadhan }