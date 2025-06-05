import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: 'rzp_test_K2K20arHghyhnD',
  key_secret: 'zWGSHaSFhvdLINfKYZPDiRx1',
});

export async function POST(request) {
  const body = await request.json();
  const { amount } = body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Order creation failed" }), {
      status: 500,
    });
  }
}
