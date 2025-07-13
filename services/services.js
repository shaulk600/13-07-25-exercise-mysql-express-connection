import pool from "../db/dbClassicModels.js";

import { config } from "dotenv";
config();

//1
export async function customersInFrance() {
    try{
    const [result] = await pool.query(`SELECT COUNT(*) FROM customers WHERE country LIKE('France')`);
    // console.log(result);
    return result;
    }
    catch(Err){
        console.log('Error: Services.js - customersInFrance ' , Err);
    }
}

//2
export async function nameEmployeesToSpecialReports() {
    try{
    const [result] = await pool.query(`SELECT firstName,lastName,reportsTo FROM employees WHERE reportsTo LIKE(1143)`);
    // console.log('result: ',result);
    return result;
    }
    catch(Err){
        console.log('Error: Services.js - nameEmployeesToSpecialReports ' , Err);
    }
}

//3
export async function productsClassicCars() {
    try{
    const [result] = await pool.query(`SELECT COUNT(*) FROM products WHERE productLine LIKE('Classic Cars')`);
    // console.log('1143: ' ,result);
    return result;
    }
    catch(Err){
        console.log('Error: Services.js - productsClassicCars ' , Err);
    }
}
