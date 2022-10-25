import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Juices from "./Juices";
import Feedback from "./Feedback";
import "./Navbar.css";

const Navbar = () => {
  return (
    <BrowserRouter>
    <div className="logo">
      <span>Nutrition Jungle</span>
    </div>
          <nav className='Navbar'>
            <Link to="/" className="a">Home</Link>
            <Link to="/Veg" className="a">Veg</Link>
            <Link to="/NonVeg" className="a">Non-Veg</Link>
            <Link to="/Juices" className="a">Juice</Link>
            <Link to="/Feedback" className="a">Contact</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Veg' element={<Veg/>}/>
            <Route path='/NonVeg' element={<NonVeg/>}/>
            <Route path='/Juices' element={<Juices/>}/>
            <Route path='/Feedback' element={<Feedback/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default Navbar