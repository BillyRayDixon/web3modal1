import React, {useState} from 'react';

import {  ConnectWallet, Web3Button, useAddress, useChainId, useSDK } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import {abi} from './abi.js';
//import { NavLink } from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import    './App.css';
import   './ContentPages.css';






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


const Mint = () => {
  const sdk = useSDK();
  const myWalletBalance =  sdk.wallet.balance();
  let conradSiteConnected = 0;
//let nftPageButtonLink = "No definition";
  let conradWalletMessage = "Cryptowallet : Not Connected";
  var myWalletIcon = "fa fa-times";
  let myConradNetworkMessage = "Unable to determine blockchain network ID";
  let myConradNetworkMessage2 = "Please connect to correct network";
  var myNetworkIcon = "fa fa-times";


// let myConradWalletAddress = useAddress() ;
if(typeof myConradWalletAddress === 'undefined') {
  conradWalletMessage = "Cryptowallet : Not Connected (address undefined)";
 } else {
  conradWalletMessage = "Cryptowallet : Connected" ;
  myWalletIcon = "fa fa-check";
  conradSiteConnected = conradSiteConnected + 1;
 };

  const myConradNetworkId = useChainId();
  if(typeof myConradNetworkId === 'undefined') {
    myConradNetworkMessage = "NOT on Goerli Test Network"
    myConradNetworkMessage2 = "Network undefined"
  } else {
      if (myConradNetworkId === 5) {
    myConradNetworkMessage = "Goerli Network : Connected";
    myConradNetworkMessage2 = "";
    myNetworkIcon = "fa fa-check";
    conradSiteConnected = conradSiteConnected + 1;
  } else {
    myConradNetworkMessage = "NOT on Goerli Test Network"
    myConradNetworkMessage2 = "Switch networks to allow minting"
  }

  
};

//const thisButtonIsHidden = "hidden";

//const myNFTButtonText = "test";
//const myNFTButtonTo = "to='/nft'";

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
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
    let newCost = (newMintAmount*cost)
    let stringNewCost = newCost.toString()
    setCost(stringNewCost)
  };

  function showViewConradNFTButton() {
    if (conradSiteConnected === 2) {
      return (
        <>
	<NavBtnLinkYellow  to='/nft'>View Your Conrad Sewell NFT</NavBtnLinkYellow>
  <div><p>this is a bit</p></div>
  <div><p>{conradSiteConnected}</p></div>
  
        </>
        
      )
    } else  {
      return (
        <>
	<NavBtnLinkYellow hidden to='/nft'>View Your Conrad Sewell NFTs</NavBtnLinkYellow>
  <div><p>this is a bit</p></div>
        </>
      )
    }
  };

  return (

    <div>
                                       <ConnectWallet 
                                    className="web3ButtonYellow"
                                    colorMode="dark"
                                    accentColor='#dba034'>
                                      
                                </ConnectWallet> 
            <p>{conradWalletMessage}  <i class={myWalletIcon} aria-hidden="true"></i></p>
      <p>{myConradNetworkMessage}  <i class={myNetworkIcon} aria-hidden="true"></i></p>                           
      <p>{myConradNetworkMessage2} {totalCost} </p>

         <p></p>                     
      <Heading>Mint Your New</Heading>
      <Heading>Conrad Sewell NFT</Heading>
      
      <Subtitle2><br/>0.05 $ETH (Goerli) per NFT + Gas</Subtitle2>
      <ButtonRow>
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
      <br/>       
      <TopLine >
        Total Cost  {totalCost}Ξ
      </TopLine>
      <BtnWrapper>



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
          <br/>


            {showViewConradNFTButton()}

          <br/>
      </BtnWrapper>
    </div>
  )
}

export default Mint


