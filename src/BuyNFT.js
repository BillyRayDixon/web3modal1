import React, { useState } from 'react'
import {  ConnectWallet, useAddress, useChainId, Web3Button, MediaRenderer, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { abi } from './abi.js';
import styled from 'styled-components';

import    './App.css';
import   './ContentPages.css';
import GSTQAI from './files/GSTQ AI NFT small.mp4';
import MMABAI from './files/MMAB AI NFT small.mp4';
import GSTQSPIN from './files/GSTQ Spin NFT 1080p.mp4';
import MMABSPIN from './files/MMAB Spin NFT 1080p.mp4';

var conradWalletConnected = 0; // will be 0 if wallet not connected, 1 if wallet is connected
var conradNetworkConnected = 0; // will be 0 if not on goerli network, 1 if it is on the correct network
var conradSiteConnected = 0;  // add the above two vars, if this var eq 2 then all good to proceed
let myConnectionString = "no connection data yet";
//var myCardVisibility = "cardContainerHidden";
let conradWalletMessage = "Cryptowallet : Not Connected";

var myWalletIcon = "fa fa-times";
let myConradNetworkMessage = "Network ID unknown";
let myConradNetworkMessage2 = "Please connect to correct network";

var myNetworkIcon = "fa fa-times";

var displayEmailForm = "cardContainerHidden";
var displayMyNFTCollection = "cardContainerHidden";
var displayMintButtonModal = "cardContainerHidden";

// ******** in-line css definitions *************************************************//
// ******** in-line css definitions *************************************************//
const HolderForm = styled.form`
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 5px;
  flex-direction: column;
`;
const HolderInput = styled.input`
  width: 100%;
  margin: 0px;
  padding: 5px;
  height: 30px;
  font-size: 14px;
  `;  
  const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  background: 0;
  padding: 0px 15px;
`;
const TinySpacer = styled.div`
  height: 20px;
  width: 100%;
`;
const StyledRoundButton = styled.button`
  border-radius: 20px;
  border: 1PX;
  background: #dba034;
  padding: 0em 2em;
  font-weight: bold;
  font-size: 20px;
  color: black !important;
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
  align-items: ;
  background: 0;
  flex: 1;
`;
const MintNumber = styled.h3`
  font-size: 16px;
  color: #dba034;
`;
const NftGrid = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;
  flex-wrap: wrap;
`;
const NftBox = styled.div`
  border-radius: 16px;
  border: 2px solid #fff;
  min-height: 200px;
  width: 400px;
  margin-top: 25px;
`;
// ******** in-line css definitions *************************************************//
// ******** in-line css definitions *************************************************//

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
              <p>{conradWalletMessage}  <i className={myWalletIcon} aria-hidden="true"></i></p>
              <p>{myConradNetworkMessage}  <i className={myNetworkIcon} aria-hidden="true"></i></p> 
              <p>{myConradNetworkMessage2}</p> 

              </div>
           </>          
         )
       };
       
const BuyNFT = () => {    

       function RenderDownload(song) {
              if (song === "God Save the Queen") {
                return (
                  <>
                  <a href={GSTQAI} download>Click here to download the AI Video to your device</a>
                  <br/>
                  <br/>
                  <a href={GSTQSPIN} download>Click here to download the NFT Video to your device</a>
                  </>
                  
                )
              } else if (song === "Make Me a Believer") {
                return (
                  <>
                  <div><a href={MMABAI} download>Click here to download the AI Video to your device</a></div>
                  <br/>
                  <br/>
                  <div><a href={MMABSPIN} download>Click here to download the NFT Video to your device</a></div>
                  </>
                )
              };
            };

       // ************* mint button section *************************************** //
       // ************* mint button section *************************************** //
       const [mintAmount, setMintAmount] = useState(1);
       const cost = 0.0005;
       const [totalCost, setCost] = useState("0.0005");
       const decrementMintAmount = () => {
              let newMintAmount = mintAmount - 1;
              if (newMintAmount < 1) {
                     newMintAmount = 1;
              }
              setMintAmount(newMintAmount);
              let newCost = (newMintAmount*cost)
              let stringNewCost = newCost.toString()
              setCost(stringNewCost)
       };

       const incrementMintAmount = () => {
              let newMintAmount = mintAmount + 1;
              if (newMintAmount > 5) {
                     newMintAmount = 5;  // mint no more than 5 NFTs at a time, dont be greedy
              }
              setMintAmount(newMintAmount);
              let newCost = (newMintAmount*cost)
              let stringNewCost = newCost.toString()
              setCost(stringNewCost)
       };
  
       // ************* email section *************************************** //
       // ************* email section *************************************** //
       const [emailStatus, setEmailStatus] = useState("Submit");
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

       const Address = useAddress()
       const conradAddress = "0x4747C0Be5ae1552BABF006C681B982c791613116";
       const { contract } = useContract(conradAddress, abi);
       const {data} = useOwnedNFTs(contract, Address);

       console.log('how many');
       console.log(data);
       console.log(data?.length);
       console.log('how many');
       let numberOfNFTOwned = data?.length ? data?.length : 0;
       console.log("numberOfNFTOwned");
       console.log(numberOfNFTOwned);
       console.log("numberOfNFTOwned");

 
 
 //const howManyNFT = myNFTdata.size();

       const myConradNetworkId = useChainId();
       var myShortAdd = "0x...NONE";
       //var myConradWalletAddressString = "000000none";

       const myConradWalletAddress = useAddress() ;

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
              displayMintButtonModal = "cardContainerHidden";
              displayEmailForm = "cardContainerHidden";
              displayMyNFTCollection = "cardContainerHidden";

              } else { // wallet is connected
              conradWalletMessage = "Cryptowallet : Connected" ;
              myWalletIcon = "fa fa-check";
              myNetworkIcon = "fa fa-times";
              conradWalletConnected = 1;
              conradNetworkConnected = 0;
              conradSiteConnected = conradWalletConnected + conradNetworkConnected;
              displayMintButtonModal = "cardContainerHidden";
              displayEmailForm = "cardContainerHidden";
              displayMyNFTCollection = "cardContainerHidden";

              // so we have a connected wallet, now check the network
              if(typeof myConradNetworkId === 'undefined') {
                     myConradNetworkMessage = "NOT on Correct Network";
                     myConradNetworkMessage2 = "Network undefined";
                     conradWalletConnected = 1;
                     conradNetworkConnected = 0;
                     conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                     displayMintButtonModal = "cardContainerHidden";
                     displayEmailForm = "cardContainerHidden";
                     displayMyNFTCollection = "cardContainerHidden";
                     numberOfNFTOwned = 0; // reset this variable since thirdweb doesnt 
                   } else {
                       if (myConradNetworkId === 5) {  // we are on the right network, and connected
                             myConradNetworkMessage = "Goerli Network : Connected";
                             myConradNetworkMessage2 = "";
                             myNetworkIcon = "fa fa-check";
                             conradWalletConnected = 1;
                             conradNetworkConnected = 1;
                             conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                             displayMintButtonModal = "cardContainer";  // show the mint modal ONLY if we are connected
                             displayEmailForm = "cardContainerHidden";
                             displayMyNFTCollection = "cardContainerHidden";
                      } else {
                             myConradNetworkMessage = "NOT on Goerli Test Network"
                             myNetworkIcon = "fa fa-times";
                             myConradNetworkMessage2 = "Switch networks to allow minting";
                             conradWalletConnected = 1;
                             conradNetworkConnected = 0;
                             conradSiteConnected = conradWalletConnected + conradNetworkConnected;
                             displayMintButtonModal = "cardContainerHidden";
                             displayEmailForm = "cardContainerHidden";
                             displayMyNFTCollection = "cardContainerHidden";
                             numberOfNFTOwned = 0; // reset this variable since thirdweb doesnt 
                             };
                      };

             };  //end of "wallet is connected" block

             if (conradSiteConnected === 0) {
                     myConnectionString = conradWalletConnected + " " + conradNetworkConnected + " " + conradSiteConnected
              };

             if (conradSiteConnected === 1) {myConnectionString = conradWalletConnected + " " + conradNetworkConnected + " " + conradSiteConnected};
             if (conradSiteConnected === 2) {
                     myConnectionString = conradWalletConnected + " " + conradNetworkConnected + " " + conradSiteConnected;
                     if (numberOfNFTOwned === 0) {
                            displayEmailForm = "cardContainerHidden";
                            displayMyNFTCollection = "cardContainerHidden";
                     } else {
                            displayEmailForm = "cardContainer";
                            displayMyNFTCollection = "nftGridSection";                           
                     }
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
                     <div className="hideMe"><p className="hideMe">{myConnectionString}</p> </div>
                     <p>Wallet Address : {myShortAdd}</p>
                     <p>Number of NFTs owned : {numberOfNFTOwned}</p>
                     </section>
              </div>

              {/* *** email gathering section  */}
              {/* this is the card on the form that displays the form to get customer's name and email address */}
        {/*      <div className="cardContainer"> */}


              <div className="homeFlexMiddleSection">  

              {/* display email form modal, if connected */}
              <div className={displayEmailForm}> 
                     <HolderForm  onSubmit={handleSubmit} >
                            <div className='nftEmailFormCardInfo'> 
                            <h2>Sign Up For More</h2>
                            <TinySpacer/> 
                            <div>
                            <label htmlFor="nftHolderName" ><p style={{Color: '#dba034'}}>Name:</p></label>
                            <HolderInput type="text" id="nftHolderName" required style={{backgroundColor: '#dba034'}}/>
                            </div>
                            <TinySpacer/> 
                                                       <div>
                            <label htmlFor="nftHolderEmail" style={{Color: '#dba034'}}><p style={{Color: '#dba034'}}>Email Address:</p></label>
                            <HolderInput type="text" id="nftHolderEmail" required style={{backgroundColor: '#dba034'}}/>
                            </div>
                            <TinySpacer/> 
                            <button className="submitButtonStyleNEW" type="submit">{emailStatus}</button>
                            </div>
                     </HolderForm>
              </div>

               {/* display mint button modal, if connected */}
               <div className={displayMintButtonModal}>
                            <div className='myMintSection'> 
                            <h2>Mint Your New</h2>
                            <h2>Conrad Sewell NFT</h2>
                            <div><br/>0.05 Ξ Per NFT (plus gas fee)</div>
                            <TinySpacer/>
                            <ButtonRow className="myMintButton">
                            <StyledRoundButton 
                                   onClick={(e) => {
                                   e.preventDefault();
                                   decrementMintAmount()}}>
                                   -
                            </StyledRoundButton>
                            <MintAmountDiv>
                            <MintNumber>
                            <br/>
                            {mintAmount}
                            </MintNumber>
                            </MintAmountDiv>
                            <StyledRoundButton 
                                   onClick={(e) => {
                                   e.preventDefault();
                                   incrementMintAmount()}}>
                                   +
                            </StyledRoundButton>
                            </ButtonRow> 
                            <TinySpacer/>
                            <div><p>Total Cost : {totalCost} Ξ (plus gas fee)</p></div>     
                            <TinySpacer/>   

                            <Web3Button className="web3ButtonYellow"
                                   contractAddress="0x4747C0Be5ae1552BABF006C681B982c791613116"
                                   contractAbi={abi}
                                   action={(contract) => contract.call("mint", mintAmount, { value: ethers.utils.parseEther(totalCost) })}
                                   accentColor="#dba034"
                                   colorMode="dark"         
                                   onSuccess={(result) => alert("Success - NFT has been minted", result)}
                                   onError={(error) => alert("Error - NFT has not been minted", error)}> 
                                   Mint Your NFT
                            </Web3Button> 
                            </div>     
              </div> {/* end of mint button modal card section ------------------------------*/}

              </div> {/* end of homeFlexMiddleSection ---------------------------------------*/}

              
              <div className={displayMyNFTCollection}> {/* this is where we will display the nft collection, if customer has them */}


                     <NftGrid className='displayMyNFTCollectionGrid'>
      {data?.map((nft) => (
        <NftBox className="nftBoxSection" key={nft.metadata.id.toString()}>
          <h3 className="nftMediaLabel" style={{backgroundColor: '#000', Color: '#dba034'}}>{nft.metadata.attributes[0].value} NFT #{nft.metadata.id}</h3>
          <MediaRenderer className="nftMediaDisplay"
            key={nft.metadata.id + "AI"}
            src={nft.metadata.ai_url} 
            style={{width: '100%',height: '300px',borderRadius: '15px', border: '2px solid #000'}}
            />
            <MediaRenderer className="nftMediaDisplay"
            key={nft.metadata.id + "NFT"}
            src={nft.metadata.card_url} 
            style={{width: '100%',height: '300px',borderRadius: '15px', border: '2px solid #000'}}
            />
{/*          <h3 className="nftMediaLabel" style={{backgroundColor: '#000', Color: '#dba034'}}>{nft.metadata.attributes[0].value} #{nft.metadata.id}</h3> */}
          
          <br/>
          <div className="nftDownloadSection">
          {RenderDownload(nft.metadata.attributes[0].value)} 
        </div>
          
        </NftBox>
      ))}
      </NftGrid>

              </div> {/* end of nft display section */}

       </div>   
       </div>        
       )
};

export default BuyNFT
