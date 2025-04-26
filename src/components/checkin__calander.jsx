import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CheckInCalendar = ({ checkInDate, setCheckInDate, isOpen, toggle }) => {
  const formatted = checkInDate
    ? checkInDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : "Add date";

  return (
    <div className="relative">
      <div
        onClick={toggle}
        className="flex flex-col px-6 py-4 border border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer transition duration-200"
      >
        <label className="text-xs font-semibold text-gray-800">Check in</label>
        <span className="text-gray-600">{formatted}</span>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 shadow-xl bg-white rounded-xl">
          <Calendar
            date={checkInDate || new Date()}
            onChange={(date) => {
              setCheckInDate(date);
              toggle(); // closes calendar on select
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CheckInCalendar;