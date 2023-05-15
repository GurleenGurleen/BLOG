import './Form.css'
import {Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
const Login = () =>{

    const [inputs, setInputs] = useState({
        username: "",
        password:"",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/login", inputs)
            console.log(res)
            navigate("/login")
        } catch (err){
            setError(err.response.data);
        }
        
    } 

    return(
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" onChange={handleChange} name="username"/>
                <input type='password' placeholder="password" onChange={handleChange} name="password"/>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>

        </div>
    )
}

export default Login;