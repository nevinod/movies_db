import React from 'react';
import { Route } from "wouter";
import Home from "./components/Home"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import Visualization from "./components/Visualization"
import './App.css';

function App() {
  return (
    <>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/list/:page" component={MovieList} />
        <Route path="/visualize" component={Visualization} />
    </>
  );
}

export default App;
