import React from 'react'
import { Bod, HeroH1, BorderSpacer, BodyLogo, VideoBg, SpacerOne, HeroP, TextWrapper, Heading, Heading2, Subtitle, MintInfo, ScrollContainer, BodyColumn1, BodyColumn2, BodyColumn4, BodyColumn5, GifSpacer, NftGif, FiftySpacer } from './MintBodyElements'
import { RouteButton } from '../ButtonElement'
import Image from '../../images/conradImage.png'
import MetaLogoImage from '../../images/Metamask-icon.svg'
import EthLogoImage from '../../images/EthereumLogo.png'
import Video1 from '../../images/Video.mov'






const MintBody = () => {



  return (
    <>
    <ScrollContainer>
      <HeroH1>
        Conrad Sewell NFT Collection
      </HeroH1>
      <HeroP>
          God Save the Queen | Pre-Album single NFT Drop

      </HeroP>
      <VideoBg autoPlay loop muted src={Video1} type='video/mp4' />

    </ScrollContainer>
    <MintInfo id="mint">
      <BodyColumn1>
        <TextWrapper>
          <Heading>Info</Heading>
          <FiftySpacer/>
          <FiftySpacer/>     
        </TextWrapper>
        <TextWrapper>
          <Heading2>What is an NFT?</Heading2>
          <Subtitle>
           NFT Stands for non-fungible token, 
           a digital token that can be minted, 
           bought and sold. These tokens can 
           represent various mediums of art, 
           and can hold utility for holders. 
           <br/><br/>NFTs use blockchain technology to 
           prove ownership of 1 or more limited
           tokens and can be redeemed for real 
           life experiences, merchandise and access 
           to events or communities.  
          </Subtitle>

          <Heading2>Safety</Heading2>
          <Subtitle>
           The Conrad Sewell NFT Collection is ONLY mintable through the official website, and then traded on secondary markets such as <a href="https://www.opensea.io" target="_blank" rel="noopener noreferrer" style={{color: '#8e2563'}}> Opensea.io </a>  and <a href="https://looksrare.org/" target="_blank" rel="noopener noreferrer" style={{color: '#8e2563'}}> Looksrare.org </a>  
          </Subtitle>

          <Subtitle>
           NEVER share your Cryptocurrency exchange account information, your wallet seed phrase or private key with anybody.  
          </Subtitle>

          <Subtitle>
           Conrad or any team members will NEVER reach out directly to ask for any exchange information or seed phrase/private keys.  
          </Subtitle>

          <Subtitle>
           Official Announcements regarding the NFT Collection will be posted on Conrad's official social media accounts, the website and official community discord.  
          </Subtitle>

          <Subtitle>
           There will be no surprise drop collections or limited sales for the NFT Collection, make sure to only mint from the official website or buy from the official secondary NFT Marketplace websites.   
          </Subtitle>
          
          <RouteButton to='/info'>NFT Help Guide</RouteButton>



        </TextWrapper>
      </BodyColumn1>
      <BodyColumn2> 
        <TextWrapper>
        <Heading>How Do I Get a Conrad Sewell NFT?</Heading>     
        </TextWrapper>
        <BodyLogo src={MetaLogoImage} />
        <TextWrapper >
        
          <Heading2>  Download and install <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" style={{color: '#8e2563'}}> MetaMask </a></Heading2>
          
          
          <Subtitle>
            Download and install a Chrome browser plugin called MetaMask. This will allow websites access to your Ethereum account. If you are on mobile, download the MetaMask application and use the in-built browser for wallet connections.
          </Subtitle>           
        </TextWrapper>
        <BodyLogo src={EthLogoImage}/> 
        <TextWrapper>
        
          <Heading2>Buy Ethereum $ETH to Mint Your NFTs</Heading2>  
          
          <Subtitle>
          If you made a new account, buy some Ethereum either through Metamask or a Centralised Cryptocurrency Exchange such as 
          <a href="https://swyftx.com/au/" target="_blank" rel="noopener noreferrer" style={{color: '#8e2563'}}> Swyftx </a>
            or  
          <a href="https://www.coinspot.com.au/" target="_blank" rel="noopener noreferrer" style={{color: '#8e2563'}}> Coinspot</a>. You need Ethereum to make transactions on the Blockchain as well as mint costs of each NFT.
          </Subtitle>          
        </TextWrapper>

        <TextWrapper>
          <Heading2>Connect Wallet to Minting site or Marketplace</Heading2>   
          <Subtitle>
          Wallet connections allow users to use $ETH to mint and buy NFTs and send transactions to list them as auctions or fixed price sales.
          </Subtitle>          
        </TextWrapper>

        <TextWrapper>
          <Heading2>Start Trading, Collecting and Selling Your NFTs</Heading2>   
          <Subtitle>
          Once you have recieved your newly minted Conrad Sewell NFTs, you can buy/sell and trade on various third party token exchanges such as Opensea and Looksrare. Transactions on the blockchain are immutable and non-refundable so make sure to double check any listings/sales you are involved in on these sites.
          </Subtitle>          
        </TextWrapper>
      </BodyColumn2>
    </MintInfo>
    <SpacerOne/>
    <BorderSpacer/>
    <SpacerOne/>
    
    <Bod>
      <BodyColumn4>
        <GifSpacer/>
        <NftGif src={Image}/>
      </BodyColumn4>
      <BodyColumn5>
      <TextWrapper>
          <Heading2>What are the Benefits for Fans?</Heading2>   
          <Subtitle>
          In the new digital age of music where fans are less connected to artists, comes Conrad's first NFT release.  A new way for fans to connect with Conrad and experience a personalised expression of Conrad’s new album through an AI generated custom visual effect for each song on the album.
          <br/>
          <br/>
          A limited release of the NFT songs will mean your experience remains exclusive, with collectors receiving special bonus content, privileges and unprecedented VIP access to Conrad. 
          <br/>
          <br/>
          Collect, trade and become part of the Digital world.
          </Subtitle>          
        </TextWrapper>
      </BodyColumn5>
    </Bod>
    </>
  )
}

export default MintBody