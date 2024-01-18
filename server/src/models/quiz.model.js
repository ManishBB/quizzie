import mongoose, { Schema, Types } from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  }
});

const quizSchema = new mongoose.Schema({
  questions: {
    type: [questionSchema],
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Quiz = mongoose.model('Quiz', quizSchema);

