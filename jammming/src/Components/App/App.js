import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
function App() {

  //  Add a SearchBar component
  // Add a SearchResults component
  //  <!-- Add a Playlist component -->
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
        </div>
      </div>
  </div>
  );
}

export default App;
