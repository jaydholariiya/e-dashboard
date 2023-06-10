import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    let navigate = useNavigate();

useEffect(()=>{
    let auth = localStorage.getItem("users");
    if(auth){
                navigate('/')
            }

})

    const dataPrint = async () => {
        console.log(name , email , password);
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name , email , password}),
            headers:{'Content-Type' : 'application/json'}
        })
        result = await result.json();
        console.warn(result);

console.log(result.auth + "auth is here");

        localStorage.setItem("users",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.auth))
       navigate("/");
    }
  return (
    <>
      
        
        <section className="vh-30 w-60 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3"/>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h3 className="text-uppercase text-center mb-4">Create an account</h3>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={name} onChange={(event)=>setName(event.target.value)}/>
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(event)=>setEmail(event.target.value)} />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(event)=>setPassword(event.target.value)} />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" onClick={dataPrint}
                    className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body px-3">Register</button>
                      
                </div>
                <p className="text-center my-2 mb-0 text-white bg-white">Have already an account? <Link to="/login"
                    className="fw-bold text-body"><u>Login here</u></Link></p>

              

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

</section>

        
    </>
  )
}

export default SignUp