import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Marcos")


  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora x é falso</p>}
        {name  === "João"?(
            <div>
                <p>O nome é João</p>
            </div>
        ):(
            <div>
                <p>Nome não encontrado</p>
                <button onClick={() => setName("João")}>Clica aqui</button>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender