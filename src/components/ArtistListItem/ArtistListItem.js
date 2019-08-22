// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

class ArtistListItem extends Component {
    deleteArtist = () => {
        console.log(this.props.artist.id);
        
        axios({
            method: 'DELETE',
            url: `/artist/${this.props.artist.id}`,
        }).then((response) => {
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
    })
}

    render() {
        return (
            <tr>
                <td>{this.props.artist.name} <span></span>
                ({this.props.artist.birthyear}-{this.props.artist.deathyear})</td>
                <td><button onClick={this.deleteArtist}>DELETE</button></td>
            </tr>
        );
    }
}

export default connect()(ArtistListItem);