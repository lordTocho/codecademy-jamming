import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { PlayList } from '../PlayList/Playlist';

class App extends React.Component {
  constructor(props) {
    super( props ) 
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Jane Doe",
          artist: "Artist",
          album: "Album 1",
        }
      ],
      playlistName: "Metal",
      playlistTracks: [
        {
          id: 1,
          name: "Metal Doe",
          artist: "Metal Smith",
          album: "Metal Album"
        },
        {
          id: 2,
          name: "Metal Doe2",
          artist: "Metal Smith2",
          album: "Metal Album2"
        },
        {
          id: 3,
          name: "Metal Doe3",
          artist: "Metal Smith3",
          album: "Metal Album3"
        }
      ]
    };

    this.addTrack =  this.addTrack.bind(this); 
  
  } // end of constructor
  addTrack(track) {
    console.log( `Determining if ${track.id} is in the Playlist...` )
    if( this.state.playlistTracks.find( findTrack => findTrack.id === track.id ) ) {
      console.log( `Track found.` )
    }
      console.log( `track not found. adding track id ${track.id} track artist ${track.artist} track album ${track.album}` )
      return this.state.playlistTracks.push( track )
  }
  render() {
    return <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList searchResults={this.state.searchResults} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
  }
}

export default App;
