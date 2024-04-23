const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "PLease fill the name field."],
  },
  phone: {
    type: String,
    required: [true, "PLease fill the phone field."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "PLease fill the name field."],
    unique: true,
  },
  message: String,
});

const contactModel = mongoose.model("contactForm", contactSchema);

module.exports = contactModel;
