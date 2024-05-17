import express from 'express';


const catRouter = express.Router();
import * as catController from '../controller/category.controller.js';


catRouter.post("/save",catController.save);
catRouter.get("/fetch",catController.fetch);
catRouter.delete("/delete",catController.deleteCat);
catRouter.patch("/update",catController.updateCat);
export default catRouter;



