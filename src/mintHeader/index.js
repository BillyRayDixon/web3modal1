import React from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
} from './mintHeaderStyles';
import Image from '../../images/ConradSewell_DistressedLogoYELLOWCropped.png'
import { ConnectWallet } from '@thirdweb-dev/react';


const MintHeader = () => {
  return (
    
        <Nav>
            <NavbarContainer>
            
                <NavLogo src={Image} />
              
                <ConnectWallet 
                accentColor='#dba034'/>
            </NavbarContainer>
        </Nav>
    
  )
}

export default MintHeader;