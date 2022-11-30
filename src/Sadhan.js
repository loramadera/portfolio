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
	{'title': 'Version: Design for Programming', 'text': 'For programming execution, iconography designs would be made mindful of the parameters of coding.', 'image': imgIcons2 },
	
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
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div className='sadhan-item mobile'>	
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
    }
  }




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
		<h4 className='h4-broad center-align'>Meditation App</h4>
		<h4 className='h4-broad center-align opacity'>Visual Design</h4>
		<p className='p-broad left-align margins-small top-small'>Sadhan is defined functionally by its meditation timer and connection with other members of a meditation community - the ability to see retreat schedules and other members.</p>
	</div>
	<div className='dark-box top-dark'>
			<div className='flexbox margins-medium top-medium'>
				<div className='flex1 box'>
						<h4 className='h4-broad margins-small'>Meditation Timer</h4>
						<p className='p-broad margins-small'>Starts/stops timer, toggles chime and prayer.</p>
						<h4 className='h4-broad margins-small'>Group Meditation</h4>
						<p className='p-broad margins-small'>Displays group meditation schedules, charting meditators around the world.</p>
				</div>
				<div className='flex1 box'>
					<img className='sadhan-img mobile' src= { imgColors } width="100%"></img>
				</div>
			</div>

			<div className='sadhan-content'>
				<Items />
			</div>

			<div className='sadhan-beauty mobile'>
				<img src= {imgBeauty} width="100%"></img>
			</div>
		</div>	
</div>

<div className='mobile'>
	 <Footer />
</div>
</div>
);
}

export { Sadhan }