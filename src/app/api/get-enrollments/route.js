import mysql from "mysql2/promise";

export async function GET() {
  const db = await mysql.createConnection({
    host: "193.203.184.92",
    user: "u906396894_shivshreyas",
    password: "CreationsShreyasKshirsagar@123",
    database: "u906396894_blaze_olympia"
  });

  try {
    const [rows] = await db.execute("SELECT * FROM coaching_enrollments ORDER BY created_at DESC");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch enrollments" }), { status: 500 });
  }
}
