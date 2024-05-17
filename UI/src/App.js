import './App.css';
import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import Banner from './components/BannerComponent/Banner'
import Content from './components/ContentComponent/Content';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Logout from './components/LogoutComponent/Logout';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import Manageusers from './components/ManageusersComponent/Manageusers';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import ViewProduct from './components/ViewProductComponent/ViewProduct';
import Taskusers from './components/TaskComponent /Taskusers';
import Userhome from './components/UserhomeComponent/Userhome';
import VPCategory from './components/VPCategoryComponent/VPCategory';
import VPSubCategory from './components/VPSubCategoryComponent/VPSubCategory';
import VProduct from './components/VProductComponent/VProduct';
import ViewReview from './components/ViewReviewComponent/ViewReview';
import AddProduct from './components/AddProductComponent/AddProduct';
import CPUser from './components/CPUserComponent/CPUser';
import EPUser from './components/EPUserComponent/EPUser';
import Footer from './components/FooterComponent/Footer';
import { Routes, Route } from 'react-router-dom';
import Review from './components/ReviewComponent/Review';
import VProductReview from './components/VProductReviewComponent/VProductReview';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/admin' element={<Adminhome/>}></Route>
        <Route path='/manageusers' element={<Manageusers/>}></Route>
        <Route path='/addcategory' element={<AddCategory/>}></Route>
        <Route path='/addsubcategory' element={<AddSubCategory/>}></Route>
        <Route path='/viewproduct' element={<ViewProduct/>}></Route>
        <Route path='/addreview/:_id' element={<Review/>}></Route>
        <Route path='/cpadmin' element={<CPAdmin/>}></Route>
        <Route path='/epadmin' element={<EPAdmin/>}></Route>
        <Route path='/taskusers' element={<Taskusers/>}></Route>
        <Route path='/user' element={<Userhome/>}></Route>
        <Route path='/vpcategory' element={<VPCategory/>}></Route>
        <Route path='/viewproductreview/:_id' element={<VProductReview/>}></Route>        
        <Route path='/vpsubcategory/:catnm' element={<VPSubCategory/>}></Route>
        <Route path='/vproduct/:subcatnm' element={<VProduct/>}></Route>        
        <Route path='/viewreview' element={<ViewReview />}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/cpuser' element={<CPUser/>}></Route>
        <Route path='/epuser' element={<EPUser/>}></Route>
      </Routes>
      <Footer />


    

      {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

    

    


    

    
    

    </>

    
   
  );
}

export default App;
