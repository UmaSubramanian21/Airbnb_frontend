import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/api/reservation/all')
      .then(res => setReservations(res.data))
      .catch(err => console.error("Failed to load reservations", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Reservations</h1>
      {reservations.map((res, idx) => (
        <div key={idx} className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{res.place}</h2>
          <p>Guests: {res.guests}</p>
          <p>Days: {res.days}</p>
          <p>Total: ₹ {res.amount}</p>
          <p>Check-In: {res.checkIn}</p>
          <p>Check-Out: {res.checkOut}</p>
        </div>
      ))}
    </div>
  );
}

