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
      ]
    };
  
  }
  render() {
    return <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.searchResults} />
            <PlayList searchResults={this.state.searchResults} />
          </div>
        </div>
    </div>
  }
}

export default App;
