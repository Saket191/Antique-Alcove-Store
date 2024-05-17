import './Header.css';
function Header(){
    
    return(

        <>
    {/* Topbar Start */}
    <div class="container-fluid">
        <div class="row bg-secondary py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white pr-3" href="">FAQs</a>
                    <span class="text-white">|</span>
                    <a class="text-white px-3" href="">Help</a>
                    <span class="text-white">|</span>
                    <a class="text-white pl-3" href="">Support</a>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-3" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-3" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div  class="row py-3 px-lg-5" id='/'>
            <div class="col-lg-4">
                <a href="" class="navbar-brand d-none d-lg-block">
                    <h1 class="m-0 display-5 text-capitalize"><span class="text-primary"> Atnique  Alcove</span> Store</h1>
                </a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    
                    <div class="d-inline-flex flex-column text-center px-4 border-right">
                        <h6>Email Us</h6>
                        <p class="m-0">sample@antiquealcovestore.com</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center pl-4">
                        <h6>Call Us</h6>
                        <p class="m-0">+91 XXX-XXX-XXXX</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
  </>
  );
}
export default Header;