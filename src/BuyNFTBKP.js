import React, { useEffect, useState } from 'react'
import {  ConnectWallet, Web3Button, useAddress, useChainId, useSDK, useContract, MediaRenderer, useOwnedNFTs } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { abi } from './abi.js';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import truncateEthAddress from 'truncate-eth-address';

//import Mint from './mint';

import    './App.css';
import   './ContentPages.css';

import image10 from './img/spin.png';
import wideImage2 from './img/wideImage2.png';

import GSTQAI from './files/GSTQ AI NFT small.mp4'
import MMABAI from './files/MMAB AI NFT small.mp4'
import GSTQSPIN from './files/GSTQ Spin NFT 1080p.mp4'
import MMABSPIN from './files/MMAB Spin NFT 1080p.mp4'


let conradSiteConnected = 0;
let conradWalletMessage = "Cryptowallet : Not Connected";
var conradWalletConnected = 0;
var myWalletIcon = "fa fa-times";
let myConradNetworkMessage = "Unable to determine blockchain network ID";
let myConradNetworkMessage2 = "Please connect to correct network";
//var myConradUseAddress = "not yet";
var myNetworkIcon = "fa fa-times";
//var myConradWalletAddress = "0x00"
const mintAmount = 1;

const totalCost = 0.0005;
const setCost = 0.0005;

const TinySpacer = styled.div`
  height: 20px;
  width: 100%;
`
const SmallSpacer = styled.div`
  height: 50px;
  width: 100%;
`
const NavBtnLinkYellow = styled(LinkR)`
    border-radius: 50px;
    background: #dba034;
    white-space: nowrap;
    padding: 12px 40px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: yellow;
        color: black;
    }
`;

const TopLine = styled.p`
    text-align: center;
    color: #dba034;
    background: 0;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 2.1em;
    line-height: 1.1;
    font-weight: 600;
    color: #dba034;
`;

const Subtitle2 = styled.h2`
    text-align: center;
    margin-bottom: 35px;
    font-size: 1.4em;
    line-height: 24px;
    color: #dba034;
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
    background: 0;
    padding: 0px 15px;
`;

const StyledRoundButton = styled.button`
  border-radius: 20px;
  border: 1PX;
  background: #dba034;
  padding: 0em 2.5em;
  font-weight: bold;
  font-size: 20px;
  color: black;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: yellow;
    color: black;
}
`;

const MintAmountDiv = styled.div`
    text-align: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background: 0;
    flex: 1;
`;

const MintNumber = styled.h3`
    font-size: 14px;
    color: #dba034;
`;

const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function mintPageTopConnectButton() {
       return (             
              <>                                
                 <div className="">
                 <h1>CONRAD SEWELL NFT INFO</h1>
                 <ConnectWallet 
                 className="web3ButtonYellow"
                 colorMode="dark"
                 accentColor='#dba034'>
                 </ConnectWallet>    
                 </div>
              </>
       )   
};

function informationalSection() {

       return (             
           <>
              <div className="homeCardInfo">
              <p>Pulled Data</p>
              <p>{conradWalletMessage}  <i className={myWalletIcon} aria-hidden="true"></i></p>
              <p>{myConradNetworkMessage}  <i className={myNetworkIcon} aria-hidden="true"></i></p> 
              </div>
           </>
           
         )
       };

function connectionSection() {
       return (            
       <>
       <div className="myMintSection">
       <ConnectWallet 
              className="web3ButtonYellow"
              colorMode="dark"
              accentColor='#dba034'>
       </ConnectWallet> 
      
       <p>{conradWalletMessage}  <i className={myWalletIcon} aria-hidden="true"></i></p>
       <p>{myConradNetworkMessage}  <i className={myNetworkIcon} aria-hidden="true"></i></p>  
       </div>

       <div><p>...</p></div>

       {showTheMintWeb3Modal()}

       </>   
       )
};
     
function showTheMintWeb3Modal() {
       if (conradWalletConnected === 1) return (             
       <>
              <div className="myMintSection"><p>CryptoWallet is connected</p></div>

       <div className="myMintSection">
       <Web3Button className="web3ButtonYellow"
              contractAddress="0x4747C0Be5ae1552BABF006C681B982c791613116"
              contractAbi={abi}
              action={(contract) => contract.call("mint", mintAmount, { value: ethers.utils.parseEther(totalCost) })}  
              accentColor="#dba034"
              colorMode="dark"
              onSuccess={(result) => alert("Success - NFT has been minted", result)}
              onError={(error) => alert("Error - NFT has not been minted", error)}> 
              Mint Your NFT.
       </Web3Button>
       </div>
       </>
       )
       };


const BuyNFT = () => {
       const sdk = useSDK();
       const myWalletBalance =  sdk.wallet.balance();


       const myConradNetworkId = useChainId();
       var myShortAdd = "0x...NONE";
       var myConradWalletAddressString = "000000none";

       const myConradWalletAddress = useAddress() ;

       if(typeof myConradWalletAddress === 'undefined') {
              let myConradWalletAddressString = "000000none";
              let  myShortAdd = "0x..." + myConradWalletAddressString.slice(-4);
              console.log('myConradWalletAddress === undefined');
       } else {
              let myConradWalletAddressString = myConradWalletAddress.toString();
              let  myShortAdd = "0x..." + myConradWalletAddressString.slice(-4);
              console.log(myShortAdd);
       };

       if(typeof myConradWalletAddress === 'undefined') {
              conradWalletMessage = "Cryptowallet : Not Connected";
              myWalletIcon = "fa fa-times";
              myNetworkIcon = "fa fa-times";
              conradWalletConnected = 0;
              } else {
              conradWalletMessage = "Cryptowallet : Connected" ;
              myWalletIcon = "fa fa-check";
              myNetworkIcon = "fa fa-times";
              conradWalletConnected = 1;
              conradSiteConnected = conradSiteConnected + 1;
             };
            
          
              if(typeof myConradNetworkId === 'undefined') {
                myConradNetworkMessage = "NOT on Correct Network"
                myConradNetworkMessage2 = "Network undefined"
              } else {
                  if (myConradNetworkId === 5) {
                        myConradNetworkMessage = "Goerli Network : Connected";
                        myConradNetworkMessage2 = "";
                        myNetworkIcon = "fa fa-check";
                        conradSiteConnected = conradSiteConnected + 1;
                 } else {
                        myConradNetworkMessage = "NOT on Goerli Test Network"
                        myNetworkIcon = "fa fa-times";
                        myConradNetworkMessage2 = "Switch networks to allow minting"
                        };
                 };

       return (
       
       <div className="main-page">
                                          
              <div className="homePage"> 

              <div className="cardContainer"> {/* the card at the top of the page that just has the Connect button */}
                     <section className="mintPageCardContainer">
                     {mintPageTopConnectButton()}
                     </section>
              </div>

                                                 {/* the hokey backgorund image showing different nft types, this is here simply */}
              <div className="wideImage"></div>  {/* so the ConnectWalletbutton does not hide any important information if it is still active */}

              <div className="cardContainer"> {/* the card that has some info on the connection, and main logic for page */}
                     <section className="mintPageCardContainer">
                     {informationalSection()}
                     <p>after informational section</p>
                     <p>Wallet Address : {myShortAdd}</p>
                     </section>
              </div>

              <div className="cardContainer">
                     <section className="mintPageCardContainer">
                     <p>before connection section</p>
                     <p>Wallet Address : {myShortAdd}</p>
                     {connectionSection()}
                     <p>after connection section</p>
                     <p>Wallet Address : {myShortAdd}</p>
                     </section>  
              </div>
                  

              </div>

       </div>           
       )
}

export default BuyNFT
