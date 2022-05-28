import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Admin from "./Admin.js";
import Signup from "./Signup";
import Login from "./Login";
import { Container } from "@mui/system";

const App=()=> {
  return (
    <>   
       
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/Home" element={<Home/>}></Route>     
          <Route  path="/Admin" element={<Admin />} />
          
        </Routes>
       
      </BrowserRouter> 
      <Container>
        <BrowserRouter>    
        <Routes>
          <Route  path="/Signup" exact component={<Signup/>}></Route>
          <Route  path="/Login" element={<Login/>}></Route>            
        </Routes>     
      </BrowserRouter>    
      </Container>   
      <Footer/>
      </>
  );
}

export default App;
