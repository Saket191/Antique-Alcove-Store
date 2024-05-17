import './VProduct.css';
import { useState,useEffect, } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { _subcategoryapiurl, _productapiurl } from '../../api_url';
function VProduct(){
    const params = useParams();
    const [pList, setProductList]=useState([]);
    const [output ,setOutput] = useState();
    useEffect(()=>{
        axios.get(_productapiurl+"fetch?subcatnm="+params.subcatnm).then((res)=>{
            //console.log(res.data);
            setProductList(res.data);
        }).catch((err)=>{
            console.log(err);
        });

    });
    const Liked=()=>{
            setOutput("You Liked Product Successfully...");
    }
    const NotLiked=()=>{
        setOutput("You Not Liked This Product...");
    }
    
       
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
                      <font color="blue"><b> {output}</b></font>
                <table  height="150" width="80%">
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
                        <td><button style={{"font-size":"16px"}} class="btn btn-success" value="Interested" onClick={Liked} >Interested &nbsp;<i class="fa fa-thumbs-up"></i></button>&nbsp;&nbsp;
                        <button style={{"font-size":"16px"}} class="btn btn-danger" onClick={NotLiked} >Not Interested &nbsp;<i class="fa fa-thumbs-down"></i></button></td>
                      
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
export default VProduct;
