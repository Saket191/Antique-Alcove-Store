import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import {useNavigate} from 'react-router-dom';
function Login(){
    const navigate=useNavigate();
    const [output , setOutput]=useState();
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const handleSubmit=()=>{
         const userDetails={"email":email,"password":password};
            axios.post(_userapiurl+"login",userDetails).then((res)=>{
                   // console.log(res.data);
                    var token= res.data.token;
                    var userDetails=res.data.userDetails;
                    localStorage.setItem("token",token);
                    localStorage.setItem("_id",userDetails._id);
                    localStorage.setItem("name",userDetails.name);
                    localStorage.setItem("email",userDetails.email);
                    localStorage.setItem("mobile",userDetails.mobile);
                    localStorage.setItem("city",userDetails.city);
                    localStorage.setItem("gender",userDetails.gender);
                    localStorage.setItem("address",userDetails.address);
                    localStorage.setItem("status",userDetails.status);
                    localStorage.setItem("info",userDetails.info);
                    localStorage.setItem("role",userDetails.role);
                    (userDetails.role=="admin")?navigate("/admin"):navigate("/user");
            }).catch((err)=>{
                 setOutput("Invalid User/Verify your Account");
                 setEmail("");
                 setPassword("");
            });
    }
    return(
        <>
         {/* About Start */}
    <div id="/login" class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">Welcome to Antque Alcove Store, Login Page</h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Atnique</span> Alcove <span class="text-secondary">Store</span></h1>
                <h4 class="text-secondary mb-3">Login Here, </h4>
              <font color="orange">{output}</font>
                <form>
  <div  class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
  </div>
  <br/>
  
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
export default Login;