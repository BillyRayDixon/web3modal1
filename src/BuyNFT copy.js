import React from 'react'
import image10 from './img/spin.png';
import    './ContentPages.css';
import Mint from './mint';





const BuyNFT = () => {
       return (
       <div className="main-page">
              <div className="buyNFTPage"> 


                     <section className="nftImageSection">
                            <h1>CONRAD SEWELL NFT</h1>

                            <img src={image10} className='nftImage' alt='Conrad'></img>
                            <p >Mint page will be live, soon</p>
                            <p>--</p>
                            <p >Please join our Discord chat group for updates</p>

                            <div className="myConnectButton" >
                            <button className="connectButtonButton"> 
                                {/* <ConnectWallet 
                                    className="connectWalletButton" 
                                    colorMode="dark"
                                    accentColor='yellow'>
                                </ConnectWallet>  */}
                                </button> 


                            </div>

                            {/* this is the mint button supplied by ethan, pulls in code from mint.js file */}
                            <div className='cardContainer'>
                                <div className='homeCardInfo'> 
                      {/*      <div className="myMintButton"> */}
                                <Mint>
                                   mint nft
                                </Mint>
                                </div>  </div>  
                     </section>


              </div>

       </div>           
       )
}

export default BuyNFT
