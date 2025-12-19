// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//   host: "smtp.ionos.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.NODEMAILER_USER,
//     pass: process.env.NODEMAILER_PASS,
//   },
//   tls: {
//     servername: "smtp.ionos.com",

//     rejectUnauthorized: false,
//   },
  
// });

// transporter.verify((error) => {
//   if (error) {
//     console.error("SMTP connection failed:", error.message);
//   } else {
//     console.log("✅ SMTP server is ready to send emails");
//   }
// });

// module.exports = transporter;
