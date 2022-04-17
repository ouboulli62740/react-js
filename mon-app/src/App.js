import { useState } from "react";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log({searchField});
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder="search monsters" handleChange={onSearchChange} />
      {/*<CardList monsters={filteredMonsters} />*/}
    </div>
  );
};

export default App;
