import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookForm from "./BookForm";
import LibrarySummary from "./LibrarySummary";

function App() {
  return (
    <>
      <div>
        <h1>Library Management</h1>
        <BookForm />
        <LibrarySummary />
      </div>
    </>
  );
}

export default App;
