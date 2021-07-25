import React from 'react';
import logo from "./logo.svg";
import "./App.css";

const MFE = React.lazy(() => import("mfe1/app"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading MFE">
        <MFE />
      </React.Suspense>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
