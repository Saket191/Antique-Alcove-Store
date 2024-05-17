import './VPCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../api_url';
import { Link } from 'react-router-dom';
function VPCategory(){

    const [cList, setCategoryList]=useState([]);
    useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((res)=>{
            //console.log(res.data);
            setCategoryList(res.data);
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
                <h1 class="display-4 mb-4"><span class="text-primary">Category</span> List <span class="text-secondary"> &gt;&gt;&gt; </span></h1>
                <center>
                <div id='main'>
                    {
                        cList.map((row)=>(
                    <Link to={`/vpsubcategory/${row.catnm}`}>
                     <div className='part'>
                        <br/>
                   <img src={`assets/uploads/caticon/${row.caticonnm}`} height="100" width="150" />
                   <br />
                   <b>{row.catnm}</b>
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
export default VPCategory;
