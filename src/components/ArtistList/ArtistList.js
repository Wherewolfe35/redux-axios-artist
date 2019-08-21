// ArtistList.js

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import { connect } from "react-redux";

class ArtistList extends Component {
    createArtistList() {
        let artistListForDom = this.props.reduxStore.artistReducer
        .map(artist => <ArtistListItem key={artist.id} artist={artist} />);
        return artistListForDom;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.createArtistList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const storeToProps = (reduxStore) => {
    return {
        reduxStore
    };
}

export default connect(storeToProps)(ArtistList);