import React from "react";

function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
      <p><strong>First Published:</strong> {book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookCard;
