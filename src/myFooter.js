import React from 'react'
import    './ContentPages.css';
import    './App.css';
import openseaOrange from './img/openseaOrange1.png';


const myFooter = () => {
       return (

                <div className="myFooter">
                     <h1>  </h1>
                    
                     <p className="footerLinks">
                     <a href="https://www.youtube.com/conradofficial" alt="Youtube" title="Youtube" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                     <a href="https://open.spotify.com/artist/1rw8ZTLnDHd74TWDDukjVi"  alt="Spotify" title="Spotify" target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify"></i></a>
                     <a href="https://www.twitter.com/conradofficial"  alt="Twitter" title="Twitter" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                     <a href="https://www.instagram.com/conradofficial"  alt="Instagram" title="Instagram" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                     <a href="https://www.facebook.com/ConradOfficial"  alt="Facebook" title="Facebook" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                     <a href="https://www.tiktok.com/@conradofficial"  alt="TikTok" title="TikTok" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                     <a href="https://discord.gg/KnKRdBU85n"  alt="Discord" title="Discord" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                     <a href="https://opensea.io/"  alt="Opensea" title="Opensea" target="_blank" rel="noreferrer"><img id="openseaIcon" src={openseaOrange}></img></a>
                     

                     </p>

              </div>

       )
}

export default myFooter