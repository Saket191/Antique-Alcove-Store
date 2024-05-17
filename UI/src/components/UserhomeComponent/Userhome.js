import './Userhome.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Userhome(){
    
    return(
        
        <>
         {/* About Start */}
    <div class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">Welcome to User Pannel</h4>
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">User</span> Home <span class="text-secondary">Page</span></h1>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default Userhome;
