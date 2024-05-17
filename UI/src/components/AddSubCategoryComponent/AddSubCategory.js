import './AddSubCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl,_subcategoryapiurl } from '../../api_url';

function AddSubCategory(){
    const [catName, setCatName] = useState('');
    const [subCatName, setSubCatName]=useState('');
    const [file , setFile]=useState();
    const [output , setOutput] =useState('');
    const [cList, setCategoryList]=useState([]);
    useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((res)=>{
            console.log(res.data);
                setCategoryList(res.data);
        }).catch((err)=>{
            console.log(err);
        });

    });
    const handleChange=(event)=>{
            setFile(event.target.files[0]); 
    };
    const handleSubmit=(event)=>{
        //event.preventDefault();
        var formData = new FormData();
        formData.append('catnm',catName);
        formData.append('subcatnm',subCatName);
        formData.append('caticon',file);
        const config ={
                'content-type':'multipart/form-data'
        };
        axios.post(_subcategoryapiurl+"save",formData,config).then((res)=>{
                setSubCatName("")
                setCatName("");
                setOutput("Sub-Category Added Successfully");
        });
    };
    return(
        
        <>
         {/* About Start */}
    <div class="container py-5" id='/addsubcategory'>
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3"></h4>
                <h1 class="display-4 mb-4"><span class="text-primary">Add</span> Sub-Category <span class="text-secondary">Here!!!</span></h1>
                <font color="blue">{output}</font>
                <form>
  <div  class="form-group">
    <label for="category">Category Name:</label>
   <select class="form-control" value={catName} onChange={e=>setCatName(e.target.value)}>
    <option>Select Category</option>
        { cList.map((row)=>(
                <option>{ row.catnm} </option>
        ))
        }
   </select>
  </div>
  <div  class="form-group">
    <label for="subcategory">Sub-Category Name:</label>
    <input type="text" class="form-control" value={subCatName} onChange={e=>setSubCatName(e.target.value)} />
  </div>
  
  <div class="form-group">
    <label for="file">Sub-Category Image:</label>
    <input type="file" class="form-control" onChange={handleChange}/>
  </div>
  <br/>
  
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Add Sub-Category</button>
</form>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default AddSubCategory;
