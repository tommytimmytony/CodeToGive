const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
