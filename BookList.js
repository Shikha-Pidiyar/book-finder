import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (books.length === 0) {
    return <p>No books found. Try searching something else.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
