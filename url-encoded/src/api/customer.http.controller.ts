import {Router, Request, Response} from 'express';

const controller = Router();

controller.post('/', saveCustomer);

async function saveCustomer(req: Request, res: Response) {
    const customer = req.body;
    console.log(customer);
    res.sendStatus(201);
}

export {controller as CustomerHttpController};