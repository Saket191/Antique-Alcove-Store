import express from 'express';
 
const router = express.Router();

import * as userConroller from '../controller/user.controller.js';

// send data to UI
// router.get("/test",userConroller.test);


router.post("/save",userConroller.save);  
router.get("/fetch",userConroller.fetch);
router.delete("/delete",userConroller.deleteUser);
router.patch("/update",userConroller.updateUser);
router.post("/login",userConroller.login);



export default router;