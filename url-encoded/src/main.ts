import express, {json, urlencoded} from 'express';
import {CustomerHttpController} from "./api/customer.http.controller.js";

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use('/api/v1/customers', CustomerHttpController);

app.listen(5050, ()=> console.log("Server is listening at 5050"));