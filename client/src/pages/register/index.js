import { useState } from 'react'
import './index.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = ()=>{
    const [username,setUser] = useState('');
    const [email,setEmails] = useState('');
    const [password,setPasswords] = useState('');
    const navigate = useNavigate();
    const registerhandler = async(e) =>{
        e.preventDefault();
        const newUser = {
            username,email,password
        }
        try{
            const res = await axios.post("/auth/register",newUser)
            console.log(res.data);
            navigate('/login');

        }catch(err){
            console.log(err);
        }
        

        setUser("");
        setEmails("");
        setPasswords("");


    }
    return(
        <>
        <div className="container tur mt-5">
        <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-4 k shadow p-4">
                <div className="k1 mb-3">
                    <h1>Register</h1>
                </div>
                <form onSubmit={registerhandler}>
                    <div className="form-group">
                        <label for="exampleInputEmail11">User Name</label>
                        <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control" id="exampleInputEmail11" aria-describedby="emailHelp" value={username}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={(e)=>{setEmails(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={(e)=>{setPasswords(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" value={password}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
                <p>Already a user go to <a href="/#">Login</a></p>
            </div>
        </div>
    </div>
        


        </>
    )
}

export default Register