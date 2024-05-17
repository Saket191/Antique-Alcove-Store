import express from 'express';

const router = express.Router();

import * as reviewController from '../controller/review.controller.js';

router.post("/save",reviewController.save);
router.get("/fetch",reviewController.fetch);
// router.patch("/update",reviewController.updaterev);
// router.delete("/delete",reviewController.deleterev);


export default router;
