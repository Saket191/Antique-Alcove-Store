import './Nav.css';
import { Link} from 'react-router-dom';
//import { HashLink} from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import Auth from '../AuthComponent/Auth';
function Nav()
{   

        const handleLink=(linkName)=>{
            console.log(linkName); 
            setTimeout(()=>{
            const element = document.getElementById(linkName);
            console.log(element);
            if(element)
            {
                element.scrollIntoView({behavior:'smooth'});
            }
        },10);
        };

    const [NavContent , setNavContent]=useState();
    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
        {
                setNavContent(<>
                 {/* Navbar Start */}
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a  class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Pawn</span>Store</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <a  class="nav-item nav-link active" ><Link to="/admin" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/admin')}> Admin Home</Link></a>
                    <a  class="nav-item nav-link" ><Link to="/manageusers" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/manageusers')}> Manage Users</Link></a>
                    <a  class="nav-item nav-link" ><Link to="/viewproduct" style={{"color":"#f8f7f5"}} > View Product</Link></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Manage Category</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="" class="dropdown-item"><Link to="/addcategory" onClick={()=>handleLink('/addcategory')}>Add Category</Link></a>
                            <a href="" class="dropdown-item"><Link to="/addsubcategory" onClick={()=>handleLink('/addsubcategory')}>Add Sub-Category</Link></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Setting</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="" class="dropdown-item"><Link to="/cpadmin" onClick={()=>handleLink('/cpadmin')}>Change Password</Link></a>
                            <a href="" class="dropdown-item"><Link to="/epadmin" onClick={()=>handleLink('/epadmin')}>Edit Profile</Link></a>
                        </div>
                    </div>
                    <a  class="nav-item nav-link" ><Link to="/taskusers" style={{"color":"#f8f7f5"}}onClick={()=>handleLink('/taskusers')}> Task Users</Link></a>
                </div>
                
                <a class="btn btn-lg btn-primary px-3 d-none d-lg-block"><Link to="/logout" style={{"color":"#f8f7f5"}}>Log Out</Link></a>
            </div>
        </nav>
    </div>
    {/* Navbar End */}
                </>);
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
        {
            setNavContent(<>
                {/* Navbar Start */}
   <div class="container-fluid p-0">
       <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
           <a  class="navbar-brand d-block d-lg-none">
               <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Pawn</span>Store</h1>
           </a>
           <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
               <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
               <div class="navbar-nav mr-auto py-0">
                   <a  class="nav-item nav-link active" ><Link to="/user" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/user')}> User Home</Link></a>
                   <a  class="nav-item nav-link" ><Link to="/addproduct" style={{"color":"#f8f7f5"}}>Add Product</Link></a>
                   <a  class="nav-item nav-link" ><Link to="/vpcategory" style={{"color":"#f8f7f5"}}>View Product</Link></a>
                   <a  class="nav-item nav-link" ><Link to="/viewreview" style={{"color":"#f8f7f5"}}>View Review</Link></a>
                   {/* &nbsp; */}
                   {/* <div class="navbar-nav mr-auto py-3" >
                                <input type="text" class="navbar-nav mr-1 py-0" placeholder="Search here..." required="required" />
                                <div>
                                <button class="btn btn-lg btn-primary btn-block border-0" type="button">Search</button>
                            </div>
                            </div>
                            &nbsp; */}
                   <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Setting</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="" class="dropdown-item"><Link to="/cpuser" onClick={()=>handleLink('/cpuser')}>Change Password</Link></a>
                            <a href="" class="dropdown-item"><Link to="/epuser" onClick={()=>handleLink('/epuser')} >Edit Profile</Link></a>
                        </div>
                    </div>
               </div>
              
               <a class="btn btn-lg btn-primary px-3 d-none d-lg-block"><Link to="/logout" style={{"color":"#f8f7f5"}}>Log Out</Link></a>
           </div>
       </nav>
   </div>
   {/* Navbar End */}
               </>);
        }
        else
        {
              
            setNavContent(<>
             {/* Navbar Start */}
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a  class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Pawn</span>Store</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <a  class="nav-item nav-link active" ><Link to="/" style={{"color":"#f8f7f5"}}>Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/about" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/about')} >About us</Link></a>
                    <a class="nav-item nav-link"><Link to="/service" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/service')}>Service</Link></a>
                    <a class="nav-item nav-link"><Link to="/register" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/register')}>Register</Link></a>
                    {/* <a href="" class="nav-item nav-link"></a> */}
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="" class="dropdown-item">Blog Grid</a>
                            <a href="" class="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a class="nav-item nav-link"><Link to="/contact" style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/contact')}>Contact</Link></a>
                </div>
                <a class="btn btn-lg btn-primary px-3 d-none d-lg-block"><Link to="/login" onClick={()=>handleLink('/login')} style={{"color":"#f8f7f5"}} >Log In</Link></a>
            </div>
        </nav>
    </div>
    {/* Navbar End */}
            </>);
        }

    });
    return(
        <>
        <Auth />
     {NavContent}
        </>
    );
}
export default Nav;