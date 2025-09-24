import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./page/home/Home";
import About from "./page/about/About";
import AllUsers from "./page/user/AllUsers";
import Details from "./page/user/Details";
import Create from "./page/user/Create";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-4 mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Allusers" element={<AllUsers />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/createUser" element={<Create/>}/>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
