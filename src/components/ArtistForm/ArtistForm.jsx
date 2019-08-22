import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class ArtistForm extends Component {
   
    handleChange = (event, propertyName) => {
     switch (propertyName) {
       case 'birthyear':
         let action = {
           type: 'BYEAR_INPUT',
           payload: event.target.value
         };
         this.props.dispatch(action);
         break;
       case 'deathyear':
         let faction = {
           type: 'DYEAR_INPUT',
           payload: event.target.value
         };
         this.props.dispatch(faction);
         break;
       case 'name':
         let naction ={
           type: 'ARTIST_INPUT',
           payload: event.target.value
         };
         this.props.dispatch(naction);
         break;
       default:
         break;
     }
   }

   handleSubmit = () => {
     axios.post('/artist', this.props.reduxStore.artistInput)
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
   }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Name'
          onChange={(event) => this.handleChange(event, 'name')}
        value={this.props.reduxStore.artistInput.name}/>
        <input placeholder="birth(yyyy)" 
        onChange={(event)=>this.handleChange(event, 'birthyear')}
          value={this.props.reduxStore.artistInput.birthyear}/>
        <input placeholder="death(yyyy)" 
          onChange={(event) => this.handleChange(event, 'deathyear')}
          value={this.props.reduxStore.artistInput.deathyear}/>
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