import React from 'react'
import    './App.css';
import   './ContentPages.css';

import styled from 'styled-components';


import metamask from './img/metamaskfox.png';
import coinbase from './img/Coinbase_Wordmark.png';
import leaderboard from './img/LEADERBOARD100.png'; 

const TinySpacer2 = styled.div`
  height: 30px;
  width: 100%;
`;

const Howto = () => {
       return (
              <div className="main-page">
              <div className="howToPage">
                     <div className="howToDiv">
                     <h2>A brief overview of Crypto, NFT's, and how to buy.</h2>


 

                                   </div>
</div>
                     {/* inserted here */}
                     <div className="faqPageMain"> 



  <section className="homeFlexMiddleSection">
 
  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
          <h3>A brief overview of Crypto, NFT's, and how to buy.</h3>
          <p>By no means will this be an exhaustive tutorial on Crypto, NFT's, and how to get involved, but hopefully we can help point you in the right direction.</p>
                     <p>Please read through the FAQ section first, to get an idea of some of the terms used on this site.</p>
                     <p>At the bottom of this page will be a few links with some more detailed resources.  As with everything on the internet, please do your own research before transferring any money.</p>
                     <p>If you want some more information about NFTs and what they are, you can click <a href="https://opensea.io/learn/what-are-nfts" target="_blank" rel="noreferrer">this link</a> to go to a more detailed explanation on the opensea.io website.</p>
          </div>
  </div>

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>Crypto Wallets.</h3>
                  <p>To buy an NFT, you'll need a Crypto Wallet.  This Wallet can be installed on your mobile device (as an App that you can download from your App store), or on your computer (as a plug-in that you can download to use in the Google Chrome Browser).</p>
                     <p>For ease-of-use, popularity, and technical support, we recommend using either the Coinbase Wallet, or the Metamask Wallet.</p>
                     <p>If you want some more information about Crypto Wallets, you can click <a href="https://crypto.com/university/crypto-wallets" target="_blank" rel="noreferrer">this link</a> to go to a more detailed explanation on the crypto.com website, or click <a href="https://opensea.io/learn/what-is-crypto-wallet" target="_blank" rel="noreferrer">this link</a> for some information on the opensea.io website.</p>

                             </div>
  </div>

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>Some more information.</h3>
                     <p>If you want some more information about buying NFTs and 'gas fees', click <a href="https://opensea.io/learn/nft-gas-fees" target="_blank" rel="noreferrer">this link</a> to go to a more detailed explanation on the opensea.io website.</p>
                     <p>For more information about Coinbase, as well as a wealth of information about Crypto, NFTs, and Wallets, please click <a href="https://www.coinbase.com/learn/crypto-basics"  target="_blank" rel="noreferrer">this link</a> to go to the Coinbase website.</p>
                     <p>For more information about Metamask, please click <a href="https://metamask.io/"  target="_blank" rel="noreferrer">this link</a> to go to the Metamask website.</p>
                     <p>Also, at the bottom of this page, there are links to a short Youtube video on how to install either of these wallets on your preferred device.</p>                
                     <p>If you have never bought an NFT, and the world of Cryptocurrency is new to you, please watch the Youtube video links at the bottom of the page.</p>                
          </div>
  </div>
</section>

<div className="nftSpinImageContainer">
<img src={leaderboard} alt='Conrad'></img>
</div>

<section className="homeFlexMiddleSection">

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>Crypto Exchanges.</h3>
                  <p>Once you have a Wallet setup, you'll need to get some Cryptocurrency in it.</p>
                     <p>There are many different Crypto Currencies - the main on that most people have heard about is Bitcoin, but there are hundreds of others.</p>
                     <p>The Conrad Sewell NFT exists on the Ethereum Network, due to it's size and populrity in the NFT marketplace.  The currency (or coin, or token) used on the Ethereum Network is called an 'Ethereum'.</p>
  
          </div>
          
  </div>

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>Ethereum.</h3>
                  <p>To buy a Conrad Sewell NFT, you'll first need to buy Ethereum (you'll buy the Ethereum tokens using real money).  You can do this through sites such as Coinbase, Binance, or Swyftx.</p>
                     <p>Please do some research into which of these is best for you.</p>
                     <p>Setting up an account with one of those Crypto Exhanges is like setting up a new account with a bank.  They will need some personal details for security reasons, but once you are setup you can </p>                     

          </div>
  </div>
</section>


<section className="homeFlexMiddleSection">
  

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>iPhone.</h3>
                  <p><a href="https://youtu.be/pxtjRlBdiDM"  target="_blank" rel="noreferrer"><img src={coinbase} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/pxtjRlBdiDM"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough of installing Coinbase wallet on your iPhone</a></p>
<TinySpacer2/>
                  <p><a href="https://youtu.be/ABtArtkHq3E"  target="_blank" rel="noreferrer"><img src={metamask} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/ABtArtkHq3E"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough of installing Metmask on your iPhone</a></p>

          </div>
          
  </div>

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>Mac/PC.</h3>
                  <p><a href="https://youtu.be/xnWiIp4Ex9s"  target="_blank" rel="noreferrer"><img src={coinbase} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/xnWiIp4Ex9s"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough of installing Coinbase wallet on your Mac or PC</a></p>
                     <TinySpacer2/>
                     <p><a href="https://youtu.be/60AnNyyMok8"  target="_blank" rel="noreferrer"><img src={metamask} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/60AnNyyMok8"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough of installing Metmask on your Mac or PC</a></p>

          </div>
  </div>
</section>




    
  <section className="homeFlexMiddleSection">
  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>NFT Purchase - Desktop.</h3>
                  <p><a href="https://youtu.be/hPS8mGTxBHU"  target="_blank" rel="noreferrer"><img src={metamask} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/hPS8mGTxBHU"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough showing the purchase of a Conrad NFT using Metmask on a desktop computer.</a></p>
 
          </div>
  </div>

  <div className='middleSectionCard'>
          <div className='middleSectionCardInfo'>        
                  <h3>NFT Purchase - Mobile.</h3>
                  <p><a href="https://youtu.be/-Yjnu7y0yYY"  target="_blank" rel="noreferrer"><img src={metamask} alt="wallet"/></a></p>
                     <p><a href="https://youtu.be/-Yjnu7y0yYY"  target="_blank" rel="noreferrer">Click here for Youtube walkthrough showing the purchase of a Conrad NFT using Metmask on a mobile device (iPhone).</a></p>

          </div>
  </div>


  </section> 
 
</div>


              </div>
       )
}

export default Howto
