import { Schema, model } from "mongoose";

// Facility Schema
const facilitySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zip: { type: String },
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  fax: { type: String },
});

const Facility = model("Facility", facilitySchema);
export default Facility;
