import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); //NEW: track if user searched

  const searchBooks = async (title) => {
    if (!title) return;
    setLoading(true);
    setSearched(true); //user has searched
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 20)); // show only first 20 results
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]); // in case of error, empty list
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} />

      {loading && <p>Loading...</p>}

      {/* Only show BookList after searching */}
      {!loading && searched && <BookList books={books} />}
    </div>
  );
}

export default App;
