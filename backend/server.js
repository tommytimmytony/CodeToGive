require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const collection = require("./Schemas");
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api running");
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const check = await collection.findOne({ username: username });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const data = {
    username: username,
    password: password,
  };

  try {
    const check = await collection.findOne({ username: username });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
