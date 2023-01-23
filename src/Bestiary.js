import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
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
import imgStyle from './images/UXUI/Bestiary/style.png';
import imgBeauty from './images/UXUI/Bestiary/bestiarymock.png';

import projBestiary from './images/UXUI/Bestiary/Bestiary.pdf';

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


function Bestiary() {

	const contentItems = [
		{ 'title': 'Kristen, 26, Monterey, Communications Student', 'text': 'Immersion motivates replaying and revisiting interface (vs. avoiding). Retention depends on presentation - however, too much interface breaks immersion.', 'image': imgPerson1 },
		{ 'title': 'Annie, 30, Washington DC, Graduate Student', 'text': 'Accessibility is overlooked in interfaces - they should cater to our shortening attention span and be short form, especially in mobile games. “Quick grab” information is most effective for retention.', 'image': imgPerson2 },
		{ 'title': 'Jenny, 24, San Francisco, Law School Student', 'text': 'Emotional experiences tend to connect, regardless of interface. The more realistic the interface, the better. Retention depends on presentation, and overbearing “textual” information is no good - the more visual/artistic, the better.', 'image': imgPerson3 },
	];

	const mvpItems = [
		{ 'title': 'MVP One: The Bio', 'text1': 'This is the accompanying page to the cryptid image. Interactive index for user to browse information in.', 'text2': 'Descriptive index, will contain “secret” hints and clues for the player to work out while they are fighting monster.', 'text3': 'Engage the user and try to make them piece together what they can do to beat the monster.', 'image': imgBook3 },
		{ 'title': 'MVP Two The Journal', 'text1': 'An interactive journal/entry log. Player will use this to document their personal notes about the cryptid they faced at lower levels.', 'text2': 'Entry-making feature for later reference.', 'text3': 'Player feels immersed, has information to look back on when they face upper-level monster.', 'image': imgBook1 },
		{ 'title': 'MVP Three: The Inventory', 'text1': 'Inventory map. Based on the hints and clues that the bio page gives them, the user can look at what they have in their inventory that will help them beat the monster.', 'text2': 'Chart of ingredients that the user has to use against cryptid.', 'text3': 'Works like a puzzle for the user to figure out what to utilize.', 'image': imgBook2 },
	];

	const styleItems = [
		{ 'title': 'Style Guide', 'text': 'The final design and style choices reflect the overall fantasy "tone" of the project, with textures and icons created in the same spirit.', 'image': imgStyle },
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

 	 const [item, setItem] = React.useState(mvpItems)
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
        return <div>
			<div className='flexbox'>
				<div className='flex1 center-align box'>
					<img className='img-person' src= {item.image} width="100%"></img>
				</div>
				<div className='flex2 box'>
					<div className='small-border margins-small'>
						<h4 className='h4-primary'>{item.title}</h4>
					</div>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
			</div>
		</div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
         return <div className='top-small'>	
					<div className='flexbox'>	
						<div className='box padding-medium'>
							<div className='small-border'>
								<h4 className='h4-primary'>{item.title}</h4>
							</div>
							<p className='p-primary'>{item.text}</p>
						</div>
						<div className='box'>
							<img className='img-person' src= {item.image} width="100%"></img>
						</div>
					</div>
				</div>
			} else {
				return <div className='top-small'>
					<div className='flexbox'>
						<div className='box'>
							<img className='img-person' src= {item.image} width="100%"></img>
						</div>
						<div className='box padding-medium'>
							<div className='small-border'>
								<h4 className='h4-primary'>{item.title}</h4>
							</div>
							<p className='p-primary'>{item.text}</p>
						</div>
					</div>
				</div>
		        }
		      });
		    }
  }

  function Mvp() {
    if (window.innerWidth < 1025) {
      return mvpItems.map((item, index) => {
        return <div className='margins-extra'>	
			<div className='flexbox'>	
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
						<p className='p-primary'>{item.text1}</p>
						<p className='p-primary'>{item.text2}</p>
						<p className='p-primary'>{item.text3}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img className='mobile' src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
      });
    } else {
      return mvpItems.map((item, index) => {
        if (index % 2) {
          return <div className='margins-extra top-small'>	
			<div className='flexbox mobile'>	
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
						<p className='p-primary'>{item.text1}</p>
						<p className='p-primary'>{item.text2}</p>
						<p className='p-primary'>{item.text3}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
		return <div className='margins-extra top-small'>
			<div className='flexbox mobile'>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
						<p className='p-primary'>{item.text1}</p>
						<p className='p-primary'>{item.text2}</p>
						<p className='p-primary'>{item.text3}</p>
					</div>
				</div>
			</div>
		</div>
        }
      });
    }
  }

  function Style() {
    if (window.innerWidth < 1025) {
      return styleItems.map((item, index) => {
        return <div className='margins-extra'>	
			<div className='flexbox'>	
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
						<p className='p-primary'>{item.text}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img className='mobile' src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
      });
    } else {
      return styleItems.map((item, index) => {
        if (index % 2) {
          return <div className='margins-extra top-small'>	
			<div className='flexbox mobile'>	
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
						<p className='p-primary'>{item.text}</p>
					</div>
				</div>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
		return <div className='margins-extra top-small'>
			<div className='flexbox mobile'>
				<div className='flex1 margins-small box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<div className='margins-small'>	
						<h4 className='h4-primary '>{item.title}</h4>
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
			<img className='best-hero' src={ imgHero } width="100%"></img>

			<div className='flexbox top-small row'>
				<div className='flex1 margins-small'>
					<a className='a-none' href='/bookverse'>
						<p className='p-primary'>Previous</p>
					</a>
				</div>
				<div className='flex1 right-align margins-small'>
					<a className='a-none' href='/mcc'>
						<p className='p-primary'>Next</p>
					</a>
				</div>		
			</div>

			<h1 className='h1-primary center-align top-medium'>The Bestiary</h1>
			<h2 className='h4-primary center-align opacity mobile'>UX/UI Mobile Game Design</h2>
			<p className='p-primary center-align top-small bottom-small margins-extra'>An interactive game design I conceptualized, researched, and designed with the intention of creating a more immersive gaming experience.</p>
			<div className='flex1 center-align margins-small  shadow'>
				<a href= {projBestiary}>
					<button className='p-primary dark-case-study padding-ultra-s'>View Full Case Study</button>
				</a>		
			</div>	


			<div className='bottom-border'>
				<h3 className='h3-primary mobile'>01 Overview</h3>
			</div>
			<div className='margins-large'>
				<h4 className='h4-primary top-small'>The Bestiary - what is it?</h4>
				<p className='p-primary'>The Bestiary is an interactive database designed to be a component of a mobile fantasy game in which a player encounters different monsters. Each level’s monsters are more challenging than the last, and it is up to the player to study them (their weaknesses, strengths, etc.). As they advance, they will build a reference guide - the Bestiary - of what they have learned.</p>
			</div>


			<div className='bottom-border top-small mobile'>
				<h3 className='h3-primary'>02 Target Audience & Market</h3>
			</div>
			<div className='flexbox margins-medium'>
				<div className='flex1 box center-align top-medium bottom-medium'>
					<img className='img-big-swords margins-small' src= { imgSwords } width="100%"></img>
				</div>
				<div className='flex1 box'>
					<div>
						<h4 className='h4-primary margins-small'>Hypothesis</h4>
						<p className='p-primary margins-small'>The more immersive a gaming experience, the more likely a gamer is to consume and retain information from the interface conveying it.</p>
					</div>
					<div>
						<h4 className='h4-primary margins-small'>Demographic</h4>
						<p className='p-primary margins-small'>Adults 20-35, videogame enthusiasts, college students/recent grads</p>
					</div>
					<div>
						<h4 className='h4-primary margins-small'>Research Objective</h4>
						<p className='p-primary margins-small'>Determining whether immersion outweighs utility in the importance of interface design.</p>
					</div>
					<div>
						<h4 className='h4-primary margins-small'>User Needs</h4>
						<p className='p-primary margins-small'>A game interface that is simple yet immersive, with clear relaying of information without blocks of text, with high entertainment value.</p>
					</div>				
				</div>
			</div>



			<div className='bottom-border top-small mobile'>
				<h3 className='h3-primary'>03 Interviews</h3>
			</div>
				<div className='flexbox margins-medium'>
						<div className='flex1 mobile'>	
							<div className='flexbox mobile-center'>
								<div className='flex box'>
										<img className='img-small-swords' src= {imgSwords} width="100%"></img>
								</div>	
								<div className='flex2 box'>
									<h4 className='h4-primary sword-title'>Questions for Audience</h4>
								</div>						
							</div>		


							<div className='margins-tiny'>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you enjoy an interface that takes time to navigate around, so long as it is immersive to you?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>How much do you value worldbuilding immersion in your videogame experience, on a scale of one to ten?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you spend more time with an interface if it had many features and options, or would you be eager to return to the game?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Based on average videogame information presentation, how much of the information would you say you actually pay attention to? </p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>How much of the information you pay attention to it videogame interfaces is carried back into the main game? </p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Do you ever retain any of the information? If so, do you recall more visual aspects of it or the texts you’ve read?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you rather have a complex interface with many interesting features, or minimalistic design with less features?</p>
									</div>
								</div>
							</div>					
					</div>	

					<div className='flex1'>
						
						<div className='flex1 mobile'>	
							<div className='flexbox mobile-center'>
								<div className='flex box'>
										<img className='img-small-swords' src= {imgSwords} width="100%"></img>
								</div>	
								<div className='flex2 box'>
									<h4 className='h4-primary sword-title'>Questions for Expert</h4>
								</div>						
							</div>	
						</div>

							<div className='margins-tiny'>	
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you rather have a complex interface with many interesting features, or minimalistic design with less features?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>How often do you jump from the main game to the menu interface (in other words, how much utility do you find from the menus? How much value do they have to the gaming experience)?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Do you think it takes away from a gamer’s experience to be tempted to stay and explore a complex interface?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>How much value would you assign to the artistic design of an interface, which would keep users in the interface and have them exploring?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you assign more importance to artistry or utility in interface design?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>Would you respond more to visual aspects of a design or the content itself?</p>
									</div>
								</div>
								<div className='flexbox'>
									<div className='flex2 box'>
										<p className='p-primary'>How willing would you be to sacrifice artistry for time spent in this particular interface?</p>
									</div>
								</div>
							</div>
						</div>					
				</div>




			<div className='bottom-border top-small mobile'>
				<h3 className='h3-primary'>04 Interview Profiles & Feedback</h3>
			</div>
					<div className='flexbox margins-medium mobile-center mobile'>
						<div className='flex box'>
								<img className='img-small-swords' src= {imgSwords} width="100%"></img>
						</div>	
						<div className='flex2 box'>
							<h4 className='h4-primary sword-title'>Interview Feedback from Audience</h4>
						</div>						
					</div>	
					<div className='flexbox margins-medium'>
						<div>
							 <Items />
						</div>
					</div>
				<div className='flexbox margins-medium top-medium mobile-center'>
						<div className='flex box'>
							<img className='img-small-swords' src= {imgSwords} width="100%"></img>
						</div>	
						<div className='flex2 box'>
							<h4 className='h4-primary sword-title'>Key Feedback from Expert</h4>
						</div>						
				</div>
					<div className='flexbox margins-medium top-medium'>
						<div className='flex1 box center-align'>
							<img className='img-best-expert margins-large bottom-medium' src={ imgPerson4 } width="100%"></img>
						</div>
						<div className='flex1 box'>
							<div className='flexbox box'>
								<div className='margins-small'>
									<h2 className='h4-primary'>Benjamin Brown, 32</h2>
									<h2 className='h4-primary'>Bay Area</h2>
									<h2 className='h4-primary'>Ex-Videogame Livestreamer</h2>
								</div>
							</div>
							<div className='margins-small mobile'>
								<h4 className='h4-primary'>Key Feedback</h4>
								<p className='p-primary'>The balance of utility versus artistry in the interface design is completely dependent on the type of game being played.</p>
								<p className='p-primary'>Fast-paced games need to be quick and strategy based, therefore they need to convey information quickly.</p>
								<p className='p-primary'>As long as the artistic theme fits the game, it won’t take away from the utility.</p>
								<p className='p-primary'>There is a common mistake in many videogame designs where interface designers will attempt to create utility through complexity, but even for strategic players this can get exhausting.</p>
								<p className='p-primary'>The story that you’re telling in an interface directly relates to how well the player will connect with it, and in what amount of time.</p> 
							</div>	
						</div>
					</div>




			<div className='bottom-border top-medium mobile'>
				<h3 className='h3-primary'>05 The Minimum Viable Product</h3>
			</div>
				<div className='flexbox margins-extra bottom-small'>
					<div className='flex1 box'>
						<h4 className='h4-primary'>Defining the Features</h4>
						<p className='p-primary'>Inventory of ingredients, with tabs leading to various pages on each cryptid</p>
						<p className='p-primary'>Map of creature’s well-known whereabouts, their strengths and weaknesses</p>
						<p className='p-primary'>Journal entry option with cryptid’s individual biography</p>
					</div>
					<div className='flex1'>
						<h4 className='h4-primary'>Defining the Outcome</h4>
						<p className='p-primary'>Player will have option to log a journal entry</p>
						<p className='p-primary'>Player will learn about the cryptid, gather info about how to defeat it</p>
						<p className='p-primary'>Player will be able to identify where their chances are best for locating the cryptid</p>
					</div>
				</div>
				<div className='margins-extra'>
					<h4 className='h4-primary top-small bottom-small'>The bestiary can be broken down into three diagram pieces - the game itself, generated by the game engine, the interface content, and the content generated by the user.</h4>
				</div>
				<div className='flexbox margins-extra bottom-medium mobile'>
					<div className='flex1'>
						<h4 className='h4-primary center-align'>Data Content</h4>
							<div className='best-box'>	
								<div className='padding-medium'>
									<div>
										<h4 className='h4-primary'>Mythology Content</h4>
										<p className='p-primary'>Pre-generated data set</p>
									</div>
									<div>
										<h4 className='h4-primary'>Game Environment</h4>
										<p className='p-primary'>Creates/generates outside game</p>
									</div>
								</div>
							</div>					
					</div>
					<div className='flex1'>
						<h4 className='h4-primary center-align'>Generated Content</h4>
							<div className='best-box'>	
								<div className='padding-medium'>
									<div>
										<h4 className='h4-primary'>Cryptid Biography</h4>
										<p className='p-primary'>Pre-set inputs for insight fields</p>
									</div>
									<div>
										<h4 className='h4-primary'>Inventory</h4>
										<p className='p-primary'>Inventory slots generated by user</p>
									</div>
								</div>
							</div>					
					</div>
					<div className='flex1'>
						<h4 className='h4-primary center-align'>User Content</h4>
							<div className='best-box'>	
								<div className='padding-medium'>
									<div>
										<h4 className='h4-primary'>Journal Entries</h4>
										<p className='p-primary'>Inputed by user</p>
									</div>
									<div>
										<h4 className='h4-primary'>Account Info</h4>
										<p className='p-primary'>Created by user</p>
									</div>
								</div>
							</div>					
					</div>
				</div>

				<div className='bottom-small'>
					<Mvp />
				</div>	




			<div className='bottom-border top-small'>
				<h3 className='h3-primary'>06 User Testing</h3>
			</div>
				<div className='margins-extra mobile'>
					<h4 className='h4-primary task-flex'>User Flow One: Document Your Battle</h4>
					<p className='p-primary task-flex mobile-margins'>User will document the battle they just encountered and the monster they defeated. They will navigate to the journal entry in the bestiary and create a new entry documenting everything they learned.</p>
				</div>	
				<div className='margins-medium'>	
							<div className='flexbox top-small center-align'>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box center-align'>
											<h4 className='h4-primary flex-number'>1</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Open journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>2</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Inspect the monster you faced in the journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>3</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Unlock new available entry based on level passed.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>4</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Document the battle, noting hints and info.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>5</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Save entry for later reference.</h4>
										</div>
									</div>
								</div>
							</div>
				</div>


				<div className='margins-extra'>
					<h4 className='h4-primary task-flex'>User Flow Two: Learn About The Monster</h4>
					<p className='p-primary task-flex'>In the cryptid biography, user will use the bestiary to learn more about the attributes and weaknesses of the monster they just faced. They will unlock new insights about the monster in preparation for the next confrontation on the following level. </p>
				</div>	
				<div className='margins-medium'>	
							<div className='flexbox top-small'>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>1</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Open journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>2</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Inspect the monster you faced in the journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>3</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Find monster’s attributes and weakness boxes.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>4</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Select attribute or weakness box to unlock.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>5</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Unlock weakness or attribute.</h4>
										</div>
									</div>
								</div>
							</div>			
						</div>

				
				<div className='margins-extra'>
					<h4 className='h4-primary task-flex'>User Flow Three: Pick Your Poison</h4>
					<p className='p-primary task-flex'>User will select a poison from their inventory to use on the monster in the upper levels, with more knowledge on defeating the monster than they had before, based on the new unlcoked weakness/attributes they read about.</p>
				</div>	
				<div className='margins-medium'>	
							<div className='flexbox top-small'>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>1</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Open journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>2</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Inspect the monster you faced in the journal.</h4>
										</div>
									</div>
								</div>
								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>3</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Find monster’s “weakness” panel to unlock.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>4</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Navigate to inventory page in bestiary.</h4>
										</div>
									</div>
								</div>

								<div className='flex1 box'>
									<div className='flexbox'>
										<div className='flex1 box'>
											<h4 className='h4-primary flex-number'>5</h4>
										</div>
										<div className='flex1 box margins-small'>
											<h4 className='h4-primary flex-text'>Scroll through ingredients to find weakness.</h4>
										</div>
									</div>
								</div>
							</div>			
						</div>




				<div className='flexbox margins-medium top-medium mobile-center'>
						<div className='flex box'>
								<img className='img-small-swords' src= {imgSwords} width="100%"></img>
						</div>	
						<div className='flex2 box'>
							<h4 className='h4-primary sword-title'>Feedback</h4>
						</div>						
				</div>
				<div className='flexbox margins-large'>
					<div>
							<div className='flexbox'>
							<div className='flex1 padding-medium'>
								<h4 className='h4-primary'>Round One</h4>
								<p className='p-primary'>The “locked” icon should be unlocked, or otherwise swapped out for more icon variation.</p>
								<p className='p-primary'>The journal interface seems pretty simplistic in terms of design - some “toggling” variation would feel more interactive.</p>
								<p className='p-primary'>Some variation in the “locked” and “unlocked” journal entries would be helpful, visually.</p>
							</div>
							<div className='flex1 padding-medium'>
								<h4 className='h4-primary'>Round Two</h4>
								<p className='p-primary'>The first screen needs to have more narrative.</p>
								<p className='p-primary'>For some who never plays games, the interface would be confusing as is.</p>
								<p className='p-primary'>Is there a login? Do we need a username? What do we actually “search” for that the bestiary demands of the user? The monster’s name?</p>
							</div>
							<div className='flex1 padding-medium'>
								<h4 className='h4-primary'>Round Three</h4>
								<p className='p-primary'>There are multiple icons that are being used over and over again - there needs to be some variation.</p>
								<p className='p-primary'>Once we’re far enough into the task, don’t know how to get back.</p>
								<p className='p-primary'>There’s an inconsistency between the art style of the icons chosen.</p>
							</div>
							</div>
					</div>
				</div>

			<div className='bottom-border mobile'>
				<h3 className='h3-primary'>07 Style Guide</h3>
			</div>
			<div>
				<Style />
			</div>	

			<div className='mobile top-medium bottom-medium'>
				<img className='book-image-beauty' src={ imgBeauty } width="100%"></img>
			</div>


			<div className='flexbox top-small row'>
				<div className='flex1 margins-small'>
					<a className='a-none' href='/bookverse'>
						<p className='p-primary'>Previous</p>
					</a>
				</div>
				<div className='flex1 right-align margins-small'>
					<a className='a-none' href='/mcc'>
						<p className='p-primary'>Next</p>
					</a>
				</div>		
			</div>				

		  <div className='mobile'>
				<Footer />
			</div>

		</div>		
		);
	}


export { Bestiary }






















