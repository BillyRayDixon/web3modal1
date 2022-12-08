import React, {useEffect, useState} from 'react'
import {useOwnedNFTs, useAddress, useContract, MediaRenderer } from '@thirdweb-dev/react';
import {abi} from './abi'
import styled from 'styled-components';
import GSTQAI from './files/GSTQ AI NFT small.mp4'
import MMABAI from './files/MMAB AI NFT small.mp4'
import GSTQSPIN from './files/GSTQ Spin NFT 1080p.mp4'
import MMABSPIN from './files/MMAB Spin NFT 1080p.mp4'
//import GSTQPIC from './files/GSTQ0090Front.png'
//import MMABPIC from './files/MMAB0090Front.png'
//import {Link as LinkR} from 'react-router-dom';
import    './ContentPages.css';
import    './App.css';

//const Spacer = styled.div`
//  height: 250px;
//  width: 100%;
//`
const TinySpacer = styled.div`
  height: 20px;
  width: 100%;
`


const SmallSpacer = styled.div`
  height: 50px;
  width: 100%;
`

const NftGrid = styled.div`
  
  max-width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;
  flex-wrap: wrap;
`

const NftBox = styled.div`
  border-radius: 16px;
  border: 2px solid #fff;
  min-height: 200px;
  width: 400px;
  margin-top: 25px;
`

const HolderForm = styled.form`
  margin-top: 50px;
  max-width: 100vw;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  background-color = 'red';
  color: #dba034;
`

const HolderInput = styled.input`
  width: 100%;
  margin: 10px;
  height: 30px;
  font-family: 'Archivo', sans-serif;
  font-size: 15px;
  font-color:red;
`


function Nft() {

  const Address = useAddress()
  const conradAddress = "0x4747C0Be5ae1552BABF006C681B982c791613116";
  const { contract } = useContract(conradAddress, abi);
  const {data} = useOwnedNFTs(contract, Address);
  
  const [status, setStatus] = useState("Submit");
  
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, walletAddress } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      wallet: walletAddress
    };
    console.log('wallet address')
    console.log(walletAddress)
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  useEffect(() => console.log(data), [data]);

  function RenderDownload(song) {
    if (song === "God Save the Queen") {
      return (
        <>
        <a href={GSTQAI} download>Click here to download the AI Video to your device</a>
        <br/>
        <br/>
        <a href={GSTQSPIN} download>Click here to download the NFT Video to your device</a>
  {/*      <br/>
        <br/>
        <a href={GSTQPIC} download>HD Still Download</a>*/}
        </>
        
      )
    } else if (song === "Make Me a Believer") {
      return (
        <>
        <div><a href={MMABAI} download>Click here to download the AI Video to your device</a></div>
        <br/>
        <br/>
        <div><a href={MMABSPIN} download>Click here to download the NFT Video to your device</a></div>
   {/*     <br/>
        <br/>
      <div><a href={MMABPIC} download>HD Still Download</a></div> */}
        </>
      )
    }
  }


  return (
    <div className="howToPage" style={{backgroundColor: '#000', Color: '#dba034'}}>
      <SmallSpacer/>
      <NftGrid className="nftGridSection">
      {data?.map((nft) => (
        <NftBox className="nftBoxSection" key={nft.metadata.id.toString()}>
          <h3 className="nftMediaLabel" style={{backgroundColor: '#000', Color: '#dba034'}}>{nft.metadata.attributes[0].value} NFT #{nft.metadata.id}</h3>
          <MediaRenderer className="nftMediaDisplay"
            key={nft.metadata.id}
            src={nft.metadata.ai_url} 
            style={{width: '100%',height: '300px',borderRadius: '15px', border: '2px solid #000'}}
            />
            <MediaRenderer className="nftMediaDisplay"
            key={nft.metadata.id}
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

      <HolderForm  onSubmit={handleSubmit}>

<div className="nftGridSection">
      <div className="nftHolderFormSectionContainerTest">
  
                                <div className='nftHolderFormCardInfo'> 

        <h2>Sign Up For More Benefits</h2>
        <SmallSpacer/>
        <div>
          <label htmlFor="name" ><p style={{Color: '#dba034'}}>Name:</p></label>
          <HolderInput type="text" id="name" required style={{backgroundColor: '#dba034'}}/>
        </div>
        <div>
          <label htmlFor="email" style={{Color: '#dba034'}}><p style={{Color: '#dba034'}}>Email:</p></label>
          <HolderInput type="email" id="email" required style={{backgroundColor: '#dba034'}}/>
        </div>
        
    {/*    <div>
          <label htmlFor="phone" style={{Color: '#dba034'}}><p style={{Color: '#fff'}}>Phone:</p></label>
          <HolderInput type="text" id="phone" required style={{backgroundColor: '#dba034'}}/>
        </div>
        <div>
          <label htmlFor="address" style={{Color: '#dba034'}}><p style={{Color: '#dba034'}}>Address:</p></label>
          <HolderInput type="text" id="address" required style={{backgroundColor: '#dba034'}}/>
      </div> */}
      <TinySpacer/>
        <button className="submitButtonStyle" type="submit">{status}</button>

        <TinySpacer/>

        </div> </div>
</div>
      </HolderForm>

    </div>
  )
}

export default Nft