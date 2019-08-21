import React, { Component } from 'react';
import ArtistList from './../ArtistList/ArtistList.js';

class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <ArtistList />
      </div>
    );
  }
}

export default Home;