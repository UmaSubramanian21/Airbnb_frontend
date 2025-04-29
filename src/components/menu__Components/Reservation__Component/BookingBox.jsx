
import axios from "axios";
import { useEffect } from "react";

export default function BookingBox() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const booking_details = {
    Place: "India",
    Guests: 5,
    Days: 7,
    amount: 7000
  };

  const handleReserve = async () => {
    try {
      const { data } = await axios.post('http://localhost:7000/payment/api', {
        amount: booking_details.amount
      });
      initPayment(data);
    } catch (err) {
      alert("Error creating order. Check console.");
      console.error(err);
    }
  };

  const initPayment = (orderData) => {
    const options = {
      key: 'rzp_test_8znbbFdn6mpjv8',
      amount: orderData.amount,
      currency: orderData.currency,
      description: 'Booking Payment',
      order_id: orderData.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment Success:", response);
        // Optional: Send confirmation to backend
      },
      theme: {
        color: '#3399cc'
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="border p-6 rounded-xl shadow-lg sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl font-bold">7000 Rs</span> <span className="text-gray-600">/ night</span>
        </div>
        <div className="text-sm text-rose-500 font-semibold">★ 4.85 (120 reviews)</div>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <input type="date" className="border p-2 rounded-md" />
        <input type="date" className="border p-2 rounded-md" />
        <input type="number" min="1" placeholder="Guests" className="border p-2 rounded-md" />
      </div>
      <button
        onClick={handleReserve}
        className="bg-rose-500 text-white w-full py-3 rounded-lg hover:bg-rose-600 transition">
        Reserve
      </button>
    </div>
  );
}
