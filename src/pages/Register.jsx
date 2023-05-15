import { Link, useNavigate } from "react-router-dom";
import './Form.css'
import { useState } from "react";
import axios from 'axios'
const Register = () =>{
    const [inputs, setInputs] = useState({
        username: "",
        email:"",
        password:"",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    /* The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs */
    /* npm install axious:  it has isomorphic nature which means it can run in the browser as well as in server-side Node. js applications with the same codebase  */

    /*Axios has built-in XSRF(Cross-Site Request Forgery) protection, while Fetch does not.
     Axios has the ability to intercept HTTP requests but Fetch, by default, does not.
     Axios allows canceling requests and request timeout but fetch does not. */

    const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register", inputs)
            console.log(res)
            navigate("/login")
        } catch (err){
            setError(err.response.data);
        }
        
    } 

    console.log(inputs)

    return(
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="username" name= 'username' onChange={handleChange}/>
                <input type='email' placeholder="email@address.com" name= 'email' onChange={handleChange}/>
                <input type='password' placeholder="password" name= 'password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <p>Already have an account? <Link to='/login'>Register</Link></p>
            </form>

        </div>
    )
}

export default Register;