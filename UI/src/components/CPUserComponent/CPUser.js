import './CPUser.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';

function CPUser(){
    const Navigate = useNavigate(); 
    const [output, setOutput] = useState();
    const [opassword, setOPassword] = useState();
    const [npassword, setNPassword] = useState();
    const [cnpassword, setCNPassword] = useState();
    const handleSubmit=()=>{
        
           axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((res)=>{
              //console.log(res.data);
              if(npassword==cnpassword)
              {
                    let updateDetails ={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};
                    axios.patch(_userapiurl+"update",updateDetails).then((res)=>{
                      alert("Password Changed Successfully, Please Login Again...");
                            Navigate("/logout");

                    }).catch((err)=>{
                            console.log(err);
                    });
                     
              }
              else
              {
                setOutput("New & Confirm New Password Mismatch...");
                setCNPassword("");
                setNPassword("");
              }
              
                 
           }).catch((err)=>{
                setOutput("Invalid Old Password Please try Again...!");
                setOPassword("");
                
           });
   }
    return(
        

        <>
         {/* About Start */}
    <div id='/cpuser' class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                {/* <h4 class="text-secondary mb-3">Change Password!!!</h4> */}
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Change</span> <span class="text-secondary">Password!!!</span></h1>
                <font color="orange">{output}</font>
                <form>
  <div class="form-group">
    <label for="opassword">Old Password:</label>
    <input type="password" class="form-control" value={opassword} onChange={e=>setOPassword(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="npassword"> New Password:</label>
    <input type="password" class="form-control" value={npassword} onChange={e=>setNPassword(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="cnpassword">Confirm Password:</label>
    <input type="password" class="form-control" value={cnpassword} onChange={e=>setCNPassword(e.target.value)}/>
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
export default CPUser;
