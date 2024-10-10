// Oficina

import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: { //nome da oficina
    type: String,
    required: true,
  },
  adress: { //endereço
    type: String,
    required: true,
  },
  specialties:{ //especialidades
    type: String,
    enum: ["MOTOR","FREIOS","SUSPENSÃO"],
    required: true
  },

  maintenances: { //manutenção
    type: [Schema.Types.ObjectId],//Um array de ObjectID referenciando a manutenção
    required: false,
    ref: "Maintenance"
  }

});

const Workshop = model("Workshop", workshopSchema);

export default Workshop;
