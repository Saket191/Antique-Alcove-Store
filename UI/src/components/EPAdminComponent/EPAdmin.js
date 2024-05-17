import './EPAdmin.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { _userapiurl } from '../../api_url';
function EPAdmin(){
    
    const navigate =useNavigate();
    const [output , setOutput]=useState();
    const [name , setName]=useState();
    const [email , setEmail]=useState();
    const [mobile , setMobile]=useState();
    const [address , setAddress]=useState();
    const [city , setCity]=useState();
    const [gender , setGender]=useState();
 
        useEffect(()=>{
        axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")).then((res)=>{
           //console.log(res.data);
            var userDetails =res.data[0];
            setName(userDetails.name);
            setEmail(userDetails.email);
            setMobile(userDetails.mobile);
            setAddress(userDetails.address);
            setCity(userDetails.city);

        });
    },[]);
    const handleSubmit=()=>{
        let updateDetails ={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_userapiurl+"update",updateDetails).then((res)=>{
                alert("details Updated Successfully...");
                navigate("/admin");
        }).catch((err)=>{
                console.log(err);
        });
    };
    
    return(
       
        <>
         {/* About Start */}
    <div id='/epadmin' class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                {/* <h4 class="text-secondary mb-3">Edit Profile!!!</h4> */}
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Edit</span> <span class="text-secondary">Profile!!!</span></h1>
                <font color="orange">{output}</font>
                <form>
                <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input readOnly type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control"value={mobile} onChange={e=>setMobile(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" rows="5" value={address} onChange={e=>setAddress(e.target.value)}></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e=>setCity(e.target.value)}>
        <option >Select City</option>
        <option >Indore</option>
        <option >Bhopal</option>
        <option >Jabalpur</option>
    </select>
  </div>
  <div class="form-group">
    <label for="'gender'">Gender:</label>
    &nbsp;&nbsp;Male &nbsp;<input type="radio"   name="gender" checked value="male" onChange={e=>setGender(e.target.value)}/>
    &nbsp;&nbsp;Female&nbsp;<input type="radio" value="female" name="gender" onChange={e=>setGender(e.target.value)}/>
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Update</button>
</form>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default EPAdmin;
