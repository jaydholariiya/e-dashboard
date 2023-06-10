import React from 'react'
import Nav from './Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import PrivateComponent from "./Component/PrivateComponent";
import Add_Product from "./Component/Add_Product";
import Update_Product from "./Component/Update_Product";
import Products from "./Component/Products";
// import PrivateComponent from "./Component/PrivateComponent";


function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
       <Routes>
       
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Products/>}/>
        <Route path="/add" element={<Add_Product/>}/>
        <Route path="/update/:id" element={<Update_Product/>}/>
        <Route path="/logout" element={<h1 className="text-center">Logout</h1>}/>
        <Route path="/profile" element={<h1 className="text-center">User Profile</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    <Footer/>
        </BrowserRouter>
    
  )
}

export default App