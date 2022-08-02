import {useEffect, useState} from 'react'
import './index.css'
import { useNavigate,Link } from 'react-router-dom'

const Navs= () =>{
    const [status,setStatus] = useState(true)
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    //useEffect(()=>{
    //    const user = localStorage.getItem("user");
    //    setStatus(user ? true:false);
        
    //},[status]);
    const handler = () =>{
        setStatus(!status)
        if(status === true){
            localStorage.removeItem('user');
            navigate('/login')
        }
    }
    
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 p-3 back mt-3 d-flex flex-row shadow">
                <h1 className="text123 ml-4 col-lg-4">Socializer</h1>
                <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control col-lg-4 ml-4 mt-2" type="search" name="" id="" value={search} placeholder="Search your posts"   />
                <button onClick={handler} className="btn btn-danger b1" type="submit">{status?"logout":"login"}</button>
            </div>
        </div>

    </div>
    
      
      

        </>

    )
}

export default Navs