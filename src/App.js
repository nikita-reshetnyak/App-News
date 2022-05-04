import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NewsList from './components/NewsList/NewsList';
import NewsDetail from './components/NewsDetail/NewsDetail'
import Contacts from './components/Contacts/Contacts';
import './styles/global.scss';
import './styles/nullstyle.scss';
import axios from 'axios';
import Footer from './components/Footer/Footer';

const App = () => {
  
  const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-04&sortBy=publishedAt&apiKey=fb5c23072deb43649d5460fb803d6c15';
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(requestUrl);
        updateData(response.data.articles)
      }
      fetchData()
    }, [])
    return data
  }

  const result = useFetch();


  return (
    <div className="App">
      <Header />
      <Route path="/" exact render={() => <Home news={result} />} />
      <Route path="/NewsList" exact render={() => <NewsList news={result} />} />
      <Route path="/Contacts" exact component={Contacts} />
      <Route path="/NewsList/:name" exact component={NewsDetail} />
      <Footer />
    </div>

  );
}

export default App;
