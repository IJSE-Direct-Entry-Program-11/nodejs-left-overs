import express, {json} from 'express';
import {StudentHttpController} from "./api/student.http.controller.js";

const app = express();

app.use(json());

app.use('/api/v1/students', StudentHttpController);

app.listen(5050, ()=> console.log("Server is listening at 5050"));