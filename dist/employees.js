"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesSchema = void 0;
var mongoose = __importStar(require("mongoose"));
// const uri: string = "mongodb://127.0.0.1:27017/local";
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://cronovitor:<0708Cronovitor>@cluster0.uebb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const uri: string = "mongodb://127.0.0.1:27017/local"
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
    var collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
exports.employeesSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    bornDate: { type: Date, require: true },
    salary: { type: Number, require: true },
    position: { type: String, require: true }
});
var employeModel = ;
var employees = mongoose.model('employees', exports.employeesSchema);
exports.default = employees;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZW1wbG95ZWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUM7QUFFckMseURBQXlEO0FBRWpELElBQUEsV0FBVyxHQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBdkIsQ0FBd0I7QUFDM0MsSUFBTSxHQUFHLEdBQUcsa0hBQWtILENBQUM7QUFDL0gsdURBQXVEO0FBQ3ZELElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtJQUN0QixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBbUJVLFFBQUEsZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVqRCxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7SUFDaEMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDO0lBQ2xDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQztJQUNwQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7SUFDcEMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDO0NBRXZDLENBQUMsQ0FBQztBQUVILElBQU0sWUFBWSxHQUVsQixBQUZvQixDQUFBO0FBRXBCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLHVCQUFlLENBQUMsQ0FBQztBQUUvRCxrQkFBZSxTQUFTLENBQUMifQ==