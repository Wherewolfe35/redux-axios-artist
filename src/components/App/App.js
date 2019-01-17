import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <br/>

      </div>
    );
  }
}

export default App;
