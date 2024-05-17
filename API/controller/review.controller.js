import '../model/connection.js'
import reviewSchemamodel from '../model/reviewmodel.js';
import url from 'url';
//create data
export var save= async(req,res,next)=>{
    var reviewDetails=req.body;
    var reviewList = await reviewSchemamodel.find();
    var l= reviewList.length;
    var _id=l==0?1:reviewList[l-1]._id+1;
    // var feed_id=l==0?1:review[l-1].feed_id+1;

    reviewDetails={...reviewDetails,"_id":_id,"info":Date()};
    try{
        var data = await reviewSchemamodel.create(reviewDetails);
       res.status(201).json({"status":"data added successfully"});
    }
    catch(error){
        res.status(500).json({"error":false});
    }
};

//fetch data
export var fetch = async(req,res,next)=>{

var condition_obj = url.parse(req.url,true).query;
var reviewList = await reviewSchemamodel.find(condition_obj);
var l = reviewList.length;
if(l!=0)
{
    return res.status(201).json(reviewList);

} 
else{
    return res.status(500).json({"error":"server Error"});
}
};

//update

// export var updaterev = async(req,res,next)=>{

//     var condition = JSON.parse(req.body.condition_obj);
//     console.log(condition);
//     var content = JSON.parse(req.body.content_obj);
//     console.log(content);
//     let feedDetails = await feedSchemaModel.findOne(condition);
//     //console.log(feedDetails);
//     if(feedDetails)
//     {
//         let data = await feedSchemaModel.updateOne(condition,{$set:content});
//         if(data)
//         return res.status(201).json({"success":"data updated successfully"});
//         else
//         return res.staus(500).json({"error":"server error"});
//     }
//     else{
//         return res.status(404).json({"error":"data not found"});

//     }

// };

// //delete

// export var deleterev = async (req,res,next)=>{
//     var condition= req.body;
//     var dataFind =await feedSchemaModel.find(condition);
//     if(dataFind.length !=0)
//     {
//         var dataDelete = await feedSchemaModel.deleteMany(condition);
//         if(dataDelete)
//         return res.status(201).json({"success":"data deleted successfully"});
//         else
//         return res.status(500).json({"error":"server error"});
//     } 
//     else{
//         return res.status(404).json({"error":"source not found"});
//     }



// };

