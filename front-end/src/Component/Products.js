import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Products() {

    const [prod, setProd] = useState([]);

    useEffect(()=>{

        getProduct();

    },[])

    let searchBar = async (e) => {
        // console.warn(e.target.value);
        let val = e.target.value;
        if(val){
        let result = await fetch(`http://localhost:5000/search/${val}`,
       { headers:{authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`}}
        );
        result = await result.json();
       
      
            setProd(result);
        }
        else{
            getProduct()
        }
    }

    let getProduct = async() => {
        let result = await fetch("http://localhost:5000/products",{
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
          result = await result.json();
            setProd(result);

        
    }

    let deleteProduct = async(id) => {
        let result = await fetch(`http://localhost:5000/product_delete/${id}`,{
            method:'delete',
             headers:{authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`}

        });
       result = await result.json();
       if(result){
        getProduct()
       }
    }


   



  return (
    <>
    <div className="">
    <h1 className="text-center text-white my-4">Product Details</h1>
 <section className=" intro my-5">
  <div className="bg-image h-100">
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true"  >
                <form className="d-flex my-4 container" role="search">
        <input className="form-control me-2" type="search" placeholder="                  Search The Product Details" aria-label="Search" onChange={searchBar}/>
        
      </form>
                  <table className="table table-striped mb-0 ">
                    <thead >
                    
                      <tr key='1'>
                      <th scope="col" key='2'><b>S.No</b></th>
                        <th scope="col" key='th2'><b>Product name</b></th>
                        <th scope="col" key='3'><b>Product category</b></th>
                        <th scope="col" key='4'><b>Product Company</b></th>
                       
                        <th key="th5" scope="col"><b>Price</b></th>
                        <th key="th6" scope="col"><b>Delete Item</b></th>
                        <th key="th7" scope="col"><b>Update Item</b></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                    {  prod.map((item , index)=> <tr>
                            <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.company}</td>
                        <td>{item.price}</td>
                        <td><button className="btn btn-dark text-white" onClick={()=>deleteProduct(item._id)}>Delete Item</button></td>
                        <td><button className="btn btn-dark text-white"><Link className="text-white text-decoration-none" to={"/update/"+item._id}>Update Item</Link></button></td>
                        </tr> )
                     

                    }
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Products