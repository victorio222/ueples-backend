import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or 'smtp-relay.sendinblue.com' for Brevo
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (to, link) => {
  const mailOptions = {
    from: `"Smart Hydroponic" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your Email",
    html: `
      <h2>Welcome to Smart Hydroponic System!</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${link}">${link}</a>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default {
  sendVerificationEmail,
};
