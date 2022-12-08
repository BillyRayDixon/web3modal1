import React from 'react'

import image10 from './img/spin.png';

const About = () => {
       return (
       <div className="main-page">
              <div className="aboutPage"> 
                     <section className="aboutSection1">
                            <div className="infoImage1">
                            <h1>Conrad Sewell NFT Collection</h1>
                                <p>In the new digital age of music where fans are less connected to artists, comes Conrad's first NFT release.</p>
                                   <p>A new way for fans to connect with Conrad and experience a personalised expression of Conrad’s new album through an AI generated custom visual effect for each song on the album.</p>
                                   <p>A limited release of the NFT songs will mean your experience remains exclusive, with collectors receiving special bonus content, privileges and unprecedented VIP access to Conrad.</p>
                                   <p>Collect, trade and become part of the Digital world.</p>
                                   <img src={image10} className='nftImage' alt='Conrad'></img>
                            </div>          
                     </section>
              </div>
       </div>


           
              


)
}

export default About
