import './AddProduct.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl,_subcategoryapiurl,_productapiurl } from '../../api_url';
function AddProduct(){
        const [output , setOutput] = useState();
        const [title , setTitle] =useState();
        const [category , setCategory] =useState([]);
        const [subcategory , setSubCategory] =useState([]);
        const [file , setFile] =useState();
        const [description , setDescription] =useState();
        const [cList , setCategorylist] = useState([]);
        const [cSubList , setSubCategorylist] = useState([]);
        useEffect(()=>{
            axios.get(_categoryapiurl+"fetch").then((res)=>{
                setCategorylist(res.data);
                console.log(cList);
            }).catch((err)=>{
                console.log(err);
            });
        },[]);
        const fetchSubCategory=(catnm)=>{
            setCategory(catnm);
            axios.get(_subcategoryapiurl+"fetch?catnm="+catnm).then((res)=>{
                setSubCategorylist(res.data);
                //console.log(cSubList);
            }).catch((err)=>{
                console.log(err);
            });
        };
    const handleChange=(event)=>{
            setFile(event.target.files[0]);
        };
    const handleSubmit=()=>{
        var formData = new FormData();
        formData.append('title',title);
        formData.append('catnm',category);
        formData.append('subcatnm',subcategory);
        formData.append('description',description);
        formData.append('uid',localStorage.getItem("email"));
        formData.append('picon',file);
        const config ={
                'content-type':'multipart/form-data'
        };
        var pDetails ={ "title":title, "category":category,"subcategory":subcategory,"description":description,"uid":localStorage.getItem("email")};
        axios.post(_productapiurl+"save",formData,config).then((res)=>{
            setTitle("");
            // setSubCatName("")
            // setCatName("");
            setDescription("");

            setOutput("Product Added Successfully");
    });
        
    };

    return(
        
        <>
         {/* About Start */}
    <div class="container py-5">
        <div class="row py-">
            <div class="col-lg-14 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3"></h4>
                <h4 class="text-secondary mb-3"></h4>
                  <h1 class="display-4 mb-4"><span class="text-primary">Add</span> Product <span class="text-secondary">Here</span></h1>
                  <font color="orange">{output}</font>
                <form>
                <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
  </div>
   <div class="form-group">
    <label for="category">Category:</label>
    <select  value={category} onChange={e=> fetchSubCategory(e.target.value)} class="form-control">
        <option >Select Category</option>
        {
            cList.map((row)=>(

                <option>{row.catnm}</option>
            ))
        }
        
    </select>
  </div>
  <div class="form-group">
    <label for="subcategory">Sub-Category:</label>
    <select class="form-control" value={subcategory} onChange={e=>setSubCategory(e.target.value)} >
        <option >Select Sub-Category</option>
        {
            cSubList.map((row)=>(

                <option>{row.subcatnm}</option>
            ))
        }
        
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Product Image:</label>
    <input type="file" class="form-control" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <textarea class="form-control" rows="5" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
  </div>
    <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
</form>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    );
}
export default AddProduct;
