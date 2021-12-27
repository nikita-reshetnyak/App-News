import React from "react";
import NewsItem from "../NewsItem/NewsItem";

const NewsFilter = props => {

   return (
      props.news && props.news.filter((item, index) => {

         return index < props.number;
      }).map((item, index) => {
         return (
            <NewsItem
               key={index}
               title={item.title}
               date={item.publishedAt}
               source={item.source.name}
               description={item.content}
               image={item.urlToImage}
            />

         )
      })
   )
}



export default NewsFilter;