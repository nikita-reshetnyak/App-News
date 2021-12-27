import React, { useEffect, useState } from "react";
import '../../styles/global.scss';
import '../../styles/nullstyle.scss';
import { getDay, getMounth } from "../../ChangeTime/ChangeTime";
import { withRouter } from "react-router";
import './newsItem.scss'




const NewsItem = props => {

   const day = getDay(props.date);
   const mounth = getMounth(props.date);

   return (
      <div onClick={() => {
         props.history.push('/NewsList/' + props.title, [props.date, props.description, props.image, props.source, props.title])
      }} className="news-item">
         <div className="news-inner">
            <div className="news-item-title">
               <div className="news-name">{props.title}</div>
            </div>

            <div className="news-item-footer">
               <div className="news-item-source">{props.source}</div>
               <div className="news-date">
                  <span className="day">{day}</span>
                  <span className="mounth">{'/'} {mounth}</span>
               </div>

            </div>
         </div>


      </div>
   )
}
export default withRouter(NewsItem);