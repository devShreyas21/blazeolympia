import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devshreyas21@gmail.com",
      pass: "ueluvpytkbirtebf", // app password
    },
  });

  const htmlContent = `
    <h3>New Contact Form Submission</h3>
    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: '"Olympia Contact" <devshreyas21@gmail.com>',
      to: "shivrajrbabar14@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
