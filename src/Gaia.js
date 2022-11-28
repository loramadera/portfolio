import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Gaia.css';

import imgHero from './images/UXUI/Gaia/gaiahero.png';
import imgBeauty from './images/UXUI/Gaia/gaiabeauty.png';
import imgColor from './images/UXUI/Gaia/colors.png';
import imgLayout from './images/UXUI/Gaia/layout.png';
import imgLogo from './images/UXUI/Gaia/logo.png';
import imgFinal from './images/UXUI/Gaia/finallogo.png';


function Gaia() {
const contentItems = [
	{'title': 'Basic Layout', 'text': 'The layout of this interactive tool would feature the three pillars of sustainability, each of them active in a one-at-a-time succession format.', 'image': imgLayout },
	{'title': 'Digital Logo Explorations', 'text': 'After a series of hand-drawn sketches, the logos that emblemized Gaia were ones that emulated flowers or leaves. Further explorations drove it in a more angular direction - further away from resembling leaves and flowers directly.', 'image': imgLogo },
	{'title': 'Digital Logo Explorations', 'text': 'The final logo mimics a petal design and echoes the final layout.', 'image': imgFinal },
	{'title': 'Colors & Textures', 'text': 'The final logo mimics a petal design and echoes the final layout.', 'image': imgColor },

];

const gaiaItems = contentItems.map((item, index) => {
	if (index % 2) {
		return <div className='gaia-item bottom-medium'>	
			<div className='flexbox margins-large'>	
				<div className='img flex1 box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<h2 className='h2-broad left-align margins-small'>{item.title}</h2>
					<p className='p-broad margins-small'>{item.text}</p>
				</div>
			</div>
		</div>
	} else {
		return <div className='gaia-item'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h2 className='h2-broad left-align margins-small'>{item.title}</h2>
					<p className='p-broad margins-small'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src={item.image} width="100%"></img>
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
	<div className="gaia-hero top-large">
		<img src={ imgHero } width="100%"></img>
	</div>
	<div>
		<h1 className='h1-broad center-align top-medium'>Project Gaia</h1>
		<h2 className='h3-broad'>A learning & interactivity tool.</h2>
		<h2 className='h3-broad opacity bottom-medium'>Visual & Interactive Design</h2>
		<p className='p-broad center-align'>Gaia is an informational & interactivity tool inspired by the three pillars of sustainability: economy, environment, and society.</p>
	</div>
	
	<div className='dark-box top-dark'>
			<div className='flexbox margins-large'>
				<div className='top-medium'>
				<div className='darker-box'>
					<h3 className='h3-broad top-medium bottom-small center-align'>Pillars of Sustainability</h3>
						<div className='flexbox top-small bottom-medium'>
						<div className='flex1 margins-small'>
							<h4 className='h4-broad'>Economy</h4>
							<p className='p-broad'>The economy pillar refers to jobs, incentives to encourage sustainable practices, natural resource accounting, cost and price structures, cost-benefit analysis, and quantified ecosystem analysis.</p>
						</div>
						<div className='flex1 margins-small'>
							<h4 className='h4-broad'>Environment</h4>
							<p className='p-broad'>The environmental pillar comprises ecosystem services, green engineering & chemistry development, air/water quality, ecosystem stressors and resource integrity.</p>
						</div>
						<div className='flex1 margins-small'>
							<h4 className='h4-broad'>Society</h4>
							<p className='p-broad'>Environmental justice, human health and participation, education, resource security and sustainable developments fall within the societal pillar.</p>
						</div>
						</div>
					</div>
				</div>		
		</div>	

		<div className='top-medium'>
				{ gaiaItems }
			</div>

			

			

			

			<div className='gaia-beauty'>
				<img className='darker-box' src= {imgBeauty} width="100%"></img>
			</div>
		</div>	
</div>

 <Footer />
</div>
);
}

export { Gaia }