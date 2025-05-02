import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  performedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  notes: { required: true, type: String },
  startedAt: { type: Date, default: Date.now() },
  timeIn: String,
  completedAt: Date,
  timeSpentHours: Number,
});

const Tasks = model("WorkOrder", taskSchema);
export default Tasks;
