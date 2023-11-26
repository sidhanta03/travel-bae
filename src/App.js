
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Destination from "./Component/Destination";
import Report from "./Component/Report";
import Italy from "./Component/Italy";
import Tokyo from "./Component/Tokyo";
import Bali from "./Component/Bali";
import Rome from "./Component/Rome";
import Footer from "./Component/Fotter";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/italy" element={<Italy />} />
        <Route path="/destination/Tokyo" element={<Tokyo />} />
        <Route path="/destination/Bali" element={<Bali />} />
        <Route path="/destination/rome" element={<Rome />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

