const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  age: Number,
});

const Schema = mongoose.model("schema", schema);

module.exports = Schema;
