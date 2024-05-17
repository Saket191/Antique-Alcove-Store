import './Manageusers.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';
function Manageusers(){
        const navigate =useNavigate();
        const [count, setCount] = useState(0);
        const [usersList, setUsersList] = useState([]);
        useEffect(()=>{

                axios.get(_userapiurl+"fetch?role=user").then((res)=>{
                        //console.log(res.data);
                        setUsersList(res.data);
                }).catch((err)=>{
                        console.log(err);
                        setUsersList([]);
                });
                console.log(count);
        },[count]);

        const changeStatus=(_id,status)=>{
          if(status=="block")
          {
                let updateDetails ={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
                axios.patch(_userapiurl+"update",updateDetails).then((res)=>{
                    setCount(count+1);     
                    navigate("/manageusers");
                }).catch((err)=>{
                        console.log(err);
                });
          }
          else if(status=="unblock")
          {
            let updateDetails ={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
            axios.patch(_userapiurl+"update",updateDetails).then((res)=>{
                setCount(count+1);     
                navigate("/manageusers");
            }).catch((err)=>{
                    console.log(err);
            });
          }
          else
          {
            
            let deleteDetails ={"data":{"_id":_id}};
                axios.delete(_userapiurl+"delete",deleteDetails).then((res)=>{
                    setCount(count+1);    
                    navigate("/manageusers");
                }).catch((err)=>{
                        console.log(err);
                });
          }
        };
     

    return(
        
        <>
         {/* About Start */}
    <div id='/manageusers' class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">Admin Pannel Manage Users & Operation</h4>
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Mange</span> User <span class="text-secondary">List</span></h1>
            </div>
        </div>
                <table class="table table-bordered">
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Info</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    
                {
                    usersList.map((row)=>(
                        <tr>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.mobile}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.gender}</td>
                                <td>{row.info}</td>
                                <td>{row.status ==1 && <span style={{'color':'green'}}>Verified</span>}
                                {row.status ==0 && <span style={{'color':'orange'}}>Not Verified</span>}</td>
                                <td>
                                    <span>{row.status ==1 && <span style={{'color':'blue'}} onClick={()=>{changeStatus(row._id,'block')}}>Change Status</span>}
                                        {row.status ==0 && <span style={{'color':'blue'}} onClick={()=>{changeStatus(row._id,'unblock')}}>Change Status</span>}</span>
                                    <br/>
                                    <span><button class="btn btn-danger" onClick={()=>{changeStatus(row._id,'delete')}}>Delete User</button></span>
                                </td>
                        </tr>

                    ))
                }
                </table>
    </div>
    {/* About End */}
        </>
    );
}
export default Manageusers;
