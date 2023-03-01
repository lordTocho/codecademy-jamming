import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { PlayList } from '../PlayList/PlayList';

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
  
  } // end of constructor
  addTrack(track) {

  }
  render() {
    return <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList searchResults={this.state.searchResults} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
  }
}

export default App;
