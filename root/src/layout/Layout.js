import React, { Component } from 'react';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <div id="microservice-content"></div>
      </>
    );
  }
}

export default App;
