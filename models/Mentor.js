const mongoose = require('mongoose')

const MentorSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    experience: { type: Number, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Mentor', MentorSchema)
