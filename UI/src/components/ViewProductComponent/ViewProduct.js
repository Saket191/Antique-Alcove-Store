import './ViewProduct.css';
import { useState,useEffect, } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { _subcategoryapiurl, _productapiurl } from '../../api_url';
function ViewProduct(){
    const params = useParams();
    const [pList, setProductList]=useState([]);
    useEffect(()=>{
        axios.get(_productapiurl+"fetch").then((res)=>{
            //console.log(res.data);
            setProductList(res.data);
        }).catch((err)=>{
            console.log(err);
        });

    });
    
       
    return(
        
        <>
         {/* About Start */}
    <div class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Product</span> List <span class="text-secondary"> &gt;&gt;&gt; {params.subcatnm} </span></h1>
                <center>
                    {
                        pList.map((row)=>(

                      <>  
                <table height="150" width="80%">
                    <tr>
                        <td width="40%" rowSpan="4">
                        <center>
                        <img src={`../assets/uploads/producticon/${row.piconnm}`} height="100" width="150" />
                        </center>
                        </td>
                        <td> <b>Title:-</b> {row.title} </td>
                    </tr> 
                    <tr>
                        <td> <b>Description:-</b> {row.description}</td>
                       
                    </tr>
                    <tr>
                        <td><b>Info:-</b> {row.info } </td>
                      
                    </tr>
                    <tr>
                        <td><b><Link to={`/addreview/${row._id}`}>Generate Review</Link></b> </td>
                      
                    </tr>

                </table>
                <br />
                </>
                ))
            }
                </center>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default ViewProduct;
