import mongoose, { Schema, Types } from "mongoose";

const optionsSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  impressions: {
    correctAnswerCount: {
      type: Number,
      defaultValue: 0,
    },
    weongAnswerCount: {
      type: Number,
      defaultValue: 0,
    }
  }
});

const questionSchema = new mongoose.Schema({
  questionTitle: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  },
  options: {
    type: [optionsSchema],
    required: true
  }
});

const quizSchema = new mongoose.Schema({
  ownersEmail: {
    type: String,
    required: true
  },
  impressions: {
    type: Number,
    defaultValue: 0
  },
  quizName: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    required: true
  },
  timer: {
    type: Number,
    defaultValue: 0
  },
  questions: {
    type: [questionSchema],
    required: true
  },
});

export const Quiz = mongoose.model('Quiz', quizSchema);

