import logo from './logo.svg';
import './App.css';
import calculadora from './components/calculadora'
import React, {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá, meu nome é Wagner de Farias Soares.<br></br>
          Estou começando os estudos de React!<br></br>
          Agora vou importar o meu primeiro componente React!
        </p>
        <a
          className="App-link"
          href="https://github.com/DevWagnerFarias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça meu GitHUb
        </a>
      </header>
      <body>
        <calculadora />
      </body>
    </div>
  );
}

export default App;
