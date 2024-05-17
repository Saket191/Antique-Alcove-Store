import express from 'express';


const productRouter = express.Router();
import * as productController from '../controller/product.controller.js';


productRouter.post("/save",productController.save);
productRouter.get("/fetch",productController.fetch);
// productRouter.delete("/delete",productController.deletepro);
// productRouter.patch("/update",productController.updatepro);
export default productRouter;



