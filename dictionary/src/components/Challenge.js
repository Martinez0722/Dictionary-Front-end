const Challenge = () =>{
    const a = 10 
    const b = 55

    const Soma = () =>{
        const total = a + b
        console.log(total)
    }
    return(
        <div>
            <h1> A soma de {a} com {b} é igual:</h1>
            <button onClick = {Soma}>Soma</button>
           
        </div>

        
    )
}
export default Challenge