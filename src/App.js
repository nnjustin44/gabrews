import './App.css';
import Search from "./search/Search";
import {StyleBar} from "./stylebar/StyleBar"
import React from "react";
import { pullStyles } from "./datasources/FireStoreService";

function App() {
  pullStyles()
  return (
    <div className="App">
      <Search />
      <StyleBar />
    </div>
  );
}

export default App;
