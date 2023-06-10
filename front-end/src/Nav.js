import React from 'react'
import {Link , useNavigate} from 'react-router-dom';

function Nav() {
    let navigate = useNavigate();
    let auth = localStorage.getItem("users");
    let logout = () => {
        localStorage.clear();
        navigate("/signup")

    }
  return (
    <>
        <ul className="nav px-3 bg-black sticky-top">
        
        <li className="py-3 px-3 "><Link className="links" to="/">Products</Link></li>
        <li className="py-3 px-3 "><Link className="links" to="/add">Add Product </Link></li>
     
       
       
        {/* <li className="py-3 px-3"><Link className="links" to="/profile">User Profile</Link></li> */}
    
     {auth ? <li className="py-3 px-3"><Link onClick={logout} className="links" to="/signup" >Logout ({JSON.parse(auth).name})</Link></li> : 
        <><li className="py-3 px-3"><Link className="links" to="/signup">Sign Up</Link></li>
          <li className="py-3 px-3"><Link className="links" to="/login">Login</Link></li></>}

        
        </ul>
        
    
        
    </>
  )
}

export default Nav