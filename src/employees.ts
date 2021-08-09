import * as mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Conectado com sucesso!");
  }
});

export interface employees extends mongoose.Document {
  id: number;
  name: string;
  bornDate: Date;
  salary: number;
  position: string;
}


export const employeesSchema = new mongoose.Schema({

  id: {type:Number, require: true},
  name: {type:String, require: true},
  bornDate: {type:Date, require: true},
  salary: {type:Number, require: true},
  position: {type:String, require: true}

});

const employees = mongoose.model<employees>('employees', employeesSchema);

export default employees;