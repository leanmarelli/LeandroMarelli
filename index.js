const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", () => {
  resizeBy.send("welcome to my form");
});
/* 
app.post("/api/form", (req, res) => {
  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lmarelli17@gmail.com',
      password: 'kajulejemam'
    }
  })

  let mailOptions = {
    from: 'lmarelli17@gmail.com',
    to: 'lmarelli17@gmail.com',
    subject: `Message from ${data.name}`,
    html: `
    <h3> Informations </h3>

    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>Phone: ${data.tel}</li>
      <li>Message: ${data.message}</li>
    </ul>
    `
  } */

/*  smtpTransport.sendMail(mailOptions, (error, response) => {
   if (error) {
     res.send(error)
   }
   else {
     res.json('Success')
   }
 })

 smtpTransport.close();
}) */
app.post("/api/form", function (req, res) {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lmarelli17@gmail.com",
      pass: "kajulejemam",
    },
  });

  let mailOptions = {
    from: "lmarelli17@gmail.com",
    to: "marellilean@gmail.com",
    subject: `New message of ${req.body.name}`,
    /* text: "Email a contactar : " + req.body.email, */
    html: `
    <h3> Informations </h3>

    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.tel}</li>
    </ul>
    <h3> Message </h3>
      <li>${req.body.message}</li>
    
    `,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    res.json("funcionó");
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
