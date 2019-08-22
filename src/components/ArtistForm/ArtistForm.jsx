import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class ArtistForm extends Component {
  state = { 
    name: '',
    birthyear: '',
    deathyear: ''
   }

   handleChange = (event)=>{
     let action = {
       type: 'ARTIST_INPUT',
       payload: event.target.value
     }
     this.props.dispatch(action);
     this.setState({
       name: event.target.value
     })
   }

   yearChange = (event, propertyName) => {
     this.setState({
       ...this.state,
       [propertyName]: event.target.value
     })
   }

   handleSubmit = () => {
     axios.post('/artist', this.state)
     .then((response)=>{
       console.log(response);
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
         action = {
           type: 'CLEAR',
         }
         this.props.dispatch(action);
       });
     }).catch((error)=>{
       console.log(error);
     });
    this.setState({
      ...this.state,
      birthyear: '',
      deathyear: ''
    })
   }

  render() { 
    console.log(this.state);
    
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Name'
        onChange={this.handleChange}
        value={this.props.reduxStore.artistInput}/>
        <input placeholder="birth(yyyy)" 
        onChange={(event)=>this.yearChange(event, 'birthyear')}
        value={this.state.birthyear}/>
        <input placeholder="death(yyyy)" 
          onChange={(event) => this.yearChange(event, 'deathyear')}
          value={this.state.deathyear}/>
        <button>Add Artist</button>
      </form>
     );
  }
}

const storeToProps = (reduxStore) =>{
  return {
    reduxStore
  }
}

export default connect(storeToProps)(ArtistForm);