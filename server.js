const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true,
}));
mongoose.connect("mongodb://localhost:27017/studentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const studentSchema = mongoose.Schema({
  name: String,
  branch: String,
  email: String,
  password: String
});

const Student = mongoose.model("Student", studentSchema);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
})
app.post("/", function(req, res) {
  Student.findOne({
    email: req.body.email
  }, function(err, foundStudent) {
    if (err) {
      console.log(err);
    } else {

      if (foundStudent) {
        res.send("Your mail id is already registered with us");
      } else {

        var newStudent = new Student({
          name: req.body.name,
          branch: req.body.branchname,
          email: req.body.email,
          password: req.body.password
        })
        newStudent.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Hey Now you are successfully registered with us");
          }
        });
      }
    }
  });
  //console.log(req.body.name+" "+req.body.branchname+" "+req.body.email+" "+req.body.pass+" "+req.body.passconfirm);
})
app.listen(3000, function() {
  console.log("Server is Ready To Run");
})
