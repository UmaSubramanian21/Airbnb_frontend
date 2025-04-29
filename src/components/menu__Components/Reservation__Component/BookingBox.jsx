
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookingBox() {
  // Get place details passed from navigation
  const location = useLocation();
  const place = location.state;

  // Define state for dates, guests, total amount, and number of days
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [totalAmount, setTotalAmount] = useState(place?.price || 0);
  const [days, setDays] = useState(1);

  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Calculate number of days between check-in and check-out
  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = e - s;
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 1;
  };

  // Update total amount whenever dates or guests change
  const updateTotal = (inDate, outDate, guestCount) => {
    if (!inDate || !outDate || !place?.price) return;
    const d = calculateDays(inDate, outDate);
    setDays(d);
    setTotalAmount(d * place.price * guestCount);
  };

  // Handle change in check-in date
  const handleCheckInChange = (e) => {
    const value = e.target.value;
    setCheckInDate(value);
    updateTotal(value, checkOutDate, guests);
  };

  // Handle change in check-out date
  const handleCheckOutChange = (e) => {
    const value = e.target.value;
    setCheckOutDate(value);
    updateTotal(checkInDate, value, guests);
  };

  // Handle change in guest count
  const handleGuestChange = (e) => {
    const value = parseInt(e.target.value);
    setGuests(value);
    updateTotal(checkInDate, checkOutDate, value);
  };

  // Prepare booking details for payment
  const booking_details = {
    Place: place?.name || "Unknown",
    Guests: guests,
    Days: days,
    amount: totalAmount
  };

  // Handle Reserve button click and create Razorpay order
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

  // Initialize Razorpay payment with order details
  const initPayment = (orderData) => {
    const options = {
      key: 'rzp_test_8znbbFdn6mpjv8',
      amount: orderData.amount,
      currency: orderData.currency,
      description: `Booking at ${place.name}`,
      order_id: orderData.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment Success:", response);
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
      {/* Display price per night and rating */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl font-bold">₹ {place?.price}</span> <span className="text-gray-600">/ night</span>
        </div>
        <div className="text-sm text-rose-500 font-semibold">★ {place?.rating || "N/A"} ({place?.name || "Unknown"})</div>
      </div>

      {/* Input fields for check-in, check-out, and guests */}
      <div className="flex flex-col gap-4 mb-4">
        <input type="date" value={checkInDate} onChange={handleCheckInChange} className="border p-2 rounded-md" />
        <input type="date" value={checkOutDate} onChange={handleCheckOutChange} className="border p-2 rounded-md" />
        <input type="number" min="1" value={guests} onChange={handleGuestChange} placeholder="Guests" className="border p-2 rounded-md" />
      </div>

      {/* Display total days and calculated total price */}
      <div className="text-lg font-semibold mb-4">
        Days: {days} <br />
        Total Price: ₹ {totalAmount}
      </div>

      {/* Reserve button to trigger payment */}
      <button
        onClick={handleReserve}
        className="bg-rose-500 text-white w-full py-3 rounded-lg hover:bg-rose-600 transition">
        Reserve
      </button>
    </div>
  );
}
