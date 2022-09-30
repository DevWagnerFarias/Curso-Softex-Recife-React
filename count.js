import { useState } from 'react'

// Criei o componente Count para fazer a contagem de vezes apertadas no botão 

function Count () {

    const [num, setNum] = useState(0);

// função para mecanismo de adicionar

    function adicionar () {
        setNum(num + 1);
    }

// Usei o ternário para fazer a concordância verbal com o número
    
    let quantidade = (num >= 2) ? "vezes" : "vez";

    return (
        <div>
            <h2>Aperte no botão para aumentar o número</h2>
            <button onClick={adicionar} >Aperte aqui</button>
            <h3>Até agora você apertou {num} {quantidade}</h3>

        </div>
    )
}

export default Count;