import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./list.json";
import "./AlphabeticalList.css";

const words = data.words;

function compareWords(a, b) {
  const wordA = a.word.toLowerCase();
  const wordB = b.word.toLowerCase();

  if (wordA.match(/^[^a-z]/)) {
    if (wordB.match(/^[^a-z]/)) {
      return wordA.localeCompare(wordB);
    } else {
      return 1;
    }
  } else if (wordB.match(/^[^a-z]/)) {
    return -1;
  } else {
    return wordA.localeCompare(wordB);
  }
}

words.sort(compareWords);

const AlphabeticalList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredWords, setFilteredWords] = useState(words);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    const filtered = words.filter((word) =>
      word.word.toLowerCase().includes(value) || 
      word.description.toLowerCase().includes(value)
    );
    setFilteredWords(filtered);
  };
  

  return (
    <main className="alphabeticalList">
      <nav className="link">
        <Link to="/categories">Switch to categories list</Link>
      </nav>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search"
        className="search"
      />
      <ul>
        {filteredWords.map((word, index) => (
          <li key={index} className="word">
            <input
              type="checkbox"
              id={`check${index}`}
            />
            <label
              className="tab-label"
              htmlFor={`check${index}`}
            >
              {word.word}
            </label>
            <div className="tab-content">{word.description}</div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AlphabeticalList;
