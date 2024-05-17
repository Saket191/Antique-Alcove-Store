import './Review.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { _productapiurl, _reviewapiurl } from '../../api_url';
function Review(){
        const [output , setOutput] = useState();
        const [title , setTitle] =useState();
        const [description, setDescription]=useState();
        const [userid, setUserid] =useState();
        const params =useParams();
        // console.log(params._id);
        useEffect(()=>{
            axios.get(_productapiurl+"fetch?_id="+params._id).then((res)=>{
                // setCategorylist(res.data);
               setTitle(res.data[0].title);
               setUserid(res.data[0].uid);
            }).catch((err)=>{
                console.log(err);
            });
        },[]);
    //     const fetchSubCategory=(catnm)=>{
    //         setCategory(catnm);
    //         axios.get(_subcategoryapiurl+"fetch?catnm="+catnm).then((res)=>{
    //             setSubCategorylist(res.data);
    //             //console.log(cSubList);
    //         }).catch((err)=>{
    //             console.log(err);
    //         });
    //     };
    // 
    const handleSubmit=()=>{
        var formData = new FormData();
        formData.append('pid',params._id);
        formData.append('description',description);
        formData.append('user_id',userid);
        
        //var rDetails ={"description":description,"user_id":localStorage.getItem("email")};
        axios.post(_reviewapiurl+"save",formData).then((res)=>{
            setTitle("");
            // setSubCatName("")
            // setCatName("");
            setDescription("");

            setOutput("Review Added Successfully");
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
                  <h1 class="display-4 mb-4"><span class="text-primary">Add</span> Product <span class="text-secondary"> Review </span>Here</h1>
                  <font color="orange">{output}</font>
                <form>
                <div class="form-group">
    <label for="title" value>Title:</label>
    <input type="text" disabled class="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="review">Review:</label>
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
export default Review;
