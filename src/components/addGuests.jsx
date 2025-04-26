import React, { useState } from 'react';

const AddGuests = () => {
    const [guests, setGuests] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    });

    const handleChange = (type, increment) => {
        setGuests(prev => ({
            ...prev,
            [type]: Math.max(0, prev[type] + increment),
        }));
    };

    return (
        <div 
        className="p-4 w-80 shadow-lg rounded-xl
         text-gray-800 fixed bg-white z-50">

            {[
                { label: "Adults", sub: "Ages 13 or above", key: "adults" },
                { label: "Children", sub: "Ages 2–12", key: "children" },
                { label: "Infants", sub: "Under 2", key: "infants" },
                { label: "Pets", sub: "Bringing a service animal?", key: "pets" },
            ].map(({ label, sub, key }) => (
                <div key={key} className="flex justify-between items-center py-2 border-b">
                    <div>
                        <div className="font-medium">{label}</div>
                        <div className="text-sm text-gray-500">{sub}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => handleChange(key, -1)}
                            className="border rounded-full w-8 h-8 flex items-center justify-center text-xl"
                        >
                            –
                        </button>
                        <span>{guests[key]}</span>
                        <button
                            onClick={() => handleChange(key, 1)}
                            className="border rounded-full w-8 h-8 flex items-center justify-center text-xl"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

            <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full">
                Search
            </button>
        </div>
    );
};

export default AddGuests;
