
interface Values {
  email: string
  subject: string
  text: string
}

export async function SubmitContactForm(values: Values) {
  const nodemailer = require('nodemailer');

  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
  });

  await transporter.verify();
  console.log("Server is ready to take our messages");
}
