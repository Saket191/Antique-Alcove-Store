import './Register.css';
import axios from 'axios';
import { useState } from 'react';
import {_userapiurl} from '../../api_url';
import { useNavigate } from 'react-router-dom';
function Register(){
    const navigate =useNavigate();
    const [output , setOutput]=useState();
    const [name , setName]=useState();
    const [email , setEmail]=useState();
    const [password , setPassword]=useState();
    const [mobile , setMobile]=useState();
    const [address , setAddress]=useState();
    const [city , setCity]=useState();
    const [gender , setGender]=useState();

    const handleSubmit=()=>{
        const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
        axios.post(_userapiurl+"save",userDetails).then((res)=>{
                setOutput("Data Added Successfully");
                setName("");
                setEmail("");
                setPassword("");
                setMobile("");
                setGender("");
                setCity("");
                setAddress("");
                alert("success");
                navigate("/login");
        }).catch((err)=>{
               setOutput("Registration Failed Please Try Again");
        });
    
    }
    return(
        <>
         {/* About Start */}
    <div id='/register' class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">Register Here, </h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Antique</span> Alcove <span class="text-secondary">Store</span></h1>
              <font color="orange">{output}</font>
                <form>
                <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
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
    &nbsp;&nbsp;Male &nbsp;<input type="radio"   name="gender" value="male" onChange={e=>setGender(e.target.value)}/>
    &nbsp;&nbsp;Female&nbsp;<input type="radio"  name="gender" value="female" onChange={e=>setGender(e.target.value)}/>
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
</form>
                
            </div>
            
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default Register;