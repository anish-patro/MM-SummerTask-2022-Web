import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Admin from "./Admin.js";
import Articles from "./Articles";
const App=()=> {
  return (
    <>   
       
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path="/Home" element={<Home/>}></Route>
          <Route  path="/articles" element={<Articles />} ></Route>
          <Route  path="/Admin" element={<Admin />} />
        </Routes>
       
      </BrowserRouter>    
      <Footer/>
      </>
  );
}

export default App;
