import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
