import React from "react";
import { useLocation } from 'react-router-dom';
import { getDay, getMounth } from "../../ChangeTime/ChangeTime";
import './newsDetail.scss'

const NewsDetail = props => {
  
   let location = useLocation();
   const day = getDay(props.location.state[0]);
   const mounth = getMounth(props.location.state[0]);
   return (
      <section className="detailPage">
         <div className="container">
            <div className="detailPage__wrapper">
               <div className="detailPage-left">
                  <div className="title-block">
                     <h1 className="main-title ">{props.location.state[4]}</h1>
                  </div>
                  <div className="detailPage-left-source">{props.location.state[3]}</div>
                  <div className="news-date detailPage__date-margin">
                     <span className="day">{day}</span>
                     <span className="mounth">{'/'} {mounth}</span>
                  </div>

               </div>
               <div className="detailPage-rigth">
                  <div className="detailPage-right__image">
                     <img className="detailPage-right-img" src={props.location.state[2]}></img>
                  </div>
                  <div className="detailPage-rigth-description">
                     {props.location.state[1]}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default NewsDetail;