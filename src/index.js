import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


import    './index.css';
import    './ContentPages.css';

 const desiredChainId = ChainId.Goerli; 

/*const activeChainId = ChainId.Mainnet;*/



ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={desiredChainId}>
    
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


