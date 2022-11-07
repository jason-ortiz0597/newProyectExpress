import { Router } from "express";
import fileUpload from 'express-fileupload';
import {getProvaider,createProvaider,deleteProvaider} from "../../controllers/products/provaiderController.js";


const router = Router();

router.get("/list", getProvaider);
router.post("/create", fileUpload({ useTempFiles: true, tempFileDir: './tmp'}), createProvaider);
router.delete("/delete/:id", deleteProvaider);



export default router;