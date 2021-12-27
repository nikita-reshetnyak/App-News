
import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import NewsFilter from "../NewsFilter/NewsFilter";
import { NavLink } from "react-router-dom";


const Home = props => {

   return (
      <section className="news-block">
         <div className="container">
            <div className="title-block">
               <h1 className="main-title">Всегда <br /> свежие <span style={{ color: '#004FEC' }}>новости</span></h1>
            </div>
            <div className="news-wrapper">
               <NewsFilter news={props.news} number={6} />
            </div>
            <div className="enchorToNews">
               <NavLink className="navigation-link" exact to="/NewsList">Быть в курсе событий</NavLink>
            </div>
         </div>
      </section>
   )
}
export default Home;