import { useState } from "react";
import Posts from "../posts";
import Addpost from "../addPost";
import './index.css'
const Feeds = () =>{
    return(
        <>
        <Addpost/>
        <Posts/>
        
        </>
    )
}

export default Feeds