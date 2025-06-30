import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./actions";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleAddBook = () => {
    dispatch(addBook(title, author, isbn));

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={isbn}
        placeholder="ISBN"
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
