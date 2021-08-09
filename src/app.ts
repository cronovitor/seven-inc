import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser'
import * as employeesControllers from './controllers/employeesControllers'

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());

app.get('/employees', employeesControllers.allEmployees);
app.get('/employees/:id', employeesControllers.getEmploye);
app.put('/employees', employeesControllers.addEmploye);
app.delete('/employees/:id', employeesControllers.deleteEmploye);
app.post('/employees/:id', employeesControllers.updateEmploye);

const server = app.listen(app.get("port"), () => {

  console.log("app esta rodando no http://localhost:%d", app.get("port"));

});
