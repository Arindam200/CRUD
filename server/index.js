const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)

    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/getUser/:id", (req, res) => {
  UserModel.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running on port 3001");
});


