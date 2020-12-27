import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import logo from './logo.svg';

import { Tasks } from "./tasks";

function App() {
  return (
    <>
      <h1 className="title">Kanban Board for Projects</h1>
      <div className="maingrid">
        <Tasks />
      </div>
      <div className="footer">
        <p style={{fontSize: "2rem"}}>This site is made with React.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
