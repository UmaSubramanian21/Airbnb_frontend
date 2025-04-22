import { useState } from 'react';

const SearchBar = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div className="w-full flex justify-center mt-6 relative">
            <div className="flex items-center bg-white rounded-full cursor-pointer border border-gray-300 shadow-md transition duration-200">

                {/* Destination */}
                <div className=" flex flex-col px-10 py-4 hover:bg-gray-200 rounded-full transition duration-200 cursor-pointer ">
                    <label className=" text-xs font-semibold text-gray-800">Where</label>
                    <input
                        type="text"
                        placeholder="Search destinations"
                        className=" text-gray-600 outline-none w-40 bg-transparent"
                    />
                </div>

                {/* Check-in */}
                <div
                    className="flex flex-col  px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer"
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    <label className="text-xs font-semibold text-gray-800">Check in</label>
                    <span className=" text-gray-600">Add dates</span>
                </div>

                {/* Check-out */}
                <div className="flex flex-col px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer">
                    <label className=" text-xs font-semibold text-gray-800">Check out</label>
                    <span className=" text-gray-600">Add dates</span>
                </div>

                {/* Guests */}
                <div className="flex  px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer">
                    <div className='flex flex-col'>
                    <label className="text-xs font-semibold text-gray-800">Who</label>
                    <input
                        type="text"
                        placeholder="Add guests"
                        className=" text-gray-600 outline-none w-28 bg-transparent"
                    />
                    </div>
                    {/* Search Button */}
                    <button className="ml-4 bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition duration-200">
                        <i className="fa-solid fa-magnifying-glass text-sm"></i>
                    </button>
                </div>
            </div>

            {/* Custom Date Picker Panel */}
            {showCalendar && (
                <div className="absolute top-20 bg-white shadow-lg rounded-xl p-6 w-[700px]">
                    <div className="flex justify-between border-b pb-2 mb-4">
                        <button className="text-sm font-medium text-gray-700 hover:text-black">Dates</button>
                        <button className="text-sm font-medium text-gray-700 hover:text-black">Months</button>
                        <button className="text-sm font-medium text-gray-700 hover:text-black">Flexible</button>
                    </div>
                    <p className="text-gray-500">[Your calendar component or calendar UI goes here]</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;