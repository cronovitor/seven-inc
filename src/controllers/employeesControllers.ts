import {Request, Response} from 'express';
import employees from '../employees';


//Retorna todos os empregados
export let allEmployees = (req: Request, res: Response) => {

  let allEmployees = employees.find((err: any, employee: any) =>{

    if(err) {

      res.send(err);

    } else {

      res.send(allEmployees);

    };

  });

};

//retorna empregado pela id

export let getEmploye = (req: Request, res: Response) => {

  employees.findById(req.params.id, (err: any, book: any) => {

    if(err){

      res.send(err);

    } else {

      res.send(employees);

    };

  });

};

//Insere um novo empregado

export let addEmploye = (req: Request, res: Response) => {

  let employee = new employees(req.body);

  employee.save((err: any) =>{

    if(err) {

      res.send(err);

    } else {

      res.send(employee);

    };

  });

};

//deletar um funcionario

export let deleteEmploye = (req: Request, res: Response) => {

  employees.deleteOne({_id: req.params.id}, (err:any) =>{

    if (err) {

      res.send(err);

    } else {

      res.send("Funcionario deletado com sucesso!");

    };

  });

};

//Editar um Funcionario

export let updateEmploye = (req: Request, res: Response) => {

  employees.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) =>{

    if(err) {

      res.send(err);

    } else {

      res.send("Dados do funcionario atualizados com sucesso!");

    };

  });

};