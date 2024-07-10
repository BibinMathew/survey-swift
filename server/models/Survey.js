const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  questions: [
    {
      questionText: String,
      questionType: String,
      options: [String]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Survey', SurveySchema);
