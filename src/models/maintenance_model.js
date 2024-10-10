//
import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
  workshop: { //oficina
    type: Schema.Types.ObjectId, //referenciando a oficina onde a manutenção foi realizada
    required: true,
  },
  vehicle: { //veiculo
    type: Schema.Types.ObjectId, //ObjectId em referência ao Vehicle
    required: true,
  },
 services: [{ //serviços prestados //array de objetos com os serviços
       name: {
          type: String
        },
       price:  {
           type: Number
        }
 }],
 date: {
     type: Date,
    
 },
 totalCost: { //numero computado somar os serviços
     type: Number,

 }

});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;


