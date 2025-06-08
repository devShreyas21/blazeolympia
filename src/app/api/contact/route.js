import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devshreyas21@gmail.com",
      pass: "ueluvpytkbirtebf" // app-specific password
    }
  });

  const htmlContent = `
    <h3>New Contact Query</h3>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: '"Olympia Contact" <devshreyas21@gmail.com>',
      to: "shivrajrbabar14@gmail.com", // Admin
      subject: "New Contact Form Submission",
      html: htmlContent
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
