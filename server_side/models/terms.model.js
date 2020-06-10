/**
 * author: Denis Kravchenko
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Terms schema for MongoDB
const terms = new Schema({
  termName: {
    type: String,
    required: true,
  },
  termDescription: {
    type: String,
    required: true,
  },
});

const Terms = mongoose.model("Terms", terms);

module.exports = Terms;
