//impotando as bibliotecas e os arquivos dos outros componentes

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Contato from '/Contato';
import Nome from '/Nome';


function App() {
  return (

// Usando Router para envolver a aplicação e adaptar para Router
// Usando o Switch para mudar de componentes

    <Router>
      <ul>
        <il><Link to='/nome'>Nome</Link> </il>
        <il><Link to='/contato'>Contato</Link> </il>
      </ul>      
      <Switch>
        <Route path='/nome'>
          <Nome />
        </Route>
        <Route path='/contato'>
          <Contato />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
