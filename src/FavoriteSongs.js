import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'

class FavoriteSongs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            art: ''
        }
    }

getAlbumArt = async () => {
    let art = [];
    let response = this.props.favSongs.map(song => `http://api.napster.com/v2.2/albums/${song.albumId}/images?apikey=`)
    let responseArt = await axios.all(response.map((URL) => axios.get(URL)));
    responseArt.forEach(data => art.push(data.data.images[0].url))
    console.log(art)
    this.setState ({
        art: art
    })
}

componentDidMount(){
    this.getAlbumArt();
}

    favSongsListGenerator = () => {
        let favSongsList = this.props.favSongs.map((song, index) => {
            return <>
            <img src={this.state.art[index]} alt='Album cover'/>
            <p>{song.artist}</p>
            <p>{song.albumName}</p>
            <div>{song.title}</div>
            <Button onClick= {() => {this.props.deleteSong(song._id)}}>X</Button>
            </>

        })
        return favSongsList
    }

    render(){
        return <>
        {this.props.favSongs
        && 
        this.favSongsListGenerator()}
        </>
    }
}

export default FavoriteSongs;