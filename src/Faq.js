import React, {useState } from 'react';
import    './ContentPages.css';
import    './App.css';
import './Accordian.css';
import leaderboard from './img/LEADERBOARD50.png'; 

const dataCollection = [
       {
       question: "What is an 'NFT' ?",
       answer: 'NFT stands for non-fungible token. It is a one-of-a-kind digital token that you can buy or sell. These tokens can represent just about anything, and they use blockchain technology to prove ownership. Sometimes they are associated with a digital image, GIF, or a song. Or, they could be redeemed for a physical object. Sometimes the owner is entitled to an experience, like an exclusive video clip, or a phone call, pre-sale access to new songs or videos, special back-stage passes, or other "soon-to-be-revealed" ways that fans can interact with Conrad. Conrad Sewell NFTs may allow the owner access to real-world and lifetime experiences, physical items (such as exclusive merchandise), digital art, one-on-one access to Conrad and more.'
       }, {
       question: "What Does 'Minting' Mean ?",
       answer: 'Minting generally means when something (in this case, an NFT) is produced for the first time, like minting a coin.  Minting an NFT means the NFT is created for the very first time, by you, for you, and there is a digital record of your ownership.'
       }, {
       question: "What is a 'Blockchain' ?",
       answer: 'A Blockchain is a distributed ledger, which allows for a decentralised manner of keeping record logs.  Think of the Blockchain as a spreadsheet that is shared among many computers, all of these computers keeping a record of every new NFT being minted, every transfer of ownership, every transaction.  It is safe, and verified, due to the large number of computers participating on the blockchain.  Access to a Blockchain is through a Crypto Wallet which can be on your computer or on your mobile phone, which gives you secure access to the Blockchain, to NFTs, and to Crypto-currencies, without revealing your identity.  There are a number of Blockchain networks such as Ethereum, Polygon, Fantom, and others.  We have chosen the Ethereum network since this is the largest and most established Blockchain.'
      }, {
       question: "What is a 'Crypto Wallet', and why do I need one ?",
       answer: 'Crypto wallets keep your private keys (the passwords that give you access to your cryptocurrencies) safe and accessible, allowing you to send and receive cryptocurrencies like Bitcoin and Ethereum.  Unlike a normal wallet, which can hold actual cash, crypto wallets technically don’t store your crypto. Your holdings live on the blockchain, but can only be accessed using a private key. Your keys prove your ownership of your digital money and allow you to make transactions, like buying or trading an NFT.  The most popular Crypto Wallets are Metmask, CoinbaseWallet, and we have some instructions on how to install these on your device (click the How To Buy option on the menu in the top right of your screen).  We do suggest you do some research on the different CryptoWallets before deciding on one though.'
       }, {
       question: 'Why has Conrad decided to make an NFT ?',
       answer: 'NFTs allow Conrad to invite his most loyal fans to be part of the present, and the future of his music.  The NFT will allow Conrad and his fans to have a more interactive community, discussion, and insight into each other.  The NFT community will also enable Conrad to hear directly from fans, their stories and how this community can grow.  This is the ONLY official NFT that is authorised by Conrad and his team.'
       }, {
       question: 'What do I recieve when I mint a Conrad Sewell NFT ?',
       answer: "You will receive an exclusive 1-of-1000 animated 3D Collector Card Case video and image, and an art-video that has been generated by an AI program based on the lyrics to the song.  Each song from Conrad's upcoming album 'Precious' will have it's own, unique NFT collector card, with animated artwork of a rock-and-roll themed jacket.  But more importantly, your NFT will give you special 'gated' access to 'members-only' sections of this website, and on the Discord server.",
       }, {
       question: 'What can I do with my NFT ?',
       answer: "You will be able to view the NFT artwork on a computer or mobile device, or even download it to display on digital frames or TV's.  On your desktop/laptop computer, once you have purchased a Conrad Sewell NFT, the video files will display in your browser, and there will be a link to download the file."
       }, {
        question: 'Why cant I download the file onto my mobile device in Metamask ?',
        answer: 'There is a limitation with the Metamask app on mobile phones.  The link that allows you to download displays the file rather than downloading it.  Thats ok, once you have purchased a Conrad Sewell NFT, you will have the ability to input your name and email address, and we will email a link to download the files direct to your mailbox.'
          }, {        
            question: 'What will you do with my email address ?',
            answer: 'Your email address will only be used to send the link to the NFT video files, and also for Conrads team to contact you directly when special member-only events and offers are available, before these are open to the general public.  Your email will not be used for spam, nor will it be sold to any third-party marketing companies.'
              }, {        
           question: 'Why do I need one ?',
       answer: 'If you are a fan of Conrad, and you want to be part of a special new way of interacting with him, the NFT is the perfect way.'
       }, {
        question: 'What are Gas Fees ?',
        answer: 'A Gas Fee is a Blockchain Transaction Fee, a small charge added onto the cost of buying an NFT, similar to a bank fee or ATM fee or credit card surcharge.  The gas fee is charged by the Blockchain when you buy, or sell an NFT.  This should only be a few dollars on the purchase of a Conrad Sewell NFT.'
        }, {
       question: 'How many NFTs will there be ?',
       answer: "The first stage of the Conrad Sewell NFT will be limited to only 1000.  Stay tuned to news on Conrad's social pages, or get access to the exclusive Conrad Sewell Fan Group Discord for more information on the next stages for the NFT."
       }, {

       question: 'What is Discord ?',
       answer: "Discord is a voice, video, and text chat app that's used worldwide by tens of millions of people ages 13+ to talk and hang out with their communities and friends and fan-groups. Discord will be a pivotal way in which Conrad will communicate directly with fans, and fan groups, and vice-versa."
       }, {
       question: 'Can I sell My NFT ?',
       answer: 'Yes, sales of Conrad Sewell NFT will be done through the Opensea marketplace.  There is a link below to Opensea'
       }, {
        question: "What is Opensea ?",
        answer: "OpenSea is the world's largest marketplace for NFTs and crypto collectibles. On this site, you can browse, buy, sell, and auction NFTs.  Once you own a Conrad Sewll NFT, you can sell or trade it there."
        }, {
                 question: 'I still have more questions about the NFT, who do I contact ?',
       answer: "You can simply join our Conrad Sewell Fan Discord server (click the link in the menu in the top right of your screen, or click the Discord icon at the bottom of the page) and send a message to one of the Administrators."
       }
     ];

const Faq = () => {

       const [accordion, setActiveAccordion] = useState(-1);

       function toggleAccordion(index) {
         if (index === accordion) {
           setActiveAccordion(-1);
           return
         }
         setActiveAccordion(index);
       };

       return (
         <div>     
       <div className="faqmain-page">
              <div className="faqMainContainer"> 
              <div className="accordianContainer">
        <div>
          <span className="accordion__title"></span>
          <h1>Frequently Asked Questions</h1>
        </div>

      </div>
       {/* -- start -- */}                        

       <>
      <div className="accordianContainer">
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>

                    {accordion === index ?
                      <span><i className="fa-solid fa-chevron-up"></i></span> : <span><i className="fa-solid fa-chevron-down"></i></span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
    </>

       {/* -- end -- */}                        
             
       </div>

       </div> 
       <div className="leaderboardContainer">
<img src={leaderboard} alt='Conrad'></img>
</div>
       </div>


)
}

export default Faq
