import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá, meu nome é Wagner de Farias Soares. 
          Estou começando os estudos de React!
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
    </div>
  );
}

export default App;
