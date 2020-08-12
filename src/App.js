import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import About from "./components/About";
// import Contact from "./components/Contact/Contact";
// import Footer from './components/Footer/Footer';
import Portfolio from "./components/Portfolio";
import "./App.css"
import PortfolioHeader from "./components/PortfolioHeader";
// import Project from "./components/Project/Project";

function App() {
  return (
    <>
    <PortfolioHeader />
      <Portfolio />
      </>
  );
}

export default App;