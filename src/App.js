import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './components/NavBar';
// import logo from './logo.svg';
// import './App.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico, sans-serif;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {/* <div className="App">
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
        <h1>Hello React</h1>
      </div> */}
    </>
  );
}

export default App;
