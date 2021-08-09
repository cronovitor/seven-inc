import * as mongoose from "mongoose";

// const uri: string = "mongodb://127.0.0.1:27017/local";

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cronovitor:<0708Cronovitor>@cluster0.uebb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const uri: string = "mongodb://127.0.0.1:27017/local"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err: any) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect(uri, (err: any) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Successfully Connected!");
//   }
// });

export interface employees extends mongoose.Document {
  id: Number;
  name: String;
  bornDate: Date;
  salary: |Number;
  position: String;
}


export const employeesSchema = new mongoose.Schema({

  id: {type:Number, require: true},
  name: {type:String, require: true},
  bornDate: {type:Date, require: true},
  salary: {type:Number, require: true},
  position: {type:String, require: true}

});

const employeModel = 

const employees = mongoose.model('employees', employeesSchema); 

export default employees;