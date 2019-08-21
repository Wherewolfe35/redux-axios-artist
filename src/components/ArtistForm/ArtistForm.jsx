import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class ArtistForm extends Component {
  state = { 
    name: '',
   }

   handleChange = (event)=>{
     this.setState({
       name: event.target.value
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
       });
     }).catch((error)=>{
       console.log(error);
     });
    this.setState({
      name: ''
    })
   }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Name'
        onChange={this.handleChange}
        value={this.state.name}/>
        <button>Add Artist</button>
      </form>
     );
  }
}
 
export default connect()(ArtistForm);