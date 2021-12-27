import React from "react";
import NewsFilter from "../NewsFilter/NewsFilter";


const NewsList = props => {
   return (
      <section className="news-list">
         <div className="container">
            <div className="title-block">
               <h1 className="main-title">Быть <br /> в курсе <span style={{ color: '#004FEC' }}>событий</span></h1>
            </div>
            <div className="news-wrapper">
               <NewsFilter news={props.news} number={20} />
            </div>
         </div>
      </section>

   )
}
export default NewsList;