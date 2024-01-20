import {Router, Request, Response} from "express";
import multer from 'multer';
import fs from 'node:fs/promises';
import * as path from "path";

const controller = Router();
const multipart = multer();

// multipart.none()
// multipart.single('field name') -> req.file
// multipart.array('field name') -> req.files
// multipart.any() -> req.files['field name']

controller.post('/',multipart.single('picture'), saveEmployee);

async function saveEmployee(req: Request, res: Response){
    const employee = req.body;
    console.log(employee);
    console.log(req.file);
    const filePath = path.resolve(process.cwd(), "uploads", req.file?.originalname!);
    try{
        await fs.writeFile(filePath, req.file?.buffer!);
        res.sendStatus(201);
    }catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}

export {controller as EmployeeHttpController};