import { Navigate } from "react-router-dom";

const Privateroutes = ({children})=>{
    const user = localStorage.getItem('user');
    if(!user){
        return <Navigate to="/login" />
    }
    else{
        return children
    }
    
}

export default Privateroutes