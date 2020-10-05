import React, { useState } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

function App() {
  const [currentAuthor, setCurrentAuthor] = useState(null)
  const [searchResults, setSearchResults] = useState(authors);
  const selectAuthor = author => {
    setCurrentAuthor(author)
  }
  const deselectAuthor = () => {
    setCurrentAuthor(null)
  }
  const filterAuthors = query => {
    const results = authors.filter(author =>
        author.first_name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    console.log(query)
    console.log(searchResults)
  }
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar deselectAuthor={deselectAuthor}/>
        </div>
        <div className="content col-10">
          {currentAuthor == null ?
              <AuthorList authors={authors} selectAuthor={selectAuthor} filterAuthors={filterAuthors} searchResults={searchResults}/>
              : <AuthorDetail currentAuthor={currentAuthor}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
