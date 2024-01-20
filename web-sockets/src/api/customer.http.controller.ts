import {Router, Request, Response} from "express";

const controller = Router();

controller.post('/', saveCustomer);

async function saveCustomer(req: Request, res: Response) {
    res.status(201).send('<h1>Saved Customer</h1>');
}

export {controller as CustomerHttpController};