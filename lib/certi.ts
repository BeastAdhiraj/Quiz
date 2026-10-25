import mongoose, {
  Document,
  Model,
  Schema,
} from "mongoose";

export interface Icerti extends Document {
  name: string;
  certificate: string;
  createdAt: Date;
  updatedAt: Date;
}

const CertiSchema = new Schema<Icerti>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    certificate: {
      type: String,
      required: [true, "Certificate is required"],
    },
    },

  

  {
    timestamps: true,
  }
);

const Certi: Model<Icerti> =
  mongoose.models.Certi ||
  mongoose.model<Icerti>("Certi", CertiSchema);

export default Certi;
