import React from "react";
import { Route } from "wouter";
import Home from "./components/Home";
import MovieListContainer from "./components/MovieListContainer";
import Navbar from "./components/Navbar";
import Visualization from "./components/Visualization";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/list/:page" component={MovieListContainer} />
        <Route path="/visualize" component={Visualization} />
      </QueryClientProvider>
    </>
  );
}

export default App;
