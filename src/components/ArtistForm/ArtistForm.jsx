import React, { Component } from 'react';
import { connect } from "react-redux";

class ArtistForm extends Component {
  state = { 
    id: 3,
    name: '',
   }

   handleChange = (event)=>{
     this.setState({
       id: this.state.id + 1,
       name: event.target.value
     })
   }

   handleSubmit = () => {
    let action = {
      type: 'ADD_ARTIST',
      payload: this.state
    }
    this.props.dispatch(action);
    this.setState({
      id: this.state.id,
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