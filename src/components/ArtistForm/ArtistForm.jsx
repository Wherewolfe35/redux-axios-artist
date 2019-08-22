import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class ArtistForm extends Component {
  state = { 
    name: this.props.reduxStore.artistInput.name,
    birthyear: this.props.reduxStore.artistInput.birthyear,
    deathyear: this.props.reduxStore.artistInput.deathyear
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
       default:
         break;
     }
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
        value={this.props.reduxStore.artistInput.name}/>
        <input placeholder="birth(yyyy)" 
        onChange={(event)=>this.yearChange(event, 'birthyear')}
          value={this.props.reduxStore.artistInput.birthyear}/>
        <input placeholder="death(yyyy)" 
          onChange={(event) => this.yearChange(event, 'deathyear')}
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