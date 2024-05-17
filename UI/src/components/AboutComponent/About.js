import './About.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
function About(){
    const [pDetails ,  setPostDetails]=useState([]);
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
           // console.log(res.data);
           setPostDetails(res.data);
       }).catch((err)=>{
        console.log(err);
       })
    })
    return(
        
        <>
         {/* About Start */}
    <div id="/about" class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">Welcome to Antique Alcove Store, About Page</h4>
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Antique</span> Alcove <span class="text-secondary"> Store</span></h1>
                <h2>View & Manage Post Details</h2>
               <table className='table table-bordered'>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                
                    {
                        pDetails.map((row)=>(
                                <tr>
                                    <td>{row.userId}</td>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.body}</td>
                                </tr>
                        ))
                    }
            
               </table>
               
            </div>
            
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default About;
