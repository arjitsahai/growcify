import React from "react";
import './App.css';

import Hero from "./components/hero";
import {GroceryState} from "./context/grocery";

const App = () => {
  return (
    <GroceryState>
      <Hero />
    </GroceryState>
  );
}

export default App;
