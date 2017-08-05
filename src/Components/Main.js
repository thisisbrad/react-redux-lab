import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {<Link to="/"> <span role="img" aria-label="camera">📸</span> Redux Photo Gallery </Link>}
          </h2>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
  }
}

export default App;
