import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CheckOutCalendar = ({ checkOutDate, setCheckOutDate, isOpen, toggle }) => {
    const formatted = checkOutDate
        ? checkOutDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })
        : "Add date";

    return (
        <div className="relative">
            <div
                onClick={toggle}
                className="flex flex-col px-6 py-4 border border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer transition duration-200"
            >
                <label className="text-xs font-semibold text-gray-800">Check out</label>
                <span className="text-gray-600">{formatted}</span>
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-2 shadow-xl bg-white rounded-xl">
                    <Calendar
                        date={checkOutDate || new Date()}
                        onChange={(date) => {
                            setCheckOutDate(date);
                            toggle();
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CheckOutCalendar;