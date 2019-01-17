import React, { Component } from 'react';
import ArtistListItem from './ArtistListItem.js';

class ArtistList extends Component {
    createArtistList() {
        let artistListForDom = [];
        for(let i = 0; i < this.props.artistList.length; i += 1) {
            let artist = this.props.artistList[i];
            let artistRow = (<ArtistListItem key={i} refreshArtists={this.props.refreshArtists} artist={artist} />);
            artistListForDom.push(artistRow);
        }
        return artistListForDom;
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                <table>
                    <tbody>
                        {this.createArtistList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ArtistList;