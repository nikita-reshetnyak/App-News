import React from "react";
import './footer.scss'
const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer-wrapper">
               <div className="footer__logo">
                  <div className="logo">
                     Новостник
                  </div>
                  <span>Single Page Application</span>
               </div>

               <div className="footer-text">My rigths reserved</div>
               <div className="footer-name">
                  <span>Made by</span>
                  <p>Решетняк Никита</p>
               </div>
            </div>

         </div>
      </footer>
   )
}
export default Footer;