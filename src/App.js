import "./App.css";
import React, { useState } from "react";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </BrowserRouter>
          </div>
        </>
      )}
    </>
  );
}

export default App;
