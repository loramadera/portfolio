import React from "react";

import './Wedding.css';
import imgUs from './images/us.jpeg';
import imgFlower from './images/flowerborder.png';
import imgArrow from './images/goldarrow.png';
import '../common/styles/spacing.css';




function Wedding() {
 
  return (
    <div>
    <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
      <div className='img-us'>
        <img src= {imgUs} className='image-us-image'></img>
      </div>
      <div className='flexbox'>
        <div className='img-empty'></div>
        <div className='flex1 content'>
          <img src= {imgFlower} width="100%"></img>
          <h1 className='h1-primary center-align'>Luke & Lora</h1>
          <h2 className='h2-primary center-align top-small'>Welcome to our wedding!</h2>
          <h2 className='h2-primary center-align top-small'>04.10.2023</h2>
          <h2 className='h2-primary center-align top-extra'>Details</h2>
          <div className='center-align top-small bottom-medium'>
            <img className='arrow center-align' src= { imgArrow } width='100%'></img>
          </div>
          <div className='greenbox'>
            <h1 className='h1-secondary top-medium center-align'>FAQ</h1>
            <div className='margins-small'>

              <h2 className='h2-secondary left-align top-medium'>What time should I arrive? Is there parking on site?</h2>
              <p className='p-primary left-align top-small'>Yes! There will be free parking around the back of the venue. Please arrive at 4PM to park and find a seat, the ceremony will begin promptly at 4:30PM. If you arrive at 4:30PM, be prepared to walk the bride down the aisle.</p>
              
              <h2 className='h2-secondary left-align top-medium'>Is there a dress code? </h2>
              <p className='p-primary left-align top-small'>We’re not too picky, but we request clothes! Our official dress code is formal attire and our colors are gold/champagne shades and sage green—you’re welcome to dress accordingly with the colors, but it’s not required! Ladies, we respectfully request that you avoid shades of white/ivory traditionally reserved for the bride, unless you want to get tackled by the designated bridesmaid policewoman. </p>

              <h2 className='h2-secondary left-align top-medium'>Will the wedding take place indoors or outdoors? </h2>
              <p className='p-primary left-align top-small'>The ceremony will take place outdoors (fingers and toes crossed for a sunny day), and the reception area is in a well-heated tent. </p> 

               <h2 className='h2-secondary left-align top-medium'>Do I have to sign the guest book when I get there?</h2>
              <p className='p-primary left-align top-small'>The guest book will be available at the start of the ceremony and will be moved to the reception area—there will be plenty of time to sign throughout the evening, so feel free to proceed to the fighting rink to earn your seat!</p> 

              <h2 className='h2-secondary left-align top-medium'>Are we allowed to smoke at the venue? </h2>
              <p className='p-primary left-align top-small'>The venue has gone to great lengths to prevent the local squirrels from smoking and requests you do not tempt them. </p> 

              <h2 className='h2-secondary left-align top-medium'>What kinds of shoes should I wear?</h2>
              <p className='p-primary left-align top-small'>Heel lovers, we all know the struggle of being a walking lawn aerator on grass. While there will be grassy areas for photos, the majority of the event is on solid ground! </p> 

              <h2 className='h2-secondary left-align top-medium'>Can I take pictures/videos during the ceremony?</h2>
              <p className='p-primary left-align top-small'>Absolutely! And send them to us!  We only ask that you kindly turn off your ringers and be mindful of the professional photographers—we don’t want framed photos of iPads obscuring our faces around the house!</p> 

              <h2 className='h2-secondary left-align top-medium'>Can I bring guests, +1s, cats, dogs, my Uncle Bill, pet penguin?</h2>
              <p className='p-primary left-align top-small'>Due to limited space, we are only able to accommodate guests that received an invitation—the guest list is now finalized, so we request that you do not bring a guest that was not formally invited!</p> 

              <h2 className='h2-secondary left-align top-medium'>What should I do if I can’t make it?</h2>
              <p className='p-primary left-align top-small'>You will be missed (unless you’re Fred McHale)—if you can’t make it to our wedding, please let us know as soon as possible so we can plan accordingly.</p> 

              <h2 className='h2-secondary left-align top-medium'>What happens after the ceremony?</h2>
              <p className='p-primary left-align top-small'>After the ceremony, the bridal party will be asked to stay behind for photos. Guests will be directed to the reception area for executi—cocktail hour!</p> 

              <h2 className='h2-secondary left-align top-medium'>I’ve heard rumors about a cake-smashing—is this true?</h2>
              <p className='p-primary left-align top-small'>Nope! If anyone approaches the cake with malicious intent, they will be tackled by our designated bridesmaid policewoman.</p> 

              <h2 className='h2-secondary left-align top-medium'>Will there be dancing?</h2>
              <p className='p-primary left-align top-small'>As the Mansion is a historic building, all sudden movements are prohibited. Just kidding—bring your best dance moves, it’s about to be a party!</p> 

              <h2 className='h2-secondary left-align top-medium'>What if I have dietary restrictions? </h2>
              <p className='p-primary left-align top-small'>We have tried to select multiple entree and appetizer options that will accommodate our guests with known dietary restrictions. If you have a specific concern, please reach out to us! </p> 

              <h2 className='h2-secondary left-align top-medium'>Are children invited?</h2>
              <p className='p-primary left-align top-small'>We love all your little ones! However, our ceremony and reception are an adult-only event—with the exception of the bride and groom.</p> 

              <h2 className='h2-secondary left-align top-medium'>Do you have a wedding registry?</h2>
              <p className='p-primary left-align top-small bottom-large'>We love you, your presence at our wedding is a gift (unless you’re Fred McHale)! We are also minimalists and request all physical and cash gifts be withheld, unless you’re making it rain on the dance floor.</p> 


    
            </div>           
          </div>
        </div>
      </div>
   
    </div>
  );

}

export { Wedding }
