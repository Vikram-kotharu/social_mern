import {useState} from 'react'
import './index.css'
const Friend = () =>{
    const [follow,setFollow] = useState(true)
    
    return(
        <>
        <div className="col-lg-12 p-3 shadow d-flex flex-row box123 mb-3">
                    <img height='30px' src='https://cdn-icons-png.flaticon.com/512/64/64572.png' alt="profile pic" />
                    <h4 className="text21 ml-2">Kotharu</h4>
                    <button className="btn btn-dark l" onClick={()=>{setFollow(!follow)}} type="submit">{follow?"unfollow":"follow"}</button>
                </div>

        </>
    )
}

export default Friend