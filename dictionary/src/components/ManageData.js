import { useState } from "react";

function ManageData() {
  let someData = 10;

  const [number, setNumber] = useState(15);
  
  return (
    <div>
        <div>
            <p>Valor : {someData}</p>
            <button onClick={() => (someData=15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number+15)}>Soma</button>
            <button onClick={() => setNumber(number-15)}>Subtrai</button>
        </div>
    </div>
  )
}

export default ManageData
