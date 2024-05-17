import './VPSubCategory.css';
import { useState,useEffect, } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { _subcategoryapiurl } from '../../api_url';
function VPSubCategory(){
    const params = useParams();
    const [scList, setSubCategoryList]=useState([]);
    useEffect(()=>{
        axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((res)=>{
            //console.log(res.data);
            setSubCategoryList(res.data);
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
                <h1 class="display-4 mb-4"><span class="text-primary">Sub-Category</span> List <span class="text-secondary"> &gt;&gt;&gt; {params.catnm} </span></h1>
                <center>
                <div id='main'>
                    {
                        scList.map((row)=>(
                    <Link to={`/vproduct/${row.subcatnm}`}>
                     <div className='part'>
                        <br/>
                   <img src={`../assets/uploads/subcaticon/${row.subcaticonnm}`} height="100" width="150" />
                   <br />
                   <b>{row.subcatnm}</b>
                </div>
                </Link>
                        ))
                    }
                </div>
                </center>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default VPSubCategory;
