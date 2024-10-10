//Veículo
import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
    plate: { //placa
        type: String,
        required: true,
        unique: true,
        maxLength: 7,
        minLength: 7
      },
      model: { //modelo
        type: String,
        required: true
      },
      year: { //ano
        type: Number,
        required: true
      },
      owner:{ //proprietario do veiculo
        type: String,
        required: true
      },
      maintenances: { //todas as manutenções feitas em um veiculo
        type: [Schema.Types.ObjectId],
        ref: "Maintenance",
        required: false
      }
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
