// App.js

import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from "../Home/Home";
import { connect } from "react-redux";

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  }
  
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      console.log(response);
      // response.data will be the array of artists
      let action = {
        type: 'SET_ARTISTS',
        payload: response.data,
      }
      this.props.dispatch(action);
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>List of Artists</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <br/>
          <Route exact path='/' component={Home} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
