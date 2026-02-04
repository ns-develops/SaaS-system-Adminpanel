const mongoose = require("mongoose");

// Todo schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Task schema
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
    dueDate: { type: Date, required: true }, // saknade kolon
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // extra ] borttagen
    attachments: [{ type: String }], // fixad syntax
    todoChecklist: [todoSchema],
    progress: { type: Number, default: 0 }, // fixad default-syntax
  },
  { timestamps: true }
);


module.exports = mongoose.model("Task", taskSchema);
