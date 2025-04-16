import { Schema, model } from "mongoose";

// User Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  techId: { type: Number, unique: true },
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  address: String,
  city: String,
  state: String,
  country: String,
  zip: String,
  dateOfBirth: Date,
  phone: Number,
  role: String,
});

const User = model("User", userSchema);
// Export the User model
export default User;
