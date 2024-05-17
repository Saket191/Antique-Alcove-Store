import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();

import userRouter from './routes/user.router.js';
import catRouter from './routes/category.router.js';
import subcatRouter from './routes/subcategory.router.js';
import reviewRouter from './routes/review.router.js';
import productRouter from './routes/product.router.js';

//to extract body data from request(POST, PUT, DELETE, PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//to allow cors request
app.use(cors());


// to allow file input
app.use(fileUpload());



//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",catRouter);
app.use("/subcategory",subcatRouter);
app.use("/product",productRouter);
app.use("/review",reviewRouter);


app.listen(3001);
console.log("Server Invoked at link http://localhost:3001");