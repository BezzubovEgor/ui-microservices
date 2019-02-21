import React, { Component } from 'react';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="container">
                <div id="microservice-content"></div>
              </div>
            </div>
            <div className="col-3"><div id="vue-service"></div></div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
