import { Link } from "react-router";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from '../../assets/images/logo__airbnb.png'
import { useState } from "react";
import Part__1 from "./airbnb__setup__part__1";
import Part__2 from "./airbnb__setup__part__2";
import Part__3 from "./airbnb__setup__part__3";
import Part__4 from "./airbnb__setup__part__4";

export default function HostEarningsEstimator() {

    const [nights, setNights] = useState(30); // default nights
    const ratePerNight = 3672; // ₹ per night
    const totalEarnings = nights * ratePerNight;

    // map from leaflet library exactly chennai location 
    useEffect(() => {
        const map = L.map('map').setView([13.0827, 80.2707], 10); // Chennai

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        return () => {
            map.remove();
        }

    }, [])

    return (
        <>
            <div className="px-10 py-5 md:px-15">
                {/* navbar - logo and buttton */}
                {/* logo */}
                <nav className="flex justify-between items-center
                 bg-white sticky top-0 z-50 py-1">
                    <Link to="/"><img src={logo} className="w-7 "
                    ></img></Link>
                    <Link to="/airbnb-setup"> <button
                        className="text-white bg-linear-to-r from-pink-500 to-pink-600
                                    py-3 px-5 rounded-3xl font-bold hidden md:block">Airbnb Setup</button></Link>
                </nav>

                {/* map section with slider */}
                <div
                    className="flex flex-col md:flex-row items-center 
                               justify-center min-h-screen px-8 py-12
                              bg-white text-center">

                    {/* Left Side */}
                    {/* slider */}
                    <div
                        className="flex-1 text-center justify-center md:text-center
                                   mb-10 md:mb-0 items-center">
                        <h1
                            className="text-4xl text-center md:text-6xl 
                                       font-bold text-gray-900 mb-4 w-[90%]">
                            Your home could make ₹{totalEarnings.toLocaleString("en-IN")} on Airbnb
                        </h1>
                        <p className="text-gray-700 text-lg mb-2">
                            {nights} nights · ₹{ratePerNight.toLocaleString("en-IN")}/night
                        </p>
                        <p className="text-gray-500 text-sm mb-6">
                            Learn how we <u>estimate earnings</u>
                        </p>

                        {/* Slider */}
                        <div className="flex items-center space-x-4 justify-center">
                            <input
                                type="range"
                                min="1"
                                max="60"
                                value={nights}
                                onChange={(e) => setNights(parseInt(e.target.value))}
                                className="w-64 h-2 bg-pink-500 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-gray-300 p-2 font-bold bg-black rounded-2xl ">{nights} nights</span>
                        </div>

                        {/* Location and Room Info */}
                        <div className="mt-6 p-4 border border-gray-400 rounded-full flex items-center space-x-2 w-full max-w-md mx-auto md:mx-0">
                            <span className="text-pink-500 text-xl"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <p className="text-gray-700">Chennai · Entire place · 2 bedrooms</p>
                        </div>

                    </div>

                    {/* Right Side - Static Map */}
                    <div className="flex flex-col items-center justify-center w-[100%] h-[500px] max-w-[100%] md:max-w-[50%] z-30 rounded-md">
                        <div id="map" style={{ height: "100%", width: "100%" }}></div>
                    </div>

                </div>


                {/* benifits area below mobile picture */}
                <div>
                    <Part__1 />
                </div>
                {/* aircover for host section */}
                <div>
                    <Part__2 />
                </div>
                {/* All the tools you need to host, all in one app */}
                <div>
                    <Part__3 />
                </div>
                {/* Your questions, answered section  */}
                <div>
                    <Part__4 />
                </div>
                {/* minimum screen size button */}
                <button
                    className="text-white bg-linear-to-r from-pink-600 to-pink-700
                                    py-3 px-5 rounded-3xl w-[100%] font-bold block 
                                    md:hidden sticky bottom-0 z-50 bg-white">Airbnb Setup</button>

            </div>

        </>
    )
}