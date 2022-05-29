import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Signup from "./Signup";
import Login from "./Login";

import './App.css';
const App=()=> {
  return (
    <>   
       <div className="Content">
       {/* <img src={background_image} className="blur_image" alt="blur_image" /> */}
      <BrowserRouter>

      <Header/>

        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/Home" element={<Home/>}></Route>     
          <Route  path="/Signup" element={<Signup/>}></Route>
          <Route  path="/Login" element={<Login/>}></Route>

        </Routes>
       
      </BrowserRouter> 
     
      <Footer/> </div>
      </>
  );
}

export default App;
