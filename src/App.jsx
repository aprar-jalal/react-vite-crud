import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from './page/home/Home';
import About from './page/about/About'
function App() {
  return ( <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
