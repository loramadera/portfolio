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

import projSadhan from './images/UXUI/Sadhan/Sadhan.pdf';


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

function Sadhan() {
const contentItems = [
	{'title': 'Timer', 'text': 'True to its theme, the meditation timer has an original design featuring the Om symbol.', 'image': imgTimer },
	{'title': 'Version: Artistry & Textures', 'text': 'Metallic and detailed features are  artistic demonstrations within visual design.', 'image': imgIcons1 },
	{'title': 'Version: Design for Performance', 'text': 'For programming, iconography designs would be made mindful of the parameters of a coded execution & performance.', 'image': imgIcons2 },
	
];

const [items, setItems] = React.useState(contentItems)
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setItems(contentItems)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

function Items() {
    if (window.innerWidth < 1025) {
      return contentItems.map((item, index) => {
        return <div className='sadhan-item mobile'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h4 className='s4-primary left-align margins-small'>{item.title}</h4>
					<p className='s-primary margins-small'>{item.text}</p>
				</div>
				<div className='flex1 box'>
					<div className='flexbox center-align'>
						<div className='flex1'><img className='sadhan-img center-align' src= {item.image} width="100%"></img></div>
					</div>
				</div>
			</div>
		</div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div className='margins-medium sadhan-item mobile'>	
			<div className='flexbox'>	
				<div className='flex1 box'>
					<h4 className='s4-primary left-align'>{item.title}</h4>
					<p className='s-primary'>{item.text}</p>
				</div>
				<div className='flex1 box center-align'>
					<div className='flexbox'>
						<div className='flex1'><img className='sadhan-img' src= {item.image} width="100%"></img></div>
					</div>
				</div>
			</div>
		</div>
	} else {
		return <div className='margins-medium sadhan-item'>
			<div className='flexbox'>
				<div className='flex1 box center-align'>
					<div className='flexbox'>
						<div className='flex1'><img className='sadhan-img' src= {item.image} width="100%"></img></div>
					</div>
				</div>
				<div className='flex1 box'>
					<h4 className='s4-primary left-align'>{item.title}</h4>
					<p className='s-primary '>{item.text}</p>
				</div>
			</div>
		</div>
        }
      });
    }
  }




return (
<div className='mobile'>
<Navigation />
<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
<div  className='margins-large'>
	<div className="sadhan-hero margins-small">
		<img src={ imgHero } width="100%"></img>
	</div>

	<div className='flexbox top-small row margins-small'>
		<div className='flex1'>
			<a className='a-none' href='/vaca'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>	
	</div>

	<div className='bottom-medium'>
		<h1 className='h1-primary center-align top-small'>Sadhan</h1>
		<p className='p-primary center-align margins-extra'>A meditation app I designed and partially coded, defined functionally by its meditation timer and connection with other members of a meditation community - the ability to see retreat schedules and other members.</p>
		<div className='flex1 center-align margins-small'>
			<a href= {projSadhan}>
				<button className='best-case-study padding-ultra-s mobile-margins'>View Full Process</button>
			</a>		
		</div>
	</div>
	
	<div className='mobile sadhan-box bottom-large margins-small'>
		<div>
				<div className='flexbox margins-medium top-medium bottom-medium'>
					<div className='flex1 box'>
							<h4 className='s4-primary mobile-margins-3'>Color & Atmosphere</h4>
							<p className='s-primary  mobile-margins-3'>The color palette of thix app, featuring bright blues, yellows, and greens, reflects love for nature and a spirituality core.</p>
							<h4 className='s4-primary mobile-margins-3'>Meditation Timer</h4>
							<p className='s-primary mobile-margins-3'>Starts/stops timer, toggles chime and prayer.</p>
							<h4 className='s4-primary mobile-margins-3'>Group Meditation</h4>
							<p className='s-primary  mobile-margins-3'>Displays group meditation schedules, charting meditators around the world.</p>
					</div>
					<div className='flex1 box center-align'>
						<img className='sadhan-img' src= { imgColors } width="100%"></img>
					</div>
				</div>

				<div className='sadhan-content'>
					<Items />
				</div>
			</div>	
		</div>
	</div>	

	<div className='sadhan-beauty mobile'>
					<img src= {imgBeauty} width="100%"></img>
				</div>

	<div className='flexbox top-small margins-extra row'>
		<div className='flex1'>
			<a className='a-none' href='/vaca'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>	
	</div>

	<div className='mobile top-small'>
		 <Footer />
	</div>
</div>
);
}

export { Sadhan }