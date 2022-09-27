import logo from './logo.svg';
import './App.css';


// Criei a função (componente) "User" que terá como como prop o nome do usuário, e esse componente será chamado no componete "App"

function User(props) {
  return (<h1>Olá, Meu nome é {props.name} e estou aprendendo React. Quer aprender também, segue o link abaixo!</h1>
  ) 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <User name={"Wagner"}></User>                  
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
