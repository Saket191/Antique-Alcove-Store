import './VProductReview.css';
import { useState,useEffect, } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { _subcategoryapiurl, _productapiurl, _reviewapiurl } from '../../api_url';
function VProductReview(){
    const params = useParams();
    const [pList, setProductList]=useState([]);
    useEffect(()=>{
        axios.get(_reviewapiurl+"fetch?_id="+params._id).then((res)=>{
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
                <h1 class="display-4 mb-4"><span class="text-primary">Product</span> Review <span class="text-secondary"> &gt;&gt;&gt; List</span></h1>
                <center>
                    {
                        pList.map((row)=>(

                      <>  
                <table  height="150" width="80%">
                    <tr>
                        <td> <b>Product Id:-</b> {row.pid} </td>
                    </tr> 
                    <tr>
                        <td> <b>Review:-</b> {row.description}</td>
                       
                    </tr>
                    <tr>
                        <td><b>Info:-</b> {row.info } </td>
                      
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
export default VProductReview;
