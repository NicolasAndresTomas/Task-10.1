require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    text,
  };

  sgMail.send(msg, function (err, result) {
    if (err) {
      console.log("Welcome Email Not Sent Error Occured");
    } else {
      console.log("Welcome Email Was Sent");
    }
  });
};

module.exports = sendEmail;