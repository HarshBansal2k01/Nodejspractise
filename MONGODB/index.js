const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submitted", (req, res) => {
//   var fname = req.body.fname;
//   var lname = req.body.lname;

//   res.send("Your Name " + fname + " " + lname);

mongoose
  .connect("mongodb://0.0.0.0:27017/Cardb", { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const carSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  rating: Number,
});

const Car = mongoose.model("Car", carSchema);

const car = new Car({
  firstName: req.body.fname,
  lastName: req.body.lname,
  rating: 8,
});

car.save();
res.send("<h1>Submitted</h1>")
res.end()

});

app.listen(3000, () => {
  console.log("listening on 3000");
});
