import axios from 'axios'
import { useState } from 'react';


const Addpost = () =>{
    const [url,setUrl]  = useState('');
    const [desc,setDesc] = useState("");
    const [image,setImage] = useState("");

    const submitHandler = async(e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("file",image);
      data.append("upload_preset","socializer");
      data.append("cloud_name","vikramkotharu");
      //const data = {
        //"file":image,
        //"upload_preset":"socialapp",
        //"cloud_name":"vikramkotharu"
     // }
      
      fetch("https://api.cloudinary.com/v1_1/vikramkotharu/image/upload",{
        method:"post",
        body:data
      })
      .then(resp=>resp.json())
      .then(data=>{
        setUrl(data.url)
        console.log(data)
      })
      .catch(err=>console.log(err))
      const user = localStorage.getItem('user');
      const newPost = {
        userId:JSON.parse(user)._id,
        desc,
        img:url,
      }
      const Postres = await axios.post("/posts/",newPost)
      console.log(Postres.data)
    }

    return(
        <>
        
        
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  create a post
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Post</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={submitHandler}>
      <input className='form-control' type='text' placeholder="add description" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
      <input className='form-control' type='file' accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />
      <button type='submit' >submit</button>

      </form>
      

        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>
    )
}

export default Addpost