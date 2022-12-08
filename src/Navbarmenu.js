import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FaTimes, FaBars } from "react-icons/fa";
import CSNFTlogo from './img/CSNFT.svg';

  
import    './Navbarmenu.css';
import    './ContentPages.css';

 
    
    const Navbarmenu = () => {
    


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
                                               
                    <NavLink to="./Home">
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


                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Home`}>HOME</NavLink> </li>
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Faq`}>FAQ</NavLink> </li>
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./Howto`}>HOW TO BUY</NavLink> </li>  
                            <li className="menu-item" ><a href="https://discord.gg/QgUafNvm" target="_blank" rel="noreferrer">JOIN OUR DISCORD</a></li> 
                            <li className="menu-item" ><NavLink onClick={toggleClass} to={`./BuyNFT`}>BUY NFT</NavLink> </li>                       </ul>
                    </nav>        
                </div>
    </header>
    );
}
    export default Navbarmenu;



