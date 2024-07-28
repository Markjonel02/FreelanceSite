import express from "express";
import emailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const email_account = import.meta.env.VITE_EMAIL_ADDRESS;
const email_password = import.meta.env.VITE_EMAIL_PASSWORD;
const app = express();
const port = 5000;

//Middelware
app.use(bodyParser.json);
app.use(cors());

// POST route to send email
app.post("/send-email", (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  // Create a transporter object
  const transporter = emailer.createTransport({
    service: "gmail", // Use your email service
    auth: {
      user: email_account,
      pass: email_password,
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: "itsmepiglet05@gmail.com",
    subject: `Contact form submission from ${firstname},${lastname}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
