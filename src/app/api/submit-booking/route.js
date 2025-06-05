import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "court_booking",
});

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, court_name, booking_date, booking_time, payment_id } = body;

  try {
    const [result] = await db.execute(
      "INSERT INTO bookings (name, email, phone, court_name, booking_date, booking_time, payment_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, email, phone, court_name, booking_date, booking_time, payment_id]
    );

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
