import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

  )
}
export default App;
