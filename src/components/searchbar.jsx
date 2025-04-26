
// import CheckInCalendar from './checkin__calander'
// import CheckOutCalendar from './checkout__calendar';
// import AddGuests from './addGuests';
// import { useEffect, useState } from 'react';

// const SearchBar = (props) => {

//     const [checkInDate, setCheckInDate] = useState(null);
//     const [checkOutDate, setCheckOutDate] = useState(null);
//     const [addGuests, setGuest] = useState(false)

//     const [checkInDates, setCheckInDates] = useState([
//         { startDate: new Date(), endDate: new Date(), key: "checkIn" },
//     ]);
//     const [checkOutDates, setCheckOutDates] = useState([
//         { startDate: new Date(), endDate: new Date(), key: "checkOut" },
//     ]);
//     const [showCheckIn, setShowCheckIn] = useState(false);
//     const [showCheckOut, setShowCheckOut] = useState(false);

//     const [showCalendar, setShowCalendar] = useState(false)
//     const [isScrolled, setIsScrolled] = useState(false)

//     // props value from navbar - handlinng home and exp buttons
//     console.log(props.homeClicked)
//     const home = props.homeClicked


//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20)
//         };

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         <>
//             <section className='bg-white sticky top-20'>
//                 <div id="searchbar__section"
//                     className="w-full flex justify-center 
//                               mt-6 relative transition-all duration-300  ">
//                     <div
//                         className={`flex items-center bg-white rounded-full border border-gray-300 shadow-md transition-all duration-300 cursor-pointer ${isScrolled ? 'px-6 py-2 gap-3' : ''
//                             }`}>
//                         {!isScrolled ? (
//                             <>
//                                 <div className='flex'>
//                                     {/* Destination */}
//                                     <div className=" flex flex-col px-10 py-4 hover:bg-gray-200 rounded-full transition duration-200 cursor-pointer ">
//                                         <label className=" text-xs font-semibold text-gray-800">Where</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Search destinations"
//                                             className=" text-gray-600 outline-none w-40 bg-transparent"
//                                         />
//                                     </div>
//                                     {home ?
//                                         (<div className='flex'>
//                                             {/* Check-in */}
//                                             <div className="flex space-x-6 relative">
//                                                 <CheckInCalendar
//                                                     selectedDates={checkInDates}
//                                                     setSelectedDates={setCheckInDates}
//                                                     isOpen={showCheckIn}
//                                                     toggle={() => {
//                                                         setShowCheckIn((prev) => !prev);
//                                                         setShowCheckOut(false);
//                                                     }}
//                                                 />
//                                             </div>
//                                             <div className="flex space-x-6 relative">
//                                                 <CheckOutCalendar
//                                                     selectedDates={checkOutDates}
//                                                     setSelectedDates={setCheckOutDates}
//                                                     isOpen={showCheckOut}
//                                                     toggle={() => {
//                                                         setShowCheckOut((prev) => !prev);
//                                                         setShowCheckIn(false);
//                                                     }}
//                                                 />
//                                             </div>

//                                         </div>)
//                                         :
//                                         (<div>
//                                             <div className="flex flex-col px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer">
//                                                 <label className=" text-xs font-semibold text-gray-800">Date</label>
//                                                 <span className=" text-gray-600">Add dates</span>
//                                             </div>
//                                         </div>)
//                                     }

//                                     {/* Guests */}
//                                     <div className="flex  px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer">
//                                         <div
//                                             className='flex flex-col'>
//                                             <label className="text-xs font-semibold text-gray-800">Who</label>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Add guests"
//                                                 onClick={() => { setGuest(!addGuests) }}
//                                                 className=" text-gray-600 outline-none w-28 bg-transparent"
//                                             />
//                                         </div>
//                                         <button className="ml-4 bg-rose-500 text-white p-3 px-5 rounded-[100%] hover:bg-rose-600 transition duration-200">
//                                             <i className="fa-solid fa-magnifying-glass text-sm"></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </>
//                         ) : (
//                             <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
//                                 <span>Anywhere</span>
//                                 <span className="mx-2">|</span>
//                                 <span>Any week</span>
//                                 <span className="mx-2">|</span>
//                                 <span
//                                     onClick={() => { setGuest(!addGuests) }}
//                                 >Add guests</span>
//                                 <button className="ml-3 bg-rose-500 text-white p-2 px-4 rounded-full hover:bg-rose-600 transition duration-200">
//                                     <i className="fa-solid fa-magnifying-glass text-sm"></i>
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Calendar Panel */}
//                     {!isScrolled && showCalendar && (
//                         <div className="absolute top-20 bg-white shadow-lg rounded-xl p-6 w-[700px]">
//                             <div className="flex justify-between border-b pb-2 mb-4">
//                                 <button className="text-sm font-medium text-gray-700 hover:text-black">Dates</button>
//                                 <button className="text-sm font-medium text-gray-700 hover:text-black">Months</button>
//                                 <button className="text-sm font-medium text-gray-700 hover:text-black">Flexible</button>
//                             </div>
//                             <p className="text-gray-500">[calendar component goes here]</p>
//                         </div>
//                     )}
//                 </div>

//             </section>
//             {addGuests ? (<div className=' flex pl-[55%] z-50 bg-white' id="addGuest__com">
//                 <AddGuests />
//             </div>) : ""}
//         </>
//     )
// }

// export default SearchBar

import CheckInCalendar from './checkin__calander'
import CheckOutCalendar from './checkout__calendar'
import AddGuests from './addGuests'
import { useEffect, useState } from 'react'

const SearchBar = (props) => {
    const [checkInDate, setCheckInDate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)
    const [addGuests, setGuest] = useState(false)

    const [checkInDates, setCheckInDates] = useState([
        { startDate: new Date(), endDate: new Date(), key: 'checkIn' },
    ])
    const [checkOutDates, setCheckOutDates] = useState([
        { startDate: new Date(), endDate: new Date(), key: 'checkOut' },
    ])
    const [showCheckIn, setShowCheckIn] = useState(false)
    const [showCheckOut, setShowCheckOut] = useState(false)

    const [showCalendar, setShowCalendar] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const home = props.homeClicked

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <section className="bg-white sticky top-20 z-40">
                <div
                    id="searchbar__section"
                    className="w-full flex justify-center mt-6 relative transition-all duration-300"
                >
                    <div
                        className={`flex items-center bg-white rounded-full border border-gray-300 shadow-md transition-all duration-300 cursor-pointer ${
                            isScrolled ? 'px-6 py-2 gap-3' : ''
                        }`}
                    >
                        {!isScrolled ? (
                            <>
                                <div className="flex relative">
                                    {/* Destination */}
                                    <div className="flex flex-col px-10 py-4 hover:bg-gray-200 rounded-full transition duration-200 cursor-pointer">
                                        <label className="text-xs font-semibold text-gray-800">Where</label>
                                        <input
                                            type="text"
                                            placeholder="Search destinations"
                                            className="text-gray-600 outline-none w-40 bg-transparent"
                                        />
                                    </div>

                                    {home ? (
                                        <div className="flex relative">
                                            {/* Check-in */}
                                            <div className="flex space-x-6 relative">
                                                <CheckInCalendar
                                                    selectedDates={checkInDates}
                                                    setSelectedDates={setCheckInDates}
                                                    isOpen={showCheckIn}
                                                    toggle={() => {
                                                        setShowCheckIn((prev) => !prev)
                                                        setShowCheckOut(false)
                                                    }}
                                                />
                                            </div>

                                            {/* Check-out */}
                                            <div className="flex space-x-6 relative">
                                                <CheckOutCalendar
                                                    selectedDates={checkOutDates}
                                                    setSelectedDates={setCheckOutDates}
                                                    isOpen={showCheckOut}
                                                    toggle={() => {
                                                        setShowCheckOut((prev) => !prev)
                                                        setShowCheckIn(false)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer">
                                            <label className="text-xs font-semibold text-gray-800">Date</label>
                                            <span className="text-gray-600">Add dates</span>
                                        </div>
                                    )}

                                    {/* Guests */}
                                    <div className="flex px-10 py-4 border-l border-gray-200 hover:bg-gray-200 pl-6 rounded-full transition duration-200 cursor-pointer relative">
                                        <div className="flex flex-col">
                                            <label className="text-xs font-semibold text-gray-800">Who</label>
                                            <input
                                                type="text"
                                                placeholder="Add guests"
                                                onClick={() => {
                                                    setGuest(!addGuests)
                                                }}
                                                className="text-gray-600 outline-none w-28 bg-transparent"
                                            />
                                        </div>
                                        <button className="ml-4 bg-rose-500 text-white p-3 px-5 rounded-full hover:bg-rose-600 transition duration-200">
                                            <i className="fa-solid fa-magnifying-glass text-sm"></i>
                                        </button>
                                    </div>

                                    {/* Add Guests dropdown */}
                                    {addGuests && (
                                        <div className="absolute right-0 top-20 bg-white shadow-lg rounded-xl p-6 w-72 z-50">
                                            <AddGuests />
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                <span>Anywhere</span>
                                <span className="mx-2">|</span>
                                <span>Any week</span>
                                <span className="mx-2">|</span>
                                <span onClick={() => setGuest(!addGuests)}>Add guests</span>
                                <button className="ml-3 bg-rose-500 text-white p-2 px-4 rounded-full hover:bg-rose-600 transition duration-200">
                                    <i className="fa-solid fa-magnifying-glass text-sm"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Calendar Panel */}
                    {!isScrolled && showCalendar && (
                        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-6 w-[700px] z-50">
                            <div className="flex justify-between border-b pb-2 mb-4">
                                <button className="text-sm font-medium text-gray-700 hover:text-black">Dates</button>
                                <button className="text-sm font-medium text-gray-700 hover:text-black">Months</button>
                                <button className="text-sm font-medium text-gray-700 hover:text-black">Flexible</button>
                            </div>
                            <p className="text-gray-500">[calendar component goes here]</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default SearchBar
