import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from "./expressionless.svg"
function App() {
  return (
    <div className="App">
      <div className="Icons">
        <img src={image} className="Icon" id="I1"/>
        <img src={image} className="Icon" id="I2"/>
      </div>
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
      <div>Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
