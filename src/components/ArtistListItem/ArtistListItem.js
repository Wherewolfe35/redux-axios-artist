// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';

class ArtistListItem extends Component {
    deleteArtist = () => {
        axios({
            method: 'DELETE',
            url: `/artist/${this.props.artist.id}`
        }).then((response) => {
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
                <td>{this.props.artist.name}</td>
                <td><button onClick={this.deleteArtist}>DELETE</button></td>
            </tr>
        );
    }
}

export default ArtistListItem;