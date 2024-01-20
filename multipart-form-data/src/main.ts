import express from 'express';
import {EmployeeHttpController} from "./api/employee.http.controller.js";

const app = express();

app.use('/api/v1/employees', EmployeeHttpController);

app.listen(5050, () => console.log("Server is listening at 5050"));