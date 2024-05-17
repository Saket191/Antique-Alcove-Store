import '../model/connection.js';
import ProductSchemaModel from '../model/productmodel.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
/*import jwt from 'jsonwebtoken';*/


//for Create Record

export var save = async(req,res,next)=>{

var pDetails = req.body;
var picon=req.files.picon;

var pList = await ProductSchemaModel.find();
var l= pList.length;
var _id=l==0?1:pList[l-1]._id+1;
var piconnm = Date.now()+"-"+rs.generate()+"-"+picon.name;
pDetails = {...pDetails,"_id":_id,"piconnm":piconnm,"info":Date()};
try{
    var pro = await ProductSchemaModel.create(pDetails);
    var uploadpath =path.join(__dirname,"../../UI/public/assets/uploads/producticon",piconnm);
    picon.mv(uploadpath);
    res.status(201).json({"status":true});

}
catch(error)
{
res.status(500).json({"status":false});
}

};

export var fetch= async(req,res,next)=>{

var condition_obj = url.parse(req.url,true).query;
var pList = await ProductSchemaModel.find(condition_obj);
var l = pList.length;
if(l!=0)
{
    return res.status(201).json(pList);
}
else{
    return res.status(500).json({"error":"Data Not Found"})
}


 };


// export var deleteCat = async(req,res,next)=>{
//     var condition_obj = req.body;

//     var cate = await catSchemaModel.find(condition_obj);
//     //console.log(cate);

//     if(cate.length!=0)
//     {
//         let result = await catSchemaModel.deleteMany(condition_obj);
//         if(result)
//             return res.status(201).json({"status":"Success"});
//         else
//         return res.status(500).json({"Error":"Server Not Found"});
//     }
//     else
//     return res.status(404).json({"Error":"Resource Not Found"});


// };

// export var updateCat = async(req,res,next)=>{
//     var condition = JSON.parse(req.body.condition_obj);
//     var content = JSON.parse(req.body.content_obj);
//     //console.log(condition);
//     let catDetails = await catSchemaModel.findOne(condition);
//     //console.log(catDetails);
//     if(catDetails)
//     {
//         let cate = await catSchemaModel.updateOne(condition,{$set : content});
//         if(cate)
//         return res.status(201).json({"msg":"success"});
//         else
//         return res.status(500).json({"error":"server error"});

//     }
//     else{
//         return res.status(404).json({"error":"Request Not Found"});
//     }
// }; 
