
import React from 'react';
import    './App.css';
import   './ContentPages.css';



import spinGIF from './img/Spin180NFT.gif';
import waterAI from './img/waterAI200px.gif'; 
import conradUpImage from './img/conradUp.png';
import fansImage from './img/fans.png';

/* const myConnectedWallet = ThirdwebProvider.useConnectedWallet();*/

const Home = () => {
        return ( 
                <div className="main-page">
                       <div className="homePage"> 

                              <div className="homeFlexTopSection1"> 
                              <div className='nftSpinImageContainer'>
                                
 
                                <img src={spinGIF} alt="Spinning NFT"></img>
{/*                              <video autoPlay loop muted src={spinVideo} type='video/mp4' /> */}
{/*}                                            <img src={image10} className='nftImage' alt='Conrad'></img> */}
                                     </div>
                                <div className='cardContainer'>
                                <div className='homeCardInfo'>        
                                     <h1>Conrad Sewell NFT Collection</h1>
                                         <p>In the new digital age of music, where fans are less connected to artists, comes Conrad's first release of an NFT (Non-Fungible Token).</p>
                                            <p>A new way for fans to connect with Conrad and experience a personalised expression of Conrad’s new album through an AI generated custom visual effect for each song on the album.</p>
                                            <p>A limited release of the NFT songs will mean your experience remains exclusive, with collectors receiving special bonus content, privileges and unprecedented VIP access to Conrad.</p>
                                            <p>Collect, trade and become part of the Digital world.</p> </div>
                                </div>

          
                              </div>

                                <section className="homeFlexMiddleSection">
                                
                                <div className='middleSectionCard'>
                                        <div className='middleSectionCardInfo'>        
                                                <h3>Exclusive Real World Access</h3>
                                                <img src={fansImage} className='middleSectionCardImage' alt='Conrad'></img>
                                                <p>A Conrad Sewell NFT will be your exclusive pass to unprecedented content and personal access.  This will be the new way that artists can communicate directly with their fans.  Collect them all to increase your access and privileges.</p>
                                                
                                        </div>
                                </div>

                                <div className='middleSectionCard'>
                                        <div className='middleSectionCardInfo'>        
                                                <h3>What is an NFT ?</h3>
                                                <img src={conradUpImage} className='middleSectionCardImage' alt='Conrad'></img>
                                                <p>Think of your Conrad Sewell NFT as a "Certificate Of Authenticity" to an exlusive fans-only membership club.</p>
                                                
                                        </div>
                                </div>

                                <div className='middleSectionCard'>
                                        <div className='middleSectionCardInfo'>        
                                                <h3>AI Art</h3>
                                                <img src={waterAI} className='middleSectionCardImage' alt='Conrad'></img>
                                                <p>The lyrics of each song off Conrad's upcoming album will be re-imagined by an Artificial Intelligence (A.I.) system, to create an abstract and unique video that will be available exclusively to each NFT owner.</p>
                                                
                                        </div>
                                </div>

                                </section>      
        
                        {/*}        <section className="homeFlexBottomSection">
                                
                                <div className='extraCardInfo'>
                                        <div className='homeCardInfo'>        
                                                <h1>Bottom 1</h1>
                                                <p>A little blurb whats in it for the fans.</p>
                                                <img src={fansImage} className='homeSection2CardImage' alt='Conrad'></img>
                                        </div>
                                </div>

                                <div className='extraCardInfo'>
                                        <div className='homeCardInfo'>        
                                                <h1>Bottom 2</h1>
                                                <p>Blah blah blah.</p>
                                                <img src={futuristicImage} className='homeSection2CardImage' alt='Conrad'></img>
                                        </div>
                                </div>


        </section>  */}



                        </div>
                </div>
         
         
                    
                       
         
         
         )
}
export default Home
