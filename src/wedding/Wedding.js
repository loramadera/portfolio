import React from "react";

import './Wedding.css';
import imgUs from './images/us.jpeg';
import imgUs2 from './images/us2.jpeg';
import imgUs3 from './images/us3.jpg';
import imgUs4 from './images/us4.jpg';
import imgFlower from './images/flowerborder.png';
import imgArrow from './images/goldarrow.png';
import imgForest from './images/forest.jpg';
import '../common/styles/spacing.css';




function Wedding() {
 
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


  function Items() {
    if (window.innerWidth < 1025) {
      return (
      <div>
        <div className='flexbox'>
          <div className='img-empty'></div>
          <div className='flex1 content'>
            <img src= {imgFlower} width="100%"></img>
            <h1 className='w1-primary center-align top-small'>Luke & Lora</h1>
            <h2 className='w2-primary center-align top-small'>Welcome to our wedding!</h2>
            <h2 className='w2-primary center-align top-tiny bottom-medium'>04.10.2023</h2>
            <img className='mob-us' src= {imgUs2} width='100%'></img>

            <div className='center-align top-medium bottom-medium'>
              <h2 className='w2-primary center-align'>Details</h2>
              <img className='arrow center-align top-small' src= { imgArrow } width='100%'></img>
            </div>


            <div className='greenbox'>
             <div className='center-align'>
                <img className='forest center-align' src= { imgForest } width='100%'></img>
                <h1 className='w1-secondary top-med center-align'>The Couple</h1>
                <div className='mobile-margins-3'>    
                  <h2 className='w2-secondary left-align top-med'>Long before they started dating, Lora worked at __ and Luke worked at __.</h2>
                  <p className='w-primary left-align top-tiny'>A. King’s Landing; Dragonstone</p>
                  <p className='w-primary left-align top-tiny'>B. Hogwarts; Durmstrang</p>
                  <p className='w-primary left-align top-tiny'>C. Peets; Starbucks</p>
                  <p className='w-primary left-align top-tiny'>D. Barad-Dur; Minas Tirith</p>

                  <h2 className='w2-secondary left-align top-med'>How did Lora and Luke first meet? </h2>
                  <p className='w-primary left-align top-tiny'>A. At the general hospital</p>
                  <p className='w-primary left-align top-tiny'>B. At a crazy all-nighter rave</p>
                  <p className='w-primary left-align top-tiny'>C. On a dating app</p>
                  <p className='w-primary left-align top-tiny'>D. In Herbology class at Hogwarts</p>

                  <h2 className='w2-secondary left-align top-med'>How did Luke impress Lora on their second date? </h2>
                  <p className='w-primary left-align top-tiny'>A. By offering her the conquered Southern Isles</p>
                  <p className='w-primary left-align top-tiny'>B. By destroying the great dragon Alduin</p>
                  <p className='w-primary left-align top-tiny'>C. By teaching her Gloomhaven</p>
                  <p className='w-primary left-align top-tiny'>D. By burning down the Iron Throne</p>

                  <h2 className='w2-secondary left-align top-med'>How did Luke propose?</h2>
                  <p className='w-primary left-align top-tiny'>A. By whispering in her ear, “Hey how you doing lil mama wanna get married?"</p>
                  <p className='w-primary left-align top-tiny'>B. With a ring pop during their bi-weekly Costco trip</p>
                  <p className='w-primary left-align top-tiny'>C. He took Lora to the top of a mountain in Hawaii</p>
                  <p className='w-primary left-align top-tiny'>D. In the middle of battle on Davy Jones’ ship</p>

                  <h2 className='w2-secondary left-align top-med'>Did I get any of these right?</h2>
                  <p className='w-primary left-align top-tiny'>A. Depends! Did you answer "C" for all of them?</p>
                </div>
              </div>


              <div>
                <img className='mob-us top-medium' src= {imgUs3} width='100%'></img>
                <h1 className='w1-secondary top-large center-align'>The Venue</h1>
                <div className='mobile-margins-3 top-small'>
                  <h2 className='w-primary center-align'>Jefferson Street Mansion</h2>
                  <h2 className='w-primary center-align'>1063 Jefferson St</h2>
                  <h2 className='w-primary center-align'>Benicia, CA 94510</h2>
                </div>
              </div>


              <div className='top-large'>
                <img className='mob-us' src= {imgUs4} width='100%'></img>
                <h1 className='w1-secondary top-large center-align'>FAQ</h1>
                <div className='mobile-margins-3'>
                  <h2 className='w2-secondary left-align top-medium'>What time should I arrive?</h2>
                  <p className='w-primary left-align top-tiny'>Please arrive at 4PM to park and find a seat, as the ceremony will begin promptly at 430! If you arrive at 430, be prepared to walk down the aisle and marry Luke.</p>
                  
                  <h2 className='w2-secondary left-align top-med'>Will there be free parking?</h2>
                  <p className='w-primary left-align top-tiny'>Yes! The car park, helicopter pad, and dragon coop will be around back.</p>

                  <h2 className='w2-secondary left-align top-med'>Is there a dress code? </h2>
                  <p className='w-primary left-align top-tiny'>We’re not too picky, but we request clothes! The dress code is formal attire and our colors are gold and sage green. Ladies, we respectfully request that you avoid shades of white/ivory traditionally reserved for the bride.</p>

                  <h2 className='w2-secondary left-align top-med'>Will the wedding be indoors or outdoors? </h2>
                  <p className='w-primary left-align top-tiny'>The ceremony will take place outdoors (fingers and toes crossed for a sunny day), and the reception area is in a well-heated tent. </p> 

                   <h2 className='w2-secondary left-align top-med'>Do I have to sign the guest book when I get there?</h2>
                  <p className='w-primary left-align top-tiny'>The guest book will get moved to reception area! There will be plenty of time after the ceremony, so you can comfortably proceed to the fighting rink to win your seat.</p>

                  <h2 className='w2-secondary left-align top-med'>Are we allowed to smoke at the venue? </h2>
                  <p className='w-primary left-align top-tiny'>The venue has gone to great lengths to prevent the local squirrels from smoking and requests you do not tempt them. </p> 

                  <h2 className='w2-secondary left-align top-med'>What kinds of shoes should I wear?</h2>
                  <p className='w-primary left-align top-tiny'>Heel lovers know the struggle of being a walking lawn aerator. While there will be grassy areas for photos, the majority of the event is on solid ground! </p> 

                  <h2 className='w2-secondary left-align top-med'>Can I take pictures/videos during the ceremony?</h2>
                  <p className='w-primary left-align top-tiny'>Absolutely! We want all the photos! We encourage you to post or send them to us!  We only ask that you turn off your ringers and be mindful of the professional photographers—we don’t want framed photos of iPads obscuring our faces around the house!</p>

                  <h2 className='w2-secondary left-align top-med'>Can I bring guests, +1s, cats, dogs, my Uncle Bill, pet penguin?</h2>
                  <p className='w-primary left-align top-tiny'>The guest list is now finalized, so we request that you do not bring a guest that was not formally invited! Although, we won't be mad if you bring a penguin.</p>

                  <h2 className='w2-secondary left-align top-med'>What should I do if I can’t make it?</h2>
                  <p className='w-primary left-align top-tiny'>You will be missed (unless you’re Fred McHale)—if you can’t make it to our wedding, please let us know as soon as possible so we can plan accordingly.</p> 

                  <h2 className='w2-secondary left-align top-med'>What happens after the ceremony?</h2>
                  <p className='w-primary left-align top-tiny'>After the ceremony, the immediate family & bridal party will be asked to stay behind for photos. Guests will be directed to the reception area to be sacrifi—for cocktail hour!</p> 

                  <h2 className='w2-secondary left-align top-med'>I’ve heard rumors about a cake-smashing—is this true?</h2>
                  <p className='w-primary left-align top-tiny'>Nope! If anyone approaches the cake with malicious intent, they will be tackled by Annie the Bridesmaid.</p> 

                  <h2 className='w2-secondary left-align top-med'>Will there be dancing?</h2>
                  <p className='w-primary left-align top-tiny'>As the Mansion is an aging, historic building, sudden movements are discouraged. Just kidding—bring your best dance moves, it’s going to be a party!</p> 

                  <h2 className='w2-secondary left-align top-med'>What if I have dietary restrictions? </h2>
                  <p className='w-primary left-align top-tiny'>We have tried to select multiple entree and appetizer options that will accommodate our guests with known dietary restrictions. If you have a specific concern, please reach out to us! </p> 

                  <h2 className='w2-secondary left-align top-med'>Are children invited?</h2>
                  <p className='w-primary left-align top-tiny'>We ADORE your little ones! However, our ceremony and reception are an adult-only event—with the exception of the bride and groom—so please plan accordingly!</p>

                  <h2 className='w2-secondary left-align top-med'>Can I give a speech?</h2>
                  <p className='w-primary left-align top-tiny'>As terrified as we are to hand some of you the mic, speeches are welcome! Please let us know in advance so our DJ can mark you on the seating chart.</p>

                  <h2 className='w2-secondary left-align top-med'>Do you have a wedding registry?</h2>
                  <p className='w-primary left-align top-tiny'>We love you, your presence at our wedding is a gift! We are also minimalists and request all physical and cash gifts be withheld, unless you’re making it rain on the dance floor.</p> 
       
                  <h2 className='w2-secondary center-align top-med bottom-large'>Feel free to reach out if you have any questions! Please hesitate with any complaints!</h2>     
                </div>  
              </div>
            </div> 
          </div>
        </div>
      </div>
      );


    } else {


      return ( 
      <div>
        <div className='img-us'>
          <img src= {imgUs} className='image-us-image'></img>
        </div>
        <div className='flexbox'>
          <div className='img-empty'></div>
          <div className='flex1 content'>
            <img src= {imgFlower} width="100%"></img>
            <h1 className='w1-primary center-align'>Luke & Lora</h1>
            <h2 className='w2-primary center-align top-small'>Welcome to our wedding!</h2>
            <h2 className='w2-primary center-align top-tiny bottom-large'>04.10.2023</h2>

            <div className='center-align top-large bottom-medium'>
              <h2 className='w2-primary center-align'>Details</h2>
              <img className='arrow center-align top-small' src= { imgArrow } width='100%'></img>
            </div>
           

            <div className='greenbox'>



              <div className='center-align'>
                <img className='forest center-align' src= { imgForest } width='100%'></img>
                <h1 className='w1-secondary top-med center-align'>The Couple</h1>
                <div className='margins-med'>    
                  <h2 className='w2-secondary left-align top-med'>Long before they started dating, Lora worked at __ and Luke worked at __.</h2>
                  <p className='w-primary left-align top-tiny'>A. King’s Landing; Dragonstone</p>
                  <p className='w-primary left-align top-tiny'>B. Hogwarts; Durmstrang</p>
                  <p className='w-primary left-align top-tiny'>C. Peets; Starbucks</p>
                  <p className='w-primary left-align top-tiny'>D. Barad-Dur; Minas Tirith</p>

                  <h2 className='w2-secondary left-align top-med'>How did Lora and Luke first meet? </h2>
                  <p className='w-primary left-align top-tiny'>A. At the general hospital</p>
                  <p className='w-primary left-align top-tiny'>B. At a crazy all-nighter rave</p>
                  <p className='w-primary left-align top-tiny'>C. On a dating app</p>
                  <p className='w-primary left-align top-tiny'>D. In Herbology class at Hogwarts</p>

                  <h2 className='w2-secondary left-align top-med'>How did Luke impress Lora on their second date? </h2>
                  <p className='w-primary left-align top-tiny'>A. By offering her the conquered Southern Isles</p>
                  <p className='w-primary left-align top-tiny'>B. By destroying the great dragon Alduin</p>
                  <p className='w-primary left-align top-tiny'>C. By teaching her Gloomhaven</p>
                  <p className='w-primary left-align top-tiny'>D. By burning down the Iron Throne</p>

                  <h2 className='w2-secondary left-align top-med'>How did Luke propose?</h2>
                  <p className='w-primary left-align top-tiny'>A. By whispering in her ear, “Hey how you doing lil mama wanna get married?"</p>
                  <p className='w-primary left-align top-tiny'>B. With a ring pop during their bi-weekly Costco trip</p>
                  <p className='w-primary left-align top-tiny'>C. He took Lora to the top of a mountain in Hawaii</p>
                  <p className='w-primary left-align top-tiny'>D. In the middle of battle on Davy Jones’ ship</p>

                  <h2 className='w2-secondary left-align top-med'>Did I get any of these right?</h2>
                  <p className='w-primary left-align top-tiny'>A. Depends! Did you answer "C" for all of them?</p>
                </div>
              </div>


              <div>
                <img className='mob-us top-medium' src= {imgUs3} width='100%'></img>
                <h1 className='w1-secondary top-med center-align'>The Venue</h1>
                <div className='margins-med top-small'>
                  <h2 className='w-primary center-align'>Jefferson Street Mansion</h2>
                  <h2 className='w-primary center-align'>1063 Jefferson St</h2>
                  <h2 className='w-primary center-align'>Benicia, CA 94510</h2>
                </div>
              </div>


              <div>
                <img className='center-align top-med' src= { imgUs4 } width='100%'></img>
                <h1 className='w1-secondary top-med center-align'>FAQ</h1>
                <div className='margins-med'>

                  <h2 className='w2-secondary top-med left-align'>What time should I arrive?</h2>
                  <p className='w-primary left-align top-tiny'>Please arrive at 4PM to park and find a seat, as the ceremony will begin promptly at 430! If you arrive at 430, be prepared to walk down the aisle and marry Luke.</p>
                  
                  <h2 className='w2-secondary left-align top-med'>Will there be free parking?</h2>
                  <p className='w-primary left-align top-tiny'>Yes! The car park, helicopter pad, and dragon coop will be around back.</p>

                  <h2 className='w2-secondary left-align top-med'>Is there a dress code? </h2>
                  <p className='w-primary left-align top-tiny'>We’re not too picky, but we request clothes! The dress code is formal attire and our colors are gold and sage green. Ladies, we respectfully request that you avoid shades of white/ivory traditionally reserved for the bride.</p>

                  <h2 className='w2-secondary left-align top-med'>Will the wedding be indoors or outdoors? </h2>
                  <p className='w-primary left-align top-tiny'>The ceremony will take place outdoors (fingers and toes crossed for a sunny day), and the reception area is in a well-heated tent. </p> 

                   <h2 className='w2-secondary left-align top-med'>Do I have to sign the guest book when I get there?</h2>
                  <p className='w-primary left-align top-tiny'>The guest book will get moved to reception area! There will be plenty of time after the ceremony, so you can comfortably proceed to the fighting rink to win your seat.</p>

                  <h2 className='w2-secondary left-align top-med'>Are we allowed to smoke at the venue? </h2>
                  <p className='w-primary left-align top-tiny'>The venue has gone to great lengths to prevent the local squirrels from smoking and requests you do not tempt them. </p> 

                  <h2 className='w2-secondary left-align top-med'>What kinds of shoes should I wear?</h2>
                  <p className='w-primary left-align top-tiny'>Heel lovers know the struggle of being a walking lawn aerator. While there will be grassy areas for photos, the majority of the event is on solid ground! </p> 

                  <h2 className='w2-secondary left-align top-med'>Can I take pictures/videos during the ceremony?</h2>
                  <p className='w-primary left-align top-tiny'>Absolutely! We want all the photos! We encourage you to post or send them to us!  We only ask that you turn off your ringers and be mindful of the professional photographers—we don’t want framed photos of iPads obscuring our faces around the house!</p>

                  <h2 className='w2-secondary left-align top-med'>Can I bring guests, +1s, cats, dogs, my Uncle Bill, pet penguin?</h2>
                  <p className='w-primary left-align top-tiny'>The guest list is now finalized, so we request that you do not bring a guest that was not formally invited! Although, we won't be mad if you bring a penguin.</p>

                  <h2 className='w2-secondary left-align top-med'>What should I do if I can’t make it?</h2>
                  <p className='w-primary left-align top-tiny'>You will be missed (unless you’re Fred McHale)—if you can’t make it to our wedding, please let us know as soon as possible so we can plan accordingly.</p> 

                  <h2 className='w2-secondary left-align top-med'>What happens after the ceremony?</h2>
                  <p className='w-primary left-align top-tiny'>After the ceremony, the immediate family & bridal party will be asked to stay behind for photos. Guests will be directed to the reception area to be sacrifi—for cocktail hour!</p> 

                  <h2 className='w2-secondary left-align top-med'>I’ve heard rumors about a cake-smashing—is this true?</h2>
                  <p className='w-primary left-align top-tiny'>Nope! If anyone approaches the cake with malicious intent, they will be tackled by Annie the Bridesmaid.</p> 

                  <h2 className='w2-secondary left-align top-med'>Will there be dancing?</h2>
                  <p className='w-primary left-align top-tiny'>As the Mansion is an aging, historic building, sudden movements are discouraged. Just kidding—bring your best dance moves, it’s going to be a party!</p> 

                  <h2 className='w2-secondary left-align top-med'>What if I have dietary restrictions? </h2>
                  <p className='w-primary left-align top-tiny'>We have tried to select multiple entree and appetizer options that will accommodate our guests with known dietary restrictions. If you have a specific concern, please reach out to us! </p> 

                  <h2 className='w2-secondary left-align top-med'>Are children invited?</h2>
                  <p className='w-primary left-align top-tiny'>We ADORE your little ones! However, our ceremony and reception are an adult-only event—with the exception of the bride and groom—so please plan accordingly!</p>

                  <h2 className='w2-secondary left-align top-med'>Can I give a speech?</h2>
                  <p className='w-primary left-align top-tiny'>As terrified as we are to hand some of you the mic, speeches are welcome! Please let us know in advance so our DJ can mark you on the seating chart.</p>

                  <h2 className='w2-secondary left-align top-med'>Do you have a wedding registry?</h2>
                  <p className='w-primary left-align top-tiny'>We love you, your presence at our wedding is a gift! We are also minimalists and request all physical and cash gifts be withheld, unless you’re making it rain on the dance floor.</p> 
       
                  <h2 className='w2-secondary center-align top-med bottom-medium'>Feel free to reach out if you have any questions! Please hesitate with any complaints!</h2>     
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }



  return (
    <div>
    <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
     <div>
      <Items />    
     </div>     
    </div>

  );

}
 

export { Wedding }
