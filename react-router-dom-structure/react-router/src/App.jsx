import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Layout from "./Layout.jsx";
function App() {
  const [count, setCount] = useState(0);
  // route child making concept
  // to build a tree like structure+
  // index element to set a default home page
  return (
    <Routes> 
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
