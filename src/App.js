import React , { Component } from 'react';
import './App.css';
import NewsFeed from './NewsFeed/NewsFeed';

class App extends Component {
  render(){
    return(
      <div>
        <NewsFeed/>
      </div>
    );
  }
}

export default App;
