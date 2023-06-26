const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.0:27017/myDB", {
  useNewUrlParser: true,
  
});

const studentSchema = new mongoose.Schema({
  name: String,
  reg: String,
  sub: String,
  branch: String,
  marks: Number,
});

const Student = mongoose.model("Student", studentSchema);

Student.insertMany([
  {
    name: "harsh",
    reg: 12345,
    sub: "hello",
    branch: "cese",
    marks: 23,
  },
  { name: "bansal", reg: 12345, sub: "hello", branch: "cese", marks: 34 },
]);


Student.find()
  .sort({ marks: 1 })
  .exec((err, students) => {
    if (err) {
      console.error("Error retrieving student records:", err);
      return;
    }

    // Handle the sorted student records
    console.log("Sorted student records:");
    students.forEach((student, index) => {
      console.log(
        `${index + 1}. ${student.name} (ID: ${student.id}) - Subject: ${
          student.sub
        }, Marks: ${student.marks}`
      );
    });
  });
