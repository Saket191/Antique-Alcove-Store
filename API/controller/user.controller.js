import '../model/connection.js';
import userSchemaModel from '../model/usermodel.js';//schema or validations
import sendMail from './email.controller.js';
import url from 'url';
import rs from 'randomstring';
import jwt from 'jsonwebtoken';


//for sending the data to client end
export var test = async(req,res,next)=>{
     return res.status(201).json({"status":true}); 
    };
//for create a record
export var save = async(req,res,next)=>{
 
var userDetails = req.body;

var userList = await userSchemaModel.find();

var l = userList.length;

var _id = l ==0?1:userList[l-1]._id+1;


userDetails = {...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
try{
var user = await userSchemaModel.create(userDetails);
sendMail(user.email,user.password);
 return res.status(201).json({"status":true}); 
}
catch(err){
    //console.log(err);
   return res.status(500).json({"status":false});
}

};


//Fetch the data from database(Select)
export var fetch = async(req,res,next)=>{
var condition_obj = url.parse(req.url,true).query;
//console.log(condition_obj);
var userList = await userSchemaModel.find(condition_obj);
var l = userList.length;
if(l!=0)
return res.status(201).json(userList);
else
return res. status(500).json({"result":"Server not Found"});

};
// to delete a record from database
export var deleteUser = async (req,res,next)=>{
var condition_obj = req.body;
//console.log(req.body);
var user = await userSchemaModel.find(condition_obj);
//console.log(user);

if(user.length!=0)
{
    let result = await userSchemaModel.deleteMany(condition_obj);
    if(result)
    return res.status(201).json({"status":"Success"});
    else
    return res.status(500).json({"Error": "Server Not Found"});
}
else
return res.status(404).json({"Error":"Resource Not Found"});


};
//if you want to update a record in database
export var updateUser = async (req,res,next)=>{
//console.log(req.body);
let userDetails= await userSchemaModel.findOne(req.body.condition_obj);
if(userDetails)
{
    try{
    let user = await userSchemaModel.findOneAndUpdate(req.body.condition_obj,{$set:req.body.content_obj},{
        new:true,//return the modified document after update
        runValidators : true, //Run Vailidators to ensure data validity
        context : 'query', //Ensure Validators run in update context
        upsert : false //do not create a new document if not found

    });
    if(user)
    return res.status(201).json({"msg":"Success"});
    else
    return res.status(500).json({"error":"server Error"});
    }
    catch(err){
        //console.log(err);
        return res.status(500).json({"error":"server Error"});

    }
}
else{
    return  res.status(404).json({"error":"Request Not Found"});
}


};


//login 
export var login = async (req,res,next)=>{
var userDetails = req.body;
console.log(userDetails);
userDetails = {...userDetails,"status":1};
var userList= await userSchemaModel.find(userDetails);
//console.log(userList.length);
var l= userList.length;
if(l!=0)
{
    var payload = {"subject":userList[0].email};
    var key = rs.generate();
    var token = jwt.sign(payload,key);
   return res.status(201).json({"token":token,"userDetails":userList[0]});

}
else
{
    return res.status(404).json({"error":"Incorrect email/password"});
}
};