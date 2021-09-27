const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  isbn: {
    type: String,
    require: true,
  },
  imagePath: {
    type: String,
    // require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Book", BookSchema);
