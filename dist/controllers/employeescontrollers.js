"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmploye = exports.deleteEmploye = exports.addEmploye = exports.getEmploye = exports.allEmployees = void 0;
var employees_1 = __importDefault(require("../employees"));
//Retorna todos os empregados
var allEmployees = function (req, res) {
    var allEmployees = employees_1.default.find(function (err, employee) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(allEmployees);
        }
        ;
    });
};
exports.allEmployees = allEmployees;
//retorna empregado pela id
var getEmploye = function (req, res) {
    employees_1.default.findById(req.params.id, function (err, employee) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(employees_1.default);
        }
        ;
    });
};
exports.getEmploye = getEmploye;
//Insere um novo empregado
var addEmploye = function (req, res) {
    var employee = new employees_1.default(req.body);
    employee.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(employee);
        }
        ;
    });
};
exports.addEmploye = addEmploye;
//deletar um funcionario
var deleteEmploye = function (req, res) {
    employees_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Funcionario deletado com sucesso!");
        }
        ;
    });
};
exports.deleteEmploye = deleteEmploye;
//Editar um Funcionario
var updateEmploye = function (req, res) {
    employees_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Dados do funcionario atualizados com sucesso!");
        }
        ;
    });
};
exports.updateEmploye = updateEmploye;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzQ29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9lbXBsb3llZXNDb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyREFBcUM7QUFHckMsNkJBQTZCO0FBQ3RCLElBQUksWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFFcEQsSUFBSSxZQUFZLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLEVBQUUsUUFBYTtRQUV4RCxJQUFHLEdBQUcsRUFBRTtZQUVOLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFZjthQUFNO1lBRUwsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUV4QjtRQUFBLENBQUM7SUFFSixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQztBQWhCUyxRQUFBLFlBQVksZ0JBZ0JyQjtBQUVGLDJCQUEyQjtBQUVwQixJQUFJLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBRWxELG1CQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLFFBQWE7UUFFeEQsSUFBRyxHQUFHLEVBQUM7WUFFTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRWY7YUFBTTtZQUVMLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1NBRXJCO1FBQUEsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBaEJTLFFBQUEsVUFBVSxjQWdCbkI7QUFFRiwwQkFBMEI7QUFFbkIsSUFBSSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUVsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1FBRXJCLElBQUcsR0FBRyxFQUFFO1lBRU4sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUVmO2FBQU07WUFFTCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBRXBCO1FBQUEsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBbEJTLFFBQUEsVUFBVSxjQWtCbkI7QUFFRix3QkFBd0I7QUFFakIsSUFBSSxhQUFhLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUVyRCxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFFLFVBQUMsR0FBTztRQUVoRCxJQUFJLEdBQUcsRUFBRTtZQUVQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFZjthQUFNO1lBRUwsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBRS9DO1FBQUEsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBaEJTLFFBQUEsYUFBYSxpQkFnQnRCO0FBRUYsdUJBQXVCO0FBRWhCLElBQUksYUFBYSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFFckQsbUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFFdkUsSUFBRyxHQUFHLEVBQUU7WUFFTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRWY7YUFBTTtZQUVMLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQztTQUUzRDtRQUFBLENBQUM7SUFFSixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQztBQWhCUyxRQUFBLGFBQWEsaUJBZ0J0QiJ9