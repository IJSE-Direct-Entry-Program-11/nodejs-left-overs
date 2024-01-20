import {Router, Request, Response} from "express";
import {StudentDTO} from "../dto/student.dto.js";
import {validateOrReject, ValidationError} from "class-validator";

const controller = Router();

controller.patch('/', saveStudent);

async function saveStudent(req: Request, res: Response) {
    try {
        const student = Object.assign(new StudentDTO(), req.body);
        await validateOrReject(student);
        console.log(student);
        res.sendStatus(201);
    }catch (error){
        console.log(error);
        if (Array.isArray(error) && error[0] instanceof ValidationError) res.status(400).json(error.map(e => e.constraints));
        else res.sendStatus(500);
    }
}

export {controller as StudentHttpController};