import React, { useState } from 'react'
import {  ConnectWallet, useAddress, useChainId } from '@thirdweb-dev/react';
//import { ethers } from 'ethers';
//import { abi } from './abi.js';
//import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


//import Mint from './mint';

import    './App.css';
import   './ContentPages.css';

//import image10 from './img/spin.png';
//import wideImage2 from './img/wideImage2.png';

//import GSTQAI from './files/GSTQ AI NFT small.mp4'
//import MMABAI from './files/MMAB AI NFT small.mp4'
//import GSTQSPIN from './files/GSTQ Spin NFT 1080p.mp4'
//import MMABSPIN from './files/MMAB Spin NFT 1080p.mp4'



var conradWalletConnected = 0; // will be 0 if wallet not connected, 1 if wallet is connected
var conradNetworkConnected = 0; // will be 0 if not on goerli network, 1 if it is on the correct network
var conradSiteConnected = 0;  // add the above two vars, if this var eq 2 then all good to proceed


let conradWalletMessage = "Cryptowallet : Not Connected";

var myWalletIcon = "fa fa-times";
let myConradNetworkMessage = "Unable to determine blockchain network ID";
let myConradNetworkMessage2 = "Please connect to correct network";
//var myConradUseAddress = "not yet";
var myNetworkIcon = "fa fa-times";
//var myConradWalletAddress = "0x00"



const HolderForm = styled.form`

  max-width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const HolderInput = styled.input`
  width: 100%;
  margin: 10px;
  `  


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
              <p>{myConradNetworkMessage2}</p> 
              </div>
           </>
           
         )
       };

function connectionSection() {
       return (            
       <>
       <div className="myMintSection">

      
       <p>{conradWalletMessage}  <i className={myWalletIcon} aria-hidden="true"></i></p>
       <p>{myConradNetworkMessage}  <i className={myNetworkIcon} aria-hidden="true"></i></p>  
       </div>

       <div><p>...</p></div>

       {showTheMintWeb3Modal()}

       </>   
       )
};
     
//function showTheMintWeb3Modal2() {
//       return (             
//       <>
//       <div className="myMintSection"><p>CryptoWallet is connected</p>
//
//       
//</div>
//       </>
//       )
//       };
//       function showEmailFormModal() {
//              return (             
//              <>
//              <div className="myMintSection"><p>CryptoWallet is connected</p>
//       </div>
//              </>
//              )
//              };

function showTheMintWeb3Modal() {
       if (conradWalletConnected === 1) return (             
       <>
              <div className="myMintSection"><p>CryptoWallet is connected</p></div>

       <div className="myMintSection">

       </div>
       </>
       )
       };


const BuyNFT = () => {    

       const [emailStatus, setEmailStatus] = useState("Submit");
  
  
  
       // email section
       const handleSubmit = async (e) => {         
         e.preventDefault();
         setEmailStatus("Sending...");
         const { nftHolderName, nftHolderEmail } = e.target.elements;
              
         let details = {
              nftHolderName: nftHolderName.value,
              nftHolderEmail: nftHolderEmail.value,
              nftHolderWallet: myConradWalletAddress
         };
         let response = await fetch("http://localhost:5000/contact", {
           method: "POST",
           headers: {
             "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify(details),
         });
         setEmailStatus("Submit");
         let result = await response.json();
         alert(result.emailStatus);
       };
       // email section


       const myConradNetworkId = useChainId();
       var myShortAdd = "0x...NONE";
       //var myConradWalletAddressString = "000000none";

       const myConradWalletAddress = useAddress() ;


              // from nft.js 
        //      const conradContractAddress = "0x4747C0Be5ae1552BABF006C681B982c791613116";
       //       const { contract } = useContract(conradContractAddress, abi);
       //       const {data} = useOwnedNFTs(contract, myConradWalletAddress);

       // uset his logic to get my wallet address in short format
       if(typeof myConradWalletAddress === 'undefined') {
              let myConradWalletAddressString = "000000none";
              myShortAdd = "0x..." + myConradWalletAddressString.slice(-4);
              console.log('myConradWalletAddress === undefined');
              console.log('in the if statement');
              console.log(myShortAdd);
       } else {
              let myConradWalletAddressString = myConradWalletAddress.toString();
              myShortAdd = "0x..." + myConradWalletAddressString.slice(-4);
              console.log('in the if statement');
              console.log(myShortAdd);
       };
       console.log(myShortAdd);

       // to determine if the wallet is connected, and if yes, if the correct network is selected
       if(typeof myConradWalletAddress === 'undefined') {
              conradWalletMessage = "Cryptowallet : Not Connected";
              myWalletIcon = "fa fa-times";
              myNetworkIcon = "fa fa-times";
              conradWalletConnected = 0;
              conradNetworkConnected = 0;
              conradSiteConnected = conradWalletConnected + conradNetworkConnected;
              } else { // wallet is connected
              conradWalletMessage = "Cryptowallet : Connected" ;
              myWalletIcon = "fa fa-check";
              myNetworkIcon = "fa fa-times";
              conradWalletConnected = 1;
              conradNetworkConnected = 0;
              conradSiteConnected = conradWalletConnected + conradNetworkConnected;
              // so we have a connected wallet, now check the network
              if(typeof myConradNetworkId === 'undefined') {
                     myConradNetworkMessage = "NOT on Correct Network";
                     myConradNetworkMessage2 = "Network undefined";
                     conradWalletConnected = 1;
                     conradNetworkConnected = 0;
                     conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                   } else {
                       if (myConradNetworkId === 5) {  // we are on the right network
                             myConradNetworkMessage = "Goerli Network : Connected";
                             myConradNetworkMessage2 = "";
                             myNetworkIcon = "fa fa-check";
                             conradWalletConnected = 1;
                             conradNetworkConnected = 1;
                             conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                      } else {
                             myConradNetworkMessage = "NOT on Goerli Test Network"
                             myNetworkIcon = "fa fa-times";
                             myConradNetworkMessage2 = "Switch networks to allow minting";
                             conradWalletConnected = 1;
                             conradNetworkConnected = 0;
                             conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                             };
                      };

             };  //end of "wallet is connected" block
            
//             const [mintAmount, setMintAmount] = useState(1);
//             const cost = 0.0005;
//             const [setCost] = useState("0.0005");
//             const [totalCost, setCost] = useState("0.0005");
//             const decrementMintAmount = () => {
//                    let newMintAmount = mintAmount - 1;
//                    if (newMintAmount < 1) {
//                      newMintAmount = 1;
//                    }
//                    setMintAmount(newMintAmount);
//                    let newCost = (newMintAmount*cost)
//                    let stringNewCost = newCost.toString()
//                    setCost(stringNewCost)
//                  };    
//             const incrementMintAmount = () => {
//                    let newMintAmount = mintAmount + 1;
//                    if (newMintAmount > 10) {
//                      newMintAmount = 10;
//                    }
//                    setMintAmount(newMintAmount);
//                    let newCost = (newMintAmount*cost)
 //                   let stringNewCost = newCost.toString()
 //                   setCost(stringNewCost)
 //                 }; 


       return (
 


       <div className="main-page">
                                          
              <div className="homePage"> 

              <div className="cardContainer"> {/* the card at the top of the page that just has the Connect button */}
                     <section className="mintPageCardContainer">
                     {mintPageTopConnectButton()}
                     <p>Conrad site connected : {conradSiteConnected}</p>
                     </section>
              </div> 

                                                 {/* the hokey backgorund image showing different nft types, this is here simply */}
              <div className="wideImage"></div>  {/* so the ConnectWalletbutton does not hide any important information if it is still active */}

              <div className="cardContainer"> {/* the card that has some info on the connection, and main logic for page */}
                     <section className="mintPageCardContainer">
                     {informationalSection()}
                     <p>INF Wallet Address : {myShortAdd}</p>
                     <p>Conrad site connected : {conradSiteConnected}</p>
                     </section>
              </div>

              <div className="cardContainer">
                     <section className="mintPageCardContainer">
                     <p>Connection Section Card</p>
                     <p>Wallet Address : {myShortAdd}</p>
                     {connectionSection()}
                     <p>after connection section</p>
                     <p>Wallet Address : {myShortAdd}</p>
                     <p>Conrad site connected : {conradSiteConnected}</p>
                     </section>  
              </div>

  
              <div className="cardContainer">
       {/*       <section className="mintPageCardContainer">*/}
                     <HolderForm  onSubmit={handleSubmit}>
                            <div className='nftHolderFormCardInfo'> 
                            <h2>Sign Up For More Benefits</h2>
                     {/*       <SmallSpacer/> */}
                            <div>
                            <label htmlFor="nftHolderName" ><p style={{Color: '#dba034'}}>Name:</p></label>
                            <HolderInput type="text" id="nftHolderName" required style={{backgroundColor: '#dba034'}}/>
                            </div>
                            <div>
                            <label htmlFor="nftHolderEmail" style={{Color: '#dba034'}}><p style={{Color: '#dba034'}}>Email Address:</p></label>
                            <HolderInput type="text" id="nftHolderEmail" required style={{backgroundColor: '#dba034'}}/>
                            </div>
                            <button className="submitButtonStyle" type="submit">{emailStatus}</button>

                            </div>
                     </HolderForm>
       {/*              </section>*/}
              </div>


      

              </div> 
       </div>           
       )
}

export default BuyNFT
