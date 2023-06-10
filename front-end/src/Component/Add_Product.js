import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Add_Product() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [error , setError] = useState(false);
    let navigate = useNavigate();
    let submitRecord = async() => {

if(!name || !price || !category || !company){
        setError(true);
        return false;
}

      
        console.log(name , price , category , company);
        let userId = JSON.parse(localStorage.getItem('users'))._id;
        let result = await fetch("http://localhost:5000/Add_Product",{
            method:'post',
            body:JSON.stringify({name , price , category , company , userId}),
            headers : {'Content-Type' : 'application/json', authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`}

        })

        result = await result.json();
        console.log(result);
       
        console.log(userId);

        if(result){
            navigate("/")
        }
        else{
            alert("Data Not Updated In Proper Way ! Try Again")
        }

    }


  return (
    <>
            <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items px-5">
                        <h3>Add Product</h3>
                        <p>Fill in the data below.</p>
                        

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" placeholder="Full Name" value={name} onChange={(event)=>setName( event.target.value)} required/>
                             {error && !name && <span className=" text-white">Username field cannot be blank!</span>}
                              
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="email" placeholder="Price" value={price} onChange={(event)=>setPrice(event.target.value)} required/>
                              
                                 {error && !price && <span className=" text-white">price field cannot be blank!</span>}
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="category" placeholder="category" value={category} onChange={(event)=>setCategory(event.target.value)} required/>
                           
                               {error && !category && <span className=" text-white">category field cannot be blank!</span>}
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="company" placeholder="company" value={company} onChange={(event)=>setCompany(event.target.value)} required/>
                             
                               {error && !company && <span className=" text-white">company field cannot be blank!</span>}
                            </div>


                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" onClick={submitRecord} className="btn btn-primary">Submit</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Add_Product