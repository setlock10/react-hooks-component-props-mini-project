import React from "react";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"
import blogData from "../data/blog";



function App() {
console.log(blogData);

  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
