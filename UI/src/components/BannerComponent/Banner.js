import './Banner.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Banner()
{
    const [BannerContent, setBannerContent]=useState();
    useEffect(()=>{
            if(localStorage.getItem("token")!=undefined)
            {
                    setBannerContent(<>
                    <b>Welcome: {localStorage.getItem("email")}</b>
                    </>);
            }
            else
            {
                    setBannerContent(<>
                     {/* Carousel Start */}
    <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assets/img/an1.jpeg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/an3.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/an4.jpeg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-primary rounded" style={{"width": "45px", "height": "45px"}}>
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-primary rounded" style={{"width": "45px", "height": "45px"}}>
                    <span class="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    {/* Carousel End */}
                    </>);
            }
    });
    return(
        <>
            {BannerContent}
        </>
    );
}
export default Banner;