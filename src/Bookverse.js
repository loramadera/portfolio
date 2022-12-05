import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './Bookverse.css';
import './common/styles/typography.css';
import './common/styles/spacing.css';

import imgBookVerse from './images/UXUI/BookVerse/bookversehero4.png';
import imgLogo from './images/UXUI/BookVerse/BVlogo.png';
import imgBugs from './images/UXUI/BookVerse/logo.png';
import imgPerson1 from './images/UXUI/BookVerse/person1.png';
import imgPerson2 from './images/UXUI/BookVerse/person2.png';
import imgPerson3 from './images/UXUI/BookVerse/person3.png';
import imgPerson4 from './images/UXUI/BookVerse/person4.png';
import imgPersona from './images/UXUI/BookVerse/persona.png';
import imgColors from './images/UXUI/BookVerse/colors.png';
import imgBeauty from './images/UXUI/BookVerse/bookbeauty.png';

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


function BookVerse() {
	const contentItems = [
		{ 'title': 'Laura, 27, Female', 'text': 'Goodreads is probably the best tool I have used, but it is not very well organized. I do not like that I have to dig through book lists about topics I am not interested in. However, I like that people put in funny comments with gifs and such - I will read those for hours.', 'image': imgPerson1 },
		{ 'title': 'Jake, 24, Male', 'text': 'An easy, clean interface is nice. I like seeing what I need immediately. I do not use Amazon for book info or reviews because there is a ton of information. For exmaple, I like to browse through quotes or artwork of books I am considering to get a handle of the imagery and language style.', 'image': imgPerson2 },
		{ 'title': 'Max, 32, Male', 'text': 'Most tools have a feature of user-generated lists that can be added to and edited based on certain criteria. I find those helpful because they stand alone from other algorithms that tend to lump books together based on numbers. If I am in a mood for a certain trope/story element, I can usually find a list featuring what I am looking for.', 'image': imgPerson3 },
		{ 'title': 'Anne, 26, Female', 'text': 'I slow down on book searches after I have read a series. I want to read somethign new, but I do not have anything lined up, and I give up on books that do not wow me in the first hundred pages.', 'image': imgPerson4 },
	];

	const styleItems = [
		{ 'title': 'Logo Creation', 'text': 'Brands often have a logo that features their name with a letterform logo. This simple logo for BookVerse is inspired by the publishing industry’s favorite style of typeface for print books.', 'image': imgBugs },
		{ 'title': 'Color Palette & textures', 'text': 'Coffee and books are the heartbeat theme for this application. The respective color palette is paired with modern icon design and an industry-standard type face for mobile applications (Proxima Nova) for a clean design.', 'image': imgColors },
	]


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

  	const [item, setItem] = React.useState(styleItems)
  	React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setItems(styleItems)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
 	 })

  	function Items () {
  		if (window.innerWidth < 1025) {
		return contentItems.map((item, index) => {
		        return <div className='book-item'>
				<div className='flexbox top-small'>
					<div className='flex1 top-medium center-align box'>
						<img className='book-img' src={item.image} width="100%"></img>
					</div>
					<div className='flex2 box'>
						<div className=''>
							<h4 className='h4-alegreya small-border margins-small'>{item.title}</h4>
						</div>
						<p className='p-aktiv margins-small'>{item.text}</p>
					</div>
				</div>
			</div>
		      });
		    } else {
		      return contentItems.map((item, index) => {
		        if (index % 2) {
         	 return <div>	
							<div className='flexbox'>	
								<div className='box padding-medium'>
									<div className='small-border'>
										<h4 className='h4-alegreya'>{item.title}</h4>
									</div>
									<p className='p-aktiv'>{item.text}</p>
								</div>
								<div className='box padding-medium'>
									<img className='book-img' src= {item.image} width="100%"></img>
								</div>
							</div>
						</div>
					} else {
						return <div>
							<div className='flexbox'>
								<div className='box padding-medium'>
									<img className='book-img' src={item.image} width="100%"></img>
								</div>
								<div className='box padding-medium'>
									<div className='small-border'>
										<h4 className='h4-alegreya'>{item.title}</h4>
									</div>
									<p className='p-aktiv'>{item.text}</p>
								</div>
							</div>
						</div>
				        }
				      });
				    }
		  }

		function Style () {
  		if (window.innerWidth < 1025) {
		return styleItems.map((item, index) => {
		        return <div className='book-item'>	
				<div className='flexbox margins-large'>	
					<div className='flex1 box'>
						<h4 className='h4-alegreya margins-small'>{item.title}</h4>
						<p className='p-aktiv margins-small'>{item.text}</p>
					</div>
					<div className='img flex1 box'>
						<img src= {item.image} width="100%"></img>
					</div>
				</div>
			</div>
		      });
		    } else {
		      return styleItems.map((item, index) => {
		        if (index % 2) {
		          return <div>	
					<div className='flexbox margins-medium'>	
						<div className='flex1 box'>
							<h4 className='h4-alegreya margins-small'>{item.title}</h4>
							<p className='p-aktiv margins-small'>{item.text}</p>
						</div>
						<div className='flex1 box'>
							<img src= {item.image} width="100%"></img>
						</div>
					</div>
					</div>
				} else {
					return <div>
						<div className='flexbox margins-medium'>
							<div className='flex1 box'>
								<img src={item.image} width="100%"></img>
							</div>
							<div className='flex1 box'>
								<h4 className='h4-alegreya margins-small'>{item.title}</h4>
								<p className='p-aktiv margins-small'>{item.text}</p>
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
	<div className='book'>	
		<div className="book-hero">
			<img src={ imgBookVerse} width="100%"></img>
		</div>

		<div className='flexbox top-small row'>
				<div className='flex1 right-align margins-small'>
					<a className='a-none' href='/bestiary'>
						<p className='p-primary'>Next</p>
					</a>
				</div>		
			</div>
		
		<div>
			<h1 className='h1-alegreya center-align '>BookVerse</h1>
			<h2 className='h2-alegreya center-align none'>Curing the bookish blues.</h2>
			<h2 className='h2-alegreya center-align none opacity'>UX/UI</h2>
		</div>
		


		<div className='bottom-border'>
			<h3 className='h3-alegreya'>01 Overview</h3>
		</div>
		<div className='flexbox'>
			<div className='flex2 center-align mobile'>
				<img className='book-logo box' src={ imgLogo } width="100%"></img>
			</div>
			<div className='flex2 box'>
				<h4 className='h4-alegreya margins-small'>Problem</h4>
				<p className='p-aktiv margins-small'>In the age of technology, book publishers have moved from print books to e-Books. Various mediums have been developed to facilitate the reader-book matching process. But there are infinitely many good books to read, and readers just aren’t finding them.</p>
				<h4 className='h4-alegreya margins-small'>Solution</h4>
				<p className='p-aktiv margins-small'>A unique individual exploration process to maximize book matching to the right reader.</p>
			</div>
		</div>




		<div className='bottom-border'>
			<h3 className='h3-alegreya'>02 Methodology</h3>
		</div>
		<div className='flexbox margins-medium'>
			<div className='flex1 box'>
				<h4 className='h4-alegreya'>Bodystorming</h4>
				<p className='p-aktiv'>Gathering information about various platforms and using them with the purpose of discovering a book with several defining characteristics.</p>
				<h4 className='h4-alegreya'>Consumer Interviews</h4>
				<p className='p-aktiv'>Will conduct interviews with individuals within the research group.</p>
				<h4 className='h4-alegreya'>Competitive Analysis</h4>
				<p className='p-aktiv'>Analyzing competing products to see how they perform.</p>
			</div>
			<div className='flex1'>
				<h4 className='h4-alegreya margins-small'>Goals</h4>
				<p className='p-aktiv margins-small'>Get users reading and away from other distracting social media apps.</p>
				<p className='p-aktiv margins-small'>Develop an interface that enhances the book searching process, rather than frustrates the reader.</p>
				<p className='p-aktiv margins-small'>Match readers with the kinds of books they like, rather than ones that will push them further into a reading “slump.</p>
			</div>
		</div>





		<div className='bottom-border'>
			<h3 className='h3-alegreya'>03 Qualitative Research</h3>
		</div>
		<div className='margins-medium bottom-small'>
				<h4 className='h4-alegreya'>03 Interview Questions</h4>
				<div className='mobile-margins'>
					<p className='p-aktiv'>1. Describe a typical “book slump” for you.</p>
					<p className='p-aktiv'>2. What tools do you use to find new books? Does their ease-of-use determine length of search before you give up?</p>
					<p className='p-aktiv'>3. Do you deviate from your preferred genres?</p>
					<p className='p-aktiv'>4. Are there specific things that frustrate you at the end of a failed book search?</p>
					<p className='p-aktiv'>5. When you do find a book, what aspects of that book align with what you were hoping to find?</p>
					<p className='p-aktiv'>6. If you were to choose between reading and browsing social media sites, which one are you most likely to choose before and after your book search?</p>
				</div>
			</div>

		<div className='flexbox bottom-small'>
			<div>
				<h4 className='h4-alegreya margins-medium'>03 Interviewer Screening</h4>
				<div className='flexbox margins-medium'>
					<div className='flex1'>
						<h4 className='h4-alegreya none mobile-margins'>Contexts</h4>
						<p className='p-aktiv mobile-margins'>High phone/reading device usage, enjoys frequent recreational activites, high social media usage.</p>
					</div>
					<div className='flex1'>
						<h4 className='h4-alegreya none mobile-margins'>Attitudes</h4>
						<p className='p-aktiv mobile-margins'>Focused, but overall creative personality, open to new experiences, reading is a form of self-enrichment.</p>
					</div>
					<div className='flex1'>
						<h4 className='h4-alegreya none mobile-margins'>Motivations</h4>
						<p className='p-aktiv mobile-margins'>Seeking escapism, prefers passive activities, desires positive impact on personal creativity & inspiration.</p>
					</div>
					</div>
				</div>
		</div>

		<div className='flexbox margins-medium'>
			<div>
				<h4 className='h4-alegreya'>03 Key Insights</h4>
				 <Items />
			</div>
		</div>





		<div className='bottom-border'>
			<h3 className='h3-alegreya'>04 Persona</h3>
		</div>
		<div className='flexbox margins-medium'>
			<div className='flex1 box'>
				<img className='book-persona-img mobile' src={ imgPersona } width="100%"></img>
			</div>
			<div className='flex1 box'>
				<p className='p-aktiv'>Nadia is an undergraduate student. In her spare time, she either likes spending time with family or holing up with a good book or videogame. Social media tends to be a fun distraction from daily work, but she seeks more enriching fulfilment from books.</p> 
				<div className='flexbox'>
					<div className='flex1 box'>
						<h4 className='h4-alegreya'>Age</h4>
						<p className='p-aktiv'>23</p>
						<h4 className='h4-alegreya'>Occupation</h4>
						<p className='p-aktiv'>Full-time student</p>
						<h4 className='h4-alegreya'>Income</h4>
						<p className='p-aktiv'>Unemployed</p>
					</div>
					<div className='flex1'>
						<h4 className='h4-alegreya'>Location</h4>
						<p className='p-aktiv'>Santa Barbara</p>
						<h4 className='h4-alegreya'>Status</h4>
						<p className='p-aktiv'>Single</p>
					</div>
				</div>
				<div className='flexbox'>
					<div className='flex1'>
						<h4 className='h4-alegreya'>Goals</h4>
						<p className='p-aktiv'>• To feel more productive</p>
						<p className='p-aktiv'>• To use social media less and read more </p>
						<p className='p-aktiv'>• To explore more books that aren’t in her immediate radar</p>
					</div>
					<div className='flex1 box'>
						<h4 className='h4-alegreya'>Frustrations</h4>
						<p className='p-aktiv'>• Book vendors aren’t always reliable in matching</p>
						<p className='p-aktiv'>• Gets pushed toward social media </p>
						<p className='p-aktiv'>• Searching for new books is an unenjoyable time and effort commitment</p>
					</div>
				</div>
			</div>
		</div>



		<div className='bottom-border'>
			<h3 className='h3-alegreya'>05 User Testing</h3>
		</div>
		<div className='margins-medium'>
			<h4 className='h4-alegreya'>05 Task Flows</h4>
				<div className='margins-small'>
				<p className='p-aktiv'>Task One: User will explore BookVerse for a new book recommendation, specifically by browsing forums for new books on the Discovery page.</p>
					<div className='flexbox'>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters Discovery & searches for book.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters book profile,“BookVerse”.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters book review category.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Opens recent review and evaluates.</p></div>
					</div>

				<p className='p-aktiv'>Task Two: User will go to personal profile to view/interact with saved books, browsing for their next reading by exploring fanart.</p>
					<div className='flexbox'>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Enter bookshelf for selections.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Browse saved “TBR” books.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Select the book's “BookVerse”.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Visit fanart for art.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Browse and decide.</p></div>
					</div>

				<p className='p-aktiv'>Task Two: User will go to personal profile to view/interact with saved books, browsing for their next reading by exploring fanart.</p>
					<div className='flexbox'>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters Discovery & searches for book.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters book profile, “BookVerse”.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>User enters book review category.</p></div>
						<div className='flex1 book-task-desc'><p className='p-aktiv padding-small task'>Leaves review.</p></div>
					</div>
				</div>			
			</div>
		<div className='margins-medium'>	
			<h4 className='h4-alegreya'>05 Key Feedback</h4>
					<div className='flexbox'>
					<div className='flex1 margins-small'>
						<h4 className='h4-alegreya'>Task One</h4>
						<p className='p-aktiv'>“I would expect the forum to have some user icons or something indicating that people made these posts.”</p>
						<p className='p-aktiv'>“I was unsure whether the sample book in the prototype meant finding a sample of a book page.”</p>
						<p className='p-aktiv'>“I like the home page because it’s very simple. The fewer buttons, the better.”</p>
					</div>
					<div className='flex1 margins-small'>
						<h4 className='h4-alegreya'>Task Two</h4>
						<p className='p-aktiv'>“The interface is very consistent, so I don’t have to worry about learning too much across different pages.”</p>
						<p className='p-aktiv'>“I’m not sure what the difference is between the filter icon in my bookshelf and the search tool in the discovery page.”</p>
						<p className='p-aktiv'>"I was unsure of whether I should instinctually want to find books through the bookshelf or filter tool."</p>
					</div>
					<div className='flex1 margins-small'>
						<h4 className='h4-alegreya'>Task Three</h4>
						<p className='p-aktiv'>“This task has the simplest set of pages/interfaces, they’re easy and straightforward.”</p>
						<p className='p-aktiv'>“I was unsure of whether I needed to add a book to a certain shelf to be able to review it.”</p>
					</div>
				</div>
		</div>



		<div className='bottom-border'>
			<h3 className='h3-alegreya'>06 Styles & Logo</h3>
		</div>
		<div> <Style /> </div>


		<div>
			<h3 className='h3-alegreya margins-small'>07 Final Design</h3>
		</div>

		<div>
			<img className='book-image-beauty' src={ imgBeauty } width="100%"></img>
		</div>


		<div className='flexbox top-small row'>
			<div className='flex1 right-align margins-small'>
				<a className='a-none' href='/bestiary'>
					<p className='p-primary'>Next</p>
				</a>
			</div>		
		</div>
		</div>
		<div className='top-medium'>
	      <Footer />
		</div>     
	</div>
	);
}

export { BookVerse }


























