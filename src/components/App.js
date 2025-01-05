import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        
    </div>
  )
}

export default App
*/