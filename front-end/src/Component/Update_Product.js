import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function Update_Product() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
       console.log(params);
       GetTheData();
    },[])



        let submitRecord = async() => {

            
            console.log(name , price , category , company);
            let userId = JSON.parse(localStorage.getItem('users'))._id;
            let result = await fetch(`http://localhost:5000/Update_Product/${params.id}`,{
                method:'put',
                body:JSON.stringify({name , price , category , company , userId}),
                headers : {'Content-Type' : 'application/json'}
            })
            result = await result.json();
            console.log(result);

            if(result){
                navigate("/")
            }
            else{
                alert("Data Not Updated In Proper Way ! Try Again")
            }
            
            
        }

        let GetTheData = async()=>{

            let result = await fetch(`http://localhost:5000/productGet/${params.id}`);
            result = await result.json();
            console.warn(result);
            setName(result.name)
            setPrice(result.price)
            setCategory(result.category);
            setCompany(result.company)
            
            }
    
  return (
    <>
            
            <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items px-5">
                        <h3>Update Product</h3>
                        <p>Fill in the data below.</p>
                        

                            <div className="col-md-12">
                               <input className="form-control" type="text" onChange={(event)=>setName(event.target.value)}  name="name" placeholder="Full Name" value={name} required/>
                             
                              
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="email" placeholder="Price" value={price} onChange={(event)=>setPrice(event.target.value)} required/>
                              
                                
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="category" placeholder="category" value={category} onChange={(event)=>setCategory(event.target.value)} required/>
                           
                               
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="company" placeholder="company" value={company} onChange={(event)=>setCompany(event.target.value)} required/>
                             
                             
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

export default Update_Product