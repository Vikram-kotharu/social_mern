import Friendlist from '../friendlist'
import { useState } from 'react'
import './index.css'

const Posts = () =>{
    const [like,setLike] = useState(false)
    return(
        <>
            <div className="mt-4 ml-3">
        <div className="container-fluid">
        <div className='row'>
        <div className="col-lg-5 shadow box">
            <div className="d-flex flex-row p-3 text">
                <img  height='30px' src='https://cdn-icons-png.flaticon.com/512/64/64572.png' alt="profile pic"/>
                <h3 className="text2 ml-2">Vikramaditya</h3>
                <p className="mt-2 ml-3">5 min ago</p>
            </div>
            <div className="col-lg-12">
                <img className="img1" src="https://www.dailypioneer.com/uploads/2018/story/images/big/at-home--the-intimacy-of-hill-stations-2018-09-09.jpg" alt="" />
            </div>
            <br/>
            <div className='d-flex flex-row'>
                {like?<img height='30px' onClick={()=>{setLike(!like)}} src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="likes" /> :<img height='27px' onClick={()=>{setLike(!like)}} src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt='notliked'/>}
                {like?<p className="mt-1 ml-2 text">vikram likes this</p>:<p className="mt-1 ml-2 text">No likes Yet</p>}
                
                
                
            </div>
            <div className="p-2">
            <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
            </div>
        </div>
        <Friendlist/>
        </div>
        
        
    </div>

        </div>
        
            
            
        </>
    )
}

export default Posts