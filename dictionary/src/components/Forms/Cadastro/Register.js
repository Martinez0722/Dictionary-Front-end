import { useState } from 'react'
import './Register.css'


const url = "http://localhost:3030/auth/signup"

const Register = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const cadastro ={
            email,
            senha
        };

        const res = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cadastro)
        })
        alert("Cadastro, Realizado")
        
    }
   
return (
    <div className='Cadastro'>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>e-mail</span>

                    <input type="text" name='email' placeholder=' digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />

                    <span>senha</span>

                    <input type="password" 
                        name='senha' 
                        placeholder='digite sua senha' 
                        onChange={(e)=> setSenha(e.target.value)} />
                </label>
            </div>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default Register