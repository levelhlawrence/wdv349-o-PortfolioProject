import { connect } from "mongoose";

const database = async () => {
  try {
    await connect(process.env.DB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
export default database;
