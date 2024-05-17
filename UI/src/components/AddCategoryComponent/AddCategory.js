import './AddCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../api_url';

function AddCategory(){
    const [catName, setCatName] = useState();
    //const [catIcon, setCatIcon]=useState();
    const [file , setFile]=useState();
    const [output , setOutput] =useState();
    const handleChange=(event)=>{
            setFile(event.target.files[0]); 
    };
    const handleSubmit=(event)=>{
        //event.preventDefault();
        var formData = new FormData();
        formData.append('catnm',catName);
        formData.append('caticon',file);
        const config ={
                'content-type':'multipart/form-data'
        };
        axios.post(_categoryapiurl+"save",formData,config).then((res)=>{
                setCatName("");
                setOutput("Category Added Successfully");
        });
    };
    return(
        
        <>
         {/* About Start */}
    <div class="container py-5" id='/addcategory'>
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Add</span> Category <span class="text-secondary">Here!!!</span></h1>
                <font color="blue">{output}</font>
                <form>
  <div  class="form-group">
    <label for="category">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e=>setCatName(e.target.value)} />
  </div>
  
  <div class="form-group">
    <label for="file">Category Image:</label>
    <input type="file" class="form-control" onChange={handleChange}/>
  </div>
  <br/>
  
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Add Category</button>
</form>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default AddCategory;
