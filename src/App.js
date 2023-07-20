import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import React from "react"
import "./App.css"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
 import Home from "./Components/Pages/Home/Home"
import Blog from "./Components/Pages/Blog/Blog"
import Features from "./Components/Pages/Features/Features"
import Prices from "./Components/Pages/Prices/Prices"
import Resources from "./Components/Pages/Resources/Resources";
import OurOffers from "./Components/Pages/Our Offers/OurOffers"

function App() {
  return (
    <>
    
      <Router>
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/OurOffers" element={<OurOffers/>} />
           <Route path="/Resources" element={<Resources/>} />
            <Route path="/Prices" element={<Prices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Features" element={<Features />} />
           
          </Routes>
         
        <Footer/> 
      </Router>
  </>
  );
}

export default App;