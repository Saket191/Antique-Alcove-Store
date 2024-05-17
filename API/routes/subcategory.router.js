import express from 'express';

const subcatRouter = express.Router();
import * as subcatController from '../controller/subcategory.controller.js';
subcatRouter.post("/save",subcatController.save);
subcatRouter.get("/fetch",subcatController.fetch);
subcatRouter.delete("/delete",subcatController.subcatDelete);
subcatRouter.patch("/update",subcatController.subcatUpdate);
export default subcatRouter;