"use strict";
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/htmlRoutes")(app);

app.post("/contact", function(req, res) {
  console.log("data from the contact form: ", req.body);
  // sendgrid
  const { name, email, subject, message } = req.body;
  sgMail.setApiKey(process.env.SEND_GRID_API);
  const msg = {
    to: "newboldconstructionwebapp@gmail.com",
    from: email,
    subject: subject,
    text: message,
    html: "<strong>" + message + "</strong>"
  };
  sgMail.send(msg).then(result => {
    console.log("message sent \n", result);
    res.sendStatus(200);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
