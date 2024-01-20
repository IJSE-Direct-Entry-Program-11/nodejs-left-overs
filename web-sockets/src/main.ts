import express from 'express';
import expressWs from "express-ws";
import {CustomerHttpController} from "./api/customer.http.controller.js";
import {CustomerWsHandler} from "./ws/customer.ws.handler.js";

const app = expressWs(express()).app;

app.use('/api/v1/customers', CustomerHttpController);
app.ws('/api/v1/customers', CustomerWsHandler);

app.listen(5050, ()=> console.log("Server is listening at 5050"));