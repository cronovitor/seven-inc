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
var uri = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Conectado com sucesso!");
    }
});
exports.employeesSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    bornDate: { type: Date, require: true },
    salary: { type: Number, require: true },
    position: { type: String, require: true }
});
var employees = mongoose.model('employees', exports.employeesSchema);
exports.default = employees;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZW1wbG95ZWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUM7QUFFckMsSUFBTSxHQUFHLEdBQVcsaUNBQWlDLENBQUM7QUFFdEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQzdCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUN2QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBV1UsUUFBQSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRWpELEVBQUUsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQztJQUNoQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7SUFDbEMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQztJQUNwQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7Q0FFdkMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBWSxXQUFXLEVBQUUsdUJBQWUsQ0FBQyxDQUFDO0FBRTFFLGtCQUFlLFNBQVMsQ0FBQyJ9