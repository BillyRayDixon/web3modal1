import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


import   './App.css';
import    './ContentPages.css';

import Home from './Home';
import Faq from './Faq';
import Howto from './Howto';
import BuyNFT from './BuyNFT';
import Discord from './Discord';
import Myfooter from './myFooter';
import Navbarmenu from './Navbarmenu';
import Nft from './Nft'; 


function App() {
  
  return (
   
    <div className="mainDivInApp">
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />

        <div>

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/Howto" element={<Howto />} />
          <Route path="/BuyNFT" element={<BuyNFT />} />
          <Route path="/Discord" element={<Discord />} />
          <Route path="/Nft" element={<Nft />} />

          
        </Routes>

        </div>
        <Myfooter />
      </Router> 

    </div>
    
  );
}

export default App;
