import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

const db = await mysql.createConnection({
  host: "193.203.184.92",
  user: "u906396894_shivshreyas",
  password: "CreationsShreyasKshirsagar@123",
  database: "u906396894_blaze_olympia"
});

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devshreyas21@gmail.com",
    pass: "ueluvpytkbirtebf"
  }
});

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    email,
    phone,
    address,
    month,
    amount,
    sports_name,
    venue_name,
    payment_date,
    payment_time,
    payment_status,
    desired_start_date
  } = body;

  try {
    const [result] = await db.execute(
      `INSERT INTO coaching_enrollments 
       (name, email, phone, address, month, amount, sports_name, venue_name, payment_date, payment_time, payment_status, desired_start_date)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, address, month, amount, sports_name, venue_name, payment_date, payment_time, payment_status, desired_start_date]
    );

    const enrollmentDetails = `
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Name</td><td>${name}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>Phone</td><td>${phone}</td></tr>
        <tr><td>Address</td><td>${address}</td></tr>
        <tr><td>Month</td><td>${month}</td></tr>
        <tr><td>Amount</td><td>${amount}</td></tr>
        <tr><td>Sport</td><td>${sports_name}</td></tr>
        <tr><td>Venue</td><td>${venue_name}</td></tr>
        <tr><td>Payment Date</td><td>${payment_date}</td></tr>
        <tr><td>Payment Time</td><td>${payment_time}</td></tr>
        <tr><td>Payment Status</td><td>${payment_status}</td></tr>
        <tr><td>Desired Start Date</td><td>${desired_start_date}</td></tr>
      </table>
    `;

    // Email to admin
    await transporter.sendMail({
      from: '"Olympia Coaching" <devshreyas21@gmail.com>',
      to: "shivrajrbabar14@gmail.com",
      subject: "New Coaching Enrollment",
      html: `<h3>A new user has enrolled for coaching:</h3>${enrollmentDetails}`
    });

    // Email to enroller
    await transporter.sendMail({
      from: '"Olympia Coaching" <devshreyas21@gmail.com>',
      to: email,
      subject: "Your Coaching Enrollment is Confirmed!",
      html: `<h3>Hi ${name},</h3><p>Thank you for enrolling in coaching. Here are your details:</p>${enrollmentDetails}`
    });

    return new Response(JSON.stringify({ success: true, enrollmentId: result.insertId }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Enrollment failed" }), {
      status: 500
    });
  }
}
