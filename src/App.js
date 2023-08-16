import React from "react";
import Timer from "./Timer";
import './App.css';

function App() {
  return (
      <div className="app">
        <div className="container">
          <h1 className="header">
            Happy New Year in
          </h1>
          <Timer />
        </div>
      </div>
  );
}

export default App;
