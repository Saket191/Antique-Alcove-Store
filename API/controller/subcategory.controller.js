import '../model/connection.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import subcatModel from '../model/subcategorymodel.js';


export var save = async(req,res,next)=>{
    var subcatDetails = req.body;
    var caticon =req.files.caticon;
    //console.log(subcatDetails);
     var subcatList = await subcatModel.find() 
     var l = subcatList.length;
     //console.log(l);
    var _id = l==0?1:subcatList[l-1]._id+1;
    var subcaticonnm = Date.now()+"-"+rs.generate()+"-"+caticon.name;
    subcatDetails={...subcatDetails,"_id":_id,"subcaticonnm":subcaticonnm};     
    console.log(subcatDetails);
    try{
        var data = await subcatModel.create(subcatDetails);
        var uploadpath = path.join(__dirname,"../../UI/public/assets/uploads/subcaticon",subcaticonnm);
        caticon.mv(uploadpath);
        return res.status(201).json({"Success":"data Added successfully"});
    }
    catch{
        return res.status(500).json({"err":"Server Error"});
    }
};

export var fetch = async(req,res,next)=>{

    var condition_obj=url.parse(req.url,true).query;
    //console.log(condition_obj);
    var subcatList = await subcatModel.find(condition_obj);
    
     var l = subcatList.length;
     //console.log(subcatList);
     //console.log(l);

    if(l!=0)
    {
        return res.status(201).json(subcatList);
    }
    else{
        return res.status(500).json({"error":"Data Not Found"});
    }

};
export var subcatDelete = async(req,res,next)=>{
    var condition_obj =req.body;
    //console.log(condition_obj);
     var subcate = await subcatModel.find(condition_obj);
     if(subcate.length!=0)
     {
        let result = await subcatModel.deleteMany(condition_obj);
        if(result)
        {
        return res.status(201).json({"Success":"data deleted Sucessfully"});
        }
        else{
            return res.status(500).json({"err":"server error"});
        }
     }
     else{
        return res.status(404).json({"error":"Not found"});
    
     }
};

export var subcatUpdate = async (req,res,next)=>{
var condition= JSON.parse(req.body.condition_obj);
var content = JSON.parse(req.body.content_obj);

let subcatDetails = await subcatModel.findOne(condition);
if(subcatDetails)
{
    var updateData = await subcatModel.updateOne(condition,{$set:content});
    if(updateData)
    return res.status(201).json({"success":"Updated Successfully"});
    else
    return res.status(500).json({"Error":"Server Error"});
}
else{
    return res.status(404).json({"error":"Not Found"});
}


};

