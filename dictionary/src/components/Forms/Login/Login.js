import { useState } from "react"
import "./Login.css"

const url ="http://localhost:3030/auth/signin"



const Login = () => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const login ={
            email,
            senha
        };

        const res = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(login)
        })
        
    }

return (
    <div className="Login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>e-mail</span>

                    <input type="text" name='email' placeholder=' digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />

                    <span>senha</span>

                    <input type="password" name='senha' placeholder='digite sua senha' onChange={(e)=> setSenha(e.target.value)} />
                </label>
            </div>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default Login;