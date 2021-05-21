import logo from './logo.svg';
import './App.css';
import Search from "./search/Search";
import {StyleBar} from "./stylebar/StyleBar"
import React from "react";
import {pullStyles} from "./datasources/fireStoreService";

function App() {
  pullStyles();
  return (
    <div className="App">
      <Search />
      <StyleBar stylelist={[]}/>
    </div>
  );
}

export default App;
