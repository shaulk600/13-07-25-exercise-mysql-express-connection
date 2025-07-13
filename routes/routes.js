import express from "express";
import {getProdactByCountryFranch , getEmployeesToSpecialReports , getproductsClassicCars } from "../controlers/controler.js";


const router = express.Router();


router.get('/question1', getProdactByCountryFranch);
router.get('/question2', getEmployeesToSpecialReports);
router.get('/question3', getproductsClassicCars);

router.use((req,res) =>{
    res.status(404).json({msg: 'the path is not found'})
})
export default router;





