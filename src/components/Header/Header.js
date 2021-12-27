import React from "react";
import { Route, NavLink } from 'react-router-dom';
import './header.scss'


const Header = () => {

   return (
      <header className="header">
         <div className="container">
            <div className="header-wrapper">
               <div className="logo">
                  <NavLink exact to="/" >Новостник</NavLink>
               </div>

               <nav className="navigation">
                  <ul>
                     <li>
                        <NavLink className="navigation-link" activeClassName={'my-active'} exact to="/">Главная</NavLink>
                     </li>
                     <li>
                        <NavLink className="navigation-link" activeClassName={'my-active'} exact to="/NewsList">Новости</NavLink>
                     </li>
                     <li>
                        <NavLink className="navigation-link" activeClassName={'my-active'} exact to="/Contacts">Контакты</NavLink>
                     </li>
                  </ul>
               </nav>

            </div>
         </div>
      </header>

   )

}
export default Header;



