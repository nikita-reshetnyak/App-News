import React from "react";
import imgSrc from './img/me.jpeg'
import './contacts.scss'

const Contacts = () => {
   return (
      <section className="contacts">
         <div className="container">
            <div className="contacts-wrapper">
               <div className="contacts__info">
                  <div className="title-block">
                     <h1 className="main-title color-blue">+7918-492-02-65</h1>
                  </div>
                  <div className="conatcts-personalData">
                     <div className="name">
                        <div className="fullName">Решетняк <br />Никита</div>
                     </div>
                     <div className="email">
                        reshetnyaknikita6@gmail.com
                     </div>
                  </div>
                  <div className="skills">
                     <p>JavaScript разработчик</p>
                     <p>ES5, ES6, <span>React</span></p>
                  </div>

               </div>
               <div className="contacts__image">
                  <div className="block__image">
                     <img className="personal-img" src={imgSrc}></img>
                  </div>
               </div>
            </div >
         </div>
      </section>


   )
}
export default Contacts;