import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Contact from 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </Router>
  );
}

export default App;