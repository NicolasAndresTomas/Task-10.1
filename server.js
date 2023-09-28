const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

app.use(cors());
app.use(bodyParser.json());

// Handle when someone submits a form to send an email
app.post("/sendemail", (req, res) => {
  // Get the email address entered in the form
  const { email } = req.body;

  // Set up the email details
  const to = email;
  const from = "nicolas_tomas_andress@hotmail.com";
  const subject = "Welcome to DevLink Marketplace";
  const output = "Thank you for joining DevLink Marketplace. We are excited to have you on board!";

  // Send the email using function to send emails
  sendEmail(to, from, subject, output, (error, result) => {
    if (error) {
      console.log("Welcome Email Not Sent, Error Occurred:", error);
      res.status(500).json({ success: false, message: "Email not sent" });
    } else {
      console.log("Welcome Email Was Sent");
      res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
});

// ... other routes and middleware ...

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));