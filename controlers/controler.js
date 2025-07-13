import express from "express";

import {customersInFrance , nameEmployeesToSpecialReports , productsClassicCars} from "../services/services.js";


//1
export async function getProdactByCountryFranch(req, res) {
    try{
    const result = await customersInFrance();
    res.status(200).json(result);
    }
    catch(Err){
        console.log('Error: CTRL - getProdactByCountryFranch' , Err);
    }
}

export async function getEmployeesToSpecialReports(req, res){
    try{
    const result = await nameEmployeesToSpecialReports();
    res.status(200).json(result);
    }
    catch(Err){
        console.log('Error: CTRL - getEmployeesToSpecialReports' , Err);
    }
}

export async function getproductsClassicCars(req, res){
    try{
    const result = await productsClassicCars();
    res.status(200).json(result);
    }
    catch(Err){
        console.log('Error: CTRL - getproductsClassicCars' , Err);
    }
}


// export const a = async (req, res) => {
//     const [rows] = await pool.query();
//     res.status(200).json({ rows });
// } 