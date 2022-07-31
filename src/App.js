import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter, useHistory } from "react-router-dom";

import React, { useEffect, createContext, useReducer, useContext } from "react";
import Home from "./Home.js";
import Signup from "./Signup";
import Login from "./Login";
import Article from "./Article";
import "./App.css";
import Admin from "./Admin";
import mypost from "./MyPost";

export const UserContext = createContext();
const App = () => {
  return (
    <>
      <div className="Content">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Article" element={<Article />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />{" "}
      </div>
    </>
  );
};

export default App;
