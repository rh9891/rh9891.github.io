import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Portfolio from "./components/Portfolio";
import Index from "./components/Index"
import "./App.css"

function App() {
  return (
    <Router>
    <Header />
    <div className="myApp">
    <Route exact path="/" component={Index} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;