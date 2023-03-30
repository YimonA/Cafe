import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
//import Card from "./components/Card";
import Home from "./components/Home";
import Members from "./components/Members";
import Nav from "./components/Nav";
import About from "./components/About";
import AllCoffee from "./components/AllCoffee";
import AddMember from "./components/AddMember";

const App = () => {
  return (
    <div className=" container mx-auto h-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allcoffee" element={<AllCoffee />}></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/addmember" element={<AddMember />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
