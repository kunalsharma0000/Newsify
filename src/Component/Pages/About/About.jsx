import React from 'react'
import img from '../../../assests/210506-gradient-background-wide-design.png'
import wall from '../../../assests/wall-street-journal-newspaper-logo-logo-wall-street-journal-newspaper-samsung-mobile-wall-street-journal-116480015.webp'
import apple from '../../../assests/apple-fined-nearly-2-billion-by-the-european-union-over-music-streaming-competition.webp'
import tesla from '../../../assests/teslas-entry-will-put-a-stamp-of-maturity-on-indias-car-market-the-third-biggest-in-the-world-after-china-and-the-us-.webp'
import us from '../../../assests/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
export default function About() {
 
  return (
  <>
   <section className='about-section py-6'>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 p-0">
          <div className="about-heading text-center mb-3">
            <h1>Catch the Latest on Apple, Tesla,<br />  Top USA News, and Wall Street Updates</h1>
        </div>
        </div>
      </div>
    </div>
   </section>
   {/*  */}
   <section className='about-news py-5'>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 p-0">
         <div className="news">
        <div className="row">
           <div className="col-xl-3">
            <div className="card shadow-lg rounded-sm wall ">
               <div className="rotate-imgs rounded-sm">
                <img className='rounded-sm' src={wall} alt="" />
               </div>
                <div className="wall-heading py-2 text-center align-text-top">
                  <p>National surveys repeatedly rank The Wall Street Journal among the most trusted news organizations in the U.S. on both sides of the political divide. Readers trust us because they see us as fair, accurate and impartial. There are many journalistic practices that are the bedrock of this trust.</p>
                </div>

            </div>
            
            </div>
            <div className="col-xl-3">
            <div className="card shadow-lg rounded-sm wall ">
               <div className="rotate-imgs rounded-sm">
                <img className='rounded-sm' src={apple} alt=""/>
               </div>
                <div className="wall-heading py-2 text-center align-text-top">
                  <p>National surveys repeatedly rank The Wall Street Journal among the most trusted news organizations in the U.S. on both sides of the political divide. Readers trust us because they see us as fair, accurate and impartial. There are many journalistic practices that are the bedrock of this trust.</p>
                </div>

            </div>
            
            </div>
            <div className="col-xl-3">
            <div className="card shadow-lg rounded-sm wall ">
               <div className="rotate-imgs rounded-sm">
                <img className='rounded-sm' src={tesla} alt=""/>
               </div>
                <div className="wall-heading py-2 text-center align-text-top">
                  <p>National surveys repeatedly rank The Wall Street Journal among the most trusted news organizations in the U.S. on both sides of the political divide. Readers trust us because they see us as fair, accurate and impartial. There are many journalistic practices that are the bedrock of this trust.</p>
                </div>

            </div>
            
            </div>
            <div className="col-xl-3">
            <div className="card shadow-lg rounded-sm wall ">
               <div className="rotate-imgs rounded-sm">
                <img className='rounded-sm' src={us} alt=""/>
               </div>
                <div className="wall-heading py-2 text-center align-text-top">
                  <p>National surveys repeatedly rank The Wall Street Journal among the most trusted news organizations in the U.S. on both sides of the political divide. Readers trust us because they see us as fair, accurate and impartial. There are many journalistic practices that are the bedrock of this trust.</p>
                </div>

            </div>
            
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
   </section>
  </>
  )
}
