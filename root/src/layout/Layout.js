import React, { Component } from 'react';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className="container">
          <div id="microservice-content"></div>
          <div id="vue-service"></div>
        </div>
      </>
    );
  }
}

export default App;
