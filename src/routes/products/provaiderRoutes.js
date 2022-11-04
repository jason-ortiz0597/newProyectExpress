import { Router } from "express";
import {getProvaider,createProvaider,deleteProvaider} from "../../controllers/products/provaiderController.js";

const router = Router();

router.get("/list", getProvaider);
// router.get("/list/types", getTypesProvaider);
router.post("/create", createProvaider);
// router.post("/createTypeProvider/:id", createTypeProvider);
router.delete("/delete/:id", deleteProvaider);
// router.delete("/deleteTypeProvider/:id/:idType", deleteTypeProvider);


export default router;