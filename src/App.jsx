import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

// Components
function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])


  return <div>
    <Header>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Header>
    <main>
      Hello
    </main>
    <Footer/>
  </div>
}

export default App;