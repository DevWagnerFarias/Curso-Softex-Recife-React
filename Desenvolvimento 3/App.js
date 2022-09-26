import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [resultado, setresultado] = useState(0);
    const [operacao, setoperacao] = useState('Somar');
    
    const calculo = () => {
        if (operacao == "Somar")
            return parseFloat(num1) + parseFloat(num2);
        else if (operacao == "Subtrair")
            return parseFloat(num1) - parseFloat(num2);
        else if (operacao == "Multiplicar")
            return parseFloat(num1) * parseFloat(num2);
        else 
            return parseFloat(num1) / parseFloat(num2);
    }

useEffect(() => {
    setresultado(calculo());
}, {num1, num2, operacao});

    return (
        <div>
            <h1>Calculadora React</h1>
            <label>Primeiro Número</label>
            <input type= "number" value={num1} onChange = {(e) => setnum1(e.target.value)} />
            <label>Segundo Número</label>
            <input type= "number" value={num2} onChange = {(e) => setnum2(e.target.value)}  />

            <select onChange={(e)=> setoperacao(e.target.value)} >
                <option>Somar</option>
                <option>Subtrair</option>
                <option>Multiplicar</option>
                <option>Dividir</option>
            </select>

            <label>Resultado: {resultado}</label>
        </div>                
    )
}

export default App;
