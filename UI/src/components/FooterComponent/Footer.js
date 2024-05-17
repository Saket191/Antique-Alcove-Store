import './Footer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Footer(){
    const [FooterContent, setFooterContent]=useState();
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
    useEffect(()=>{
            if(localStorage.getItem("token")!=undefined)
            {
                setFooterContent(<>
                 {/* Footer Start */}
    <div class="container-fluid text-white py-4 px-sm-3 px-md-5" style={{"background": "#111111"}}>
        <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">
                    &copy; <a class="text-white font-weight-bold" href="#">Antique Alcove Store</a>. All Rights Reserved. Designed by
                    <a class="text-white font-weight-bold" href="https://htmlcodex.com"> Saket Nema</a>
                </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
                <ul class="nav d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* Footer End */}
                </>);
            }
            else
            {
                setFooterContent(<>
                {/* Footer Start */}
<div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-4 col-md-12 mb-5">
                <h1 class="mb-4 display-5 text-capitalize text-white"><span class="text-primary">Antque Alcove</span> Store</h1>
                <p class="m-0" style={{"text-align": "justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quas incidunt nisi quidem dignissimos perspiciatis nihil quo, animi illo unde sequi aperiam voluptatum odit! Consequatur expedita voluptas sint ducimus voluptates.</p>
            </div>
            <div class="col-lg-8 col-md-10">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h5 class="text-primary mb-4">Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>123 xyz Indore, India</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+91 XXX-XXX-XXXX</p>
                        <p><i class="fa fa-envelope mr-2"></i>sample@antiquealcovestore.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "36px" ,"height": "36px"}}><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "36px", "height": "36px"}}><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "36px", "height": "36px"}}><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{"width": "36px", "height": "36px"}}><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h5 class="text-primary mb-4">Popular Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" ><i class="fa fa-angle-right mr-2"></i><Link to="/"style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/')} >Home</Link></a>
                            <a class="text-white mb-2" ><i class="fa fa-angle-right mr-2"></i><Link to="/about"style={{"color":"#f8f7f5"}} onClick={()=>handleLink('/about')}>About Us</Link></a>
                            <a class="text-white mb-2" ><i class="fa fa-angle-right mr-2"></i><Link to="/service"style={{"color":"#f8f7f5"}}onClick={()=>handleLink('/service')}>Our Services</Link></a>
                            <a class="text-white mb-2" ><i class="fa fa-angle-right mr-2"></i><Link to="/register"style={{"color":"#f8f7f5"}}onClick={()=>handleLink('/register')}>Register</Link></a>
                            <a class="text-white" ><i class="fa fa-angle-right mr-2"></i><Link to="/login"style={{"color":"#f8f7f5"}}onClick={()=>handleLink('/login')}>Log In</Link></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white py-4 px-sm-3 px-md-5" style={{"background": "#111111"}}>
        <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">
                    &copy; <a class="text-white font-weight-bold" href="#">Antque Alcove Store</a>. All Rights Reserved. Designed by
                    <a class="text-white font-weight-bold" href="https://htmlcodex.com"> Saket Nema</a>
                </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
                <ul class="nav d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* Footer End */}
                </>);
            }
    });
    return(
        <>
            {FooterContent}
      </>
    );
}
export default Footer;