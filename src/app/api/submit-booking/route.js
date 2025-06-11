import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

const db = await mysql.createConnection({
  
  host: "193.203.184.92",
  user: "u906396894_shivshreyas",
  password: "CreationsShreyasKshirsagar@123",
  database: "u906396894_blaze_olympia"
});

// 📧 Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devshreyas21@gmail.com", // your Gmail
    pass: "ueluvpytkbirtebf"    // Gmail App Password (not normal password!)
  }
});

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, court_name, booking_date, booking_time, sports, amount, payment_id } = body;

  try {
    const [result] = await db.execute(
      "INSERT INTO bookings (name, email, phone, court_name, booking_date, booking_time, sports, amount, payment_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, email, phone, court_name, booking_date, booking_time, sports, amount, payment_id]
    );

     // ✅ Define the table here
    const bookingDetailsTable = `
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Name</td><td>${name}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>Phone</td><td>${phone}</td></tr>
        <tr><td>Court</td><td>${court_name}</td></tr>
        <tr><td>Sport</td><td>${sports}</td></tr>
        <tr><td>Date</td><td>${booking_date}</td></tr>
        <tr><td>Time</td><td>${booking_time}</td></tr>
        <tr><td>Amount</td><td>${amount}</td></tr>
        <tr><td>Payment ID</td><td>${payment_id}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: '"Olympia Booking" <devshreyas21@gmail.com>',
      to: "shivrajrbabar14@gmail.com", // Replace with actual admin email
      subject: "New Sports Booking Received",
      html: `
        <h3>A new booking has been made!</h3>
        ${bookingDetailsTable}
      `
    });

     // 2️⃣ Send confirmation email to User
    await transporter.sendMail({
      from: '"Olympia Booking" <devshreyas21@gmail.com>',
      to: email,
      subject: "Your Sports Booking is Confirmed!",
      html: `
        <h3>Dear ${name},</h3>
        <p>Your booking was successful. Below are your details:</p>
        ${bookingDetailsTable}
        <p>We look forward to seeing you!</p>
      `
    });

    return new Response(JSON.stringify({ success: true, bookingId: result.insertId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Booking failed" }), {
      status: 500,
    });
  }
}
