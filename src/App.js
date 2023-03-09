import "./App.css";
import React, { useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4500);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="wrapper">
            <Navbar />
            <Home />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
