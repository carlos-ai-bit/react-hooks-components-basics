import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Article />
      <Comment />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
