import './ViewReview.css';
import { useState,useEffect, } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { _subcategoryapiurl, _productapiurl,_reviewapiurl } from '../../api_url';
function ViewReview(){
    const params = useParams();
    const [pList, setProductList]=useState([]);
    const [vreview, setViewreview] = useState([]);
    useEffect(()=>{
        axios.get(_productapiurl+"fetch?uid="+localStorage.getItem("email")).then((res)=>{
            console.log(res.data);
            setProductList(res.data); 
        }).catch((err)=>{
            console.log(err);
        });
        // console.log(pList[0]._id);
        // axios.get(_reviewapiurl+"fetch?pid="+pList[0]._id).then((res)=>{
        //     console.log(res.data);
        //     setViewreview(res.data);
        // }).catch((err)=>{
        //     console.log(err);
        // });

    });
    
       
    return(
        
        <>
         {/* About Start */}
    <div class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Product</span> Review List <span class="text-secondary"> &gt;&gt;&gt; </span></h1>
                <center>
                    {
                        pList.map((row)=>(

                      <>  
                <table border="1" height="150" width="80%">
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
                        <td><Link to={`/viewproductreview/${row._id}`}> View Review</Link> </td>
                      
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
export default ViewReview;
