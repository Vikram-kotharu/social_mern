import Banner from "../components/banner"
import Navs from "../components/Nav"
import './index.css'

const Profile = () =>{
    return(
        <>
        <Navs/>
        <div className="container mt-5">
        <div className="row">
        <Banner/>
        <div className="col-lg-4">
            <h2 className="tur">Vikram Aditya</h2>
            <h4 className="tur">Eluru,Andhra Pradesh</h4>
            <p className="tur">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>


        </div>

        </div>
        
        

        </>
    )
}

export default Profile