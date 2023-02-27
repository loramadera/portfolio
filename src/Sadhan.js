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
        return <div className='sadhan-box'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h2 className='s4-primary left-align margins-tiny'>{item.title}</h2>
					<p className='s-primary margins-tiny'>{item.text}</p>
				</div>
				<div className='img flex1 box bottom-small'>
					<img src={item.image} width="100%"></img>
				</div>
			</div>
		</div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
      return <div className='sadhan-box'>
			<div className='flexbox'>
				<div className='flex1 box'>
					<h2 className='s4-primary left-align margins-tiny'>{item.title}</h2>
					<p className='s-primary margins-tiny'>{item.text}</p>
				</div>
				<div className='img flex1 box bottom-small'>
					<img src={item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
			return <div className='sadhan-box'>	
			<div className='flexbox'>	
				<div className='img flex1 box bottom-small'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<h2 className='s4-primary left-align margins-tiny'>{item.title}</h2>
					<p className='s-primary margins-tiny'>{item.text}</p>
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

	<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/vaca'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/gaia'>
				<p className='p-primary'>Next</p>
			</a>
		</div>		
	</div>

	<div>
		<h1 className='h1-primary center-align top-medium'>Sadhan</h1>
		<div className='flex1 center-align margins-small top-small'>
			<a href= {projSadhan}>
				<button className='best-case-study padding-ultra-s mobile-margins'>View Full Process</button>
			</a>		
		</div>
	</div>

	<div className='other-border mobile margins-small bottom-small'></div>
	
	<div className='bottom-large margins-small mobile'>
		<div>
				<div className='margins-tiny'>
					<div className='flexbox top-small bottom-medium'>
						<div className='flex1 box'>
							<h4 className='h3-primary top-small'>Meditation App Timer</h4>
							<p className='p-primary'>The meditation timer features a start/stop functionality. It includes a toggle option for a chime that starts and ends the meditation, as well as a toggle option for a short prayer before the meditation begins.</p>
							<h4 className='h3-primary'>Group Meditation</h4>
							<p className='p-primary '>The discovery page features a schedule for the meditation retreat group sessions, and also shows meditators all around the world. Each meditator's profile icon shows if/when they are actively meditating, and how far along they are in the session time they set.</p>
							<h4 className='h3-primary'>Color & Atmosphere</h4>
							<p className='p-primary '>The color palette of thix app, featuring bright blues, yellows, and greens, reflects love for nature and a spirituality core.</p>
						</div>
					</div>
				</div>	
			
				<div className='sadhan-marg'>
					<Items />
				</div>
			</div>
			<div className='mobile'>
				<img src= {imgBeauty} width="100%"></img>
			</div>
		</div>

	<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/vaca'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/gaia'>
				<p className='p-primary'>Next</p>
			</a>
		</div>		
	</div>

	</div>	

	<div className='mobile top-small'>
		 <Footer />
	</div>
</div>
);
}

export { Sadhan }