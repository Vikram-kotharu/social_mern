import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios'
const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const entered = async(e) =>{
        e.preventDefault();
        const users = {
            email,password
        }
        try{
            const res = await axios.post('auth/login',users)
            localStorage.setItem('user',JSON.stringify(res.data))
            navigate('/')


        }catch(err){
            console.log(err);
        }
        
        
       
    }

    return(
        <>
        <div className="container tur1 mt-5">
        <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-4 kayo shadow p-4">
                <div className="key mb-3">
                    <h1>Login</h1>
                </div>
                <form onSubmit={entered}>
                    <div className="form-group">
                        <label for="exampleInputEmail12">Email address</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" value={email}/>
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword13">Password</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword13" value={password}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
                <p>New to Socializer? <a href="/#">Register</a></p>
            </div>
        </div>
    </div>

        </>
    )
}

export default Login