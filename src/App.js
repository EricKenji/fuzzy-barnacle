import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const changePage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {changePage()}
      </main>
    </div>
  )
}

export default App;