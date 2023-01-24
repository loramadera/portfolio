import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Gaia.css';

import imgHero from './images/UXUI/Gaia/gaiahero.png';
import imgW1 from './images/UXUI/Gaia/wireframe1.png';
import imgW2 from './images/UXUI/Gaia/wireframe2.png';
import imgF1 from './images/UXUI/Gaia/final1.png';
import imgF2 from './images/UXUI/Gaia/final2.png';
import imgBeauty from './images/UXUI/Gaia/gaiabeauty.png';
import imgColor from './images/UXUI/Gaia/colors.png';
import imgLayout from './images/UXUI/Gaia/layout.png';
import imgLogo from './images/UXUI/Gaia/logo.png';
import imgFinal from './images/UXUI/Gaia/finallogo.png';

import projGaia from './images/UXUI/Gaia/Gaia.pdf';

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

function Gaia() {
const contentItems = [
	{'title': 'Basic Layout', 'text': 'The layout of this interactive tool would feature the three pillars of sustainability, each of them active in a one-at-a-time succession format.', 'image': imgLayout },
	{'title': 'Digital Logo Explorations', 'text': 'After a series of hand-drawn sketches, the logos that emblemized Gaia were ones that emulated flowers or leaves. Further explorations drove it in a more angular direction - further away from resembling leaves and flowers directly.', 'image': imgLogo },

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
        return <div className='gaia-item bottom-medium'>	
			<div className='flexbox margins-large'>	
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div className='margins-medium'>
            <div className='flexbox'>
                <a href={item.link} className='a-none flex1 box'>
                  <div >  
                    <h3 className='h3-primary left-align'>{item.title}</h3>
                    <p className='p-primary left-align'>{item.text}</p>
                  </div>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <img src= {item.image} width="100%"></img>
                </a>
            </div>
          </div>
        } else { 
          return <div className='margins-medium'>
            <div className='flexbox'>
                <a href={item.link} className='a-none flex1 box'>
                  <img src= {item.image} width="100%"></img>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <div>  
                    <h3 className='h3-primary left-align'>{item.title}</h3>
                    <p className='p-primary left-align'>{item.text}</p>
                  </div>
                </a>
            </div>
          </div>
        }
      });
    }
  }

const gaiaItems = contentItems.map((item, index) => {
	if (index % 2) {
		return <div className='gaia-item bottom-medium'>	
			<div className='flexbox margins-large'>	
				<div className='img flex1 box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
			</div>
		</div>
	} else {
		return <div className='gaia-item'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src={item.image} width="100%"></img>
				</div>
			</div>
		</div>

	}
});


return (
<div className='mobile'>
<Navigation />
<link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
<div className='margins-large'>
	<div className="gaia-hero top-medium margins-small">
		<img src={ imgHero } width="100%"></img>
	</div>

	<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/sadhan'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/mcc'>
				<p className='p-primary'>Next</p>
			</a>
		</div>		
	</div>

	<div className='bottom-small'>
		<h1 className='h1-primary center-align top-small'>Gaia</h1>
		<p className='p-primary center-align margins-extra'>Gaia is an informational & interactivity tool I designed, inspired by the three pillars of sustainability - economy, environment, and society. It seeks to educate on these pillars in a fun and interactive way.</p>
		<div className='flex1 center-align margins-small'>
			<a href= {projGaia}>
				<button className='best-case-study padding-ultra-s mobile-margins'>View Full Process</button>
			</a>		
		</div>		
	</div>
	
		<div>
		<div className='top-small'>
			<Items />
		</div>
		<div className='flexbox bottom-large top-medium'>
			<div className='flex1 center-align'>
				<img className='gaia-w center-align' src={imgW1} width='100%'></img>
			</div>
			<div className='flex1 center-align mobile'>
				<img className='gaia-w center-align' src={imgW2} width='100%'></img>
			</div>
		</div>

					

		<div className='gaia-beauty margins-small'>
			<img className='darker-box' src= {imgBeauty} width="100%"></img>
		</div>
</div>	

<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/sadhan'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/mcc'>
				<p className='p-primary'>Next</p>
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

export { Gaia }