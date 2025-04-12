import { Schema, model } from "mongoose";

// Facility Schema
const facilitySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  fax: { type: String, required: true },
});

const Facility = model("Facility", facilitySchema);
export default Facility;
