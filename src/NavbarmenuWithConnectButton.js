import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FaTimes, FaBars } from "react-icons/fa";
import CSNFTlogo from './img/CSNFT.svg';
import { useEffect } from 'react';
import { ConnectWallet, useAddress, useNetwork, useNetworkMismatch, ChainId } from "@thirdweb-dev/react";
 
import    './Navbarmenu.css';
import    './ContentPages.css';

    let connectedToAWallet = false;
    
    const Navbarmenu = () => {
    
    const myAddress = useAddress();
    let myNewAddress = String(myAddress);
    let myNewAddressLength = myNewAddress.length;
    if (myNewAddressLength === 42) {
        connectedToAWallet = true;
    } 

    const [, switchNetwork] = useNetwork();
    const isWrongNetwork = useNetworkMismatch();

    useEffect(() => {
        if (isWrongNetwork && switchNetwork) {
            switchNetwork(ChainId.Goerli);
            }
        }, [myAddress, isWrongNetwork, switchNetwork]); 


        const [isMenu, setisMenu] = useState(false);
        const [isResponsiveclose, setResponsiveclose] = useState(false);
        const toggleClass = () => {
          setisMenu(isMenu === false ? true : false);
          setResponsiveclose(isResponsiveclose === false ? true : false);
            };
    
        let menuVisibility = ["main-menu menuNotVisible"]; /* so the menuq1 state is no side menu, and the menuq2 state is to display the popup */
        if(isMenu) {
            menuVisibility.push('menuIsVisible');
        }else{
            menuVisibility.push('');
        }


    return (
    <header className="conradHeader"> {/* contains the logo(s) and the definition for the hidden menu and the hamburger icon  */}

                
                {/* Add Logos  */}

                <p className="conradLogoContainer">
                                               
                    <NavLink to="/">
                        <img className='conradLogoSmall' src={CSNFTlogo} alt="logo" /> 
                    </NavLink>
                
                </p>


  

                <div className="hamburgerContainer">
                    <nav className="main-nav" >
                        <div className="hamburgerIcon">
                        {/* Responsive Menu Button */}
                        {isResponsiveclose === true ? <>  
                            <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FaTimes />   </span>
                            </> : <> 
                            <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FaBars />   </span>
                        </>}
                        </div> {/* end of hamburgerIcon definition */}


                        <ul className={menuVisibility.join(' ')}>
                        <li className="menu-item" >
                            <button className="connectButtonButton"> 
                                <ConnectWallet 
                                    className="connectWalletButton" 
                                    colorMode="dark"
                                    accentColor={isWrongNetwork ? "red" : "transparent"}
                                    display="display"
                                    header="header"
                                    li="thisLi"
                                    menuVisibility="none"
                                    span="metaSpan"
                                    onClick={toggleClass}  
                                    to={`./Howto`} >
                                </ConnectWallet> 
                                </button> 
                            </li> 
{/* is ok                             <li className="menu-item" ><NavLink style={isWrongNetwork ? {display:'none'} : {display:'block'}} onClick={toggleClass} to={`./BuyNFT`}>***Buy NOW***</NavLink> </li> */}
                            <li className="buyNFTmenuItem menu-item ">
                                <NavLink 
                                    style={!connectedToAWallet ? {display:'none'} : {display:'block'}}
                                   
                                    onClick={toggleClass} 
                                    to={`./BuyNFT`}>
                                    {!isWrongNetwork ? 'BUY NFT NOW' : 'Connect to Goerli'}
                                </NavLink> 
                            </li>
         
         
   {/* is ok                           style={isWrongNetwork ? {display:'none'} : {display:'block'}}      */}      
         
                {/*            <li className="menu-item" ><NavLink style={isAddress ? {display:'block'} : {display:'none'}} onClick={toggleClass} to={`./BuyNFT`}>{myAddress}</NavLink> </li> */}
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./About`}>ABOUT THE NFT</NavLink> </li>
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Faq`}>FAQ</NavLink> </li>
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Howto`}>HOW TO BUY</NavLink> </li>  
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Discord`}>JOIN DISCORD</NavLink> </li> 
                {/*}            {(isWrongNetwork ? style={{display:'none'}} : style={{display:'block'}})} */ }
                        </ul>
                    </nav>        
                </div>
    </header>
    );
}
    export default Navbarmenu;



