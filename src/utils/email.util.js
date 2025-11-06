// utils/email.js
import nodemailer from 'nodemailer';

export async function sendInvitationEmail(email, token) {
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: { user: "your@email.com", pass: "password" }
  });

  const invitationLink = `https://your-system.com/register?token=${token}`;

  await transporter.sendMail({
    from: '"URDS System" <no-reply@urds.com>',
    to: email,
    subject: "You are invited to join URDS",
    html: `<p>You have been invited! Click <a href="${invitationLink}">here</a> to create your account.</p>`
  });
}
