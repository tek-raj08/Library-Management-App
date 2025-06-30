import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "./actions";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleRemove = (bookIsbn) => {
    dispatch(removeBook(bookIsbn));
  };

  return (
    <div>
      <h2>Library Summary</h2>
      <h5>Total Books: {books.length}</h5>
      <ul>
        {books.map((book) => (
          <li key={book.isbn} style={{ padding: "10px 0" }}>
            {book.title} by {book.author} (ISBN: {book.isbn}){" "}
            <button onClick={() => handleRemove(book.isbn)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibrarySummary;
