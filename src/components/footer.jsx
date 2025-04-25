import FooterBottom from './footerBottom'
import FooterLinks from "./footerLinks"

import { useState } from "react"

function Footer() {
    const [section, setSection] = useState(true)
    const [showAllStays, setShowAllStays] = useState(false);
    const [showAllPlaces, setShowAllPlaces] = useState(false);

    // unique stay datas - array
    const stays = [
        { name: "Yurt Rentals", location: "United States" },
        { name: "Yurt Rentals", location: "United Kingdom" },
        { name: "Castle Rentals", location: "United States" },
        { name: "Houseboats", location: "United States" },
        { name: "Holiday Caravans", location: "United Kingdom" },
        { name: "Private Island Rentals", location: "United States" },
        { name: "Farm Houses", location: "United States" },
        { name: "Farm Cottages", location: "United Kingdom" },
        { name: "Cabin Rentals", location: "Australia" },
        { name: "Luxury Cabins", location: "United Kingdom" },
        { name: "Luxury Cabins", location: "United States" },
        { name: "Holiday Chalets", location: "United Kingdom" },
        { name: "Cottage Rentals", location: "United States" },
        { name: "Holiday Cottages", location: "United Kingdom" },
        { name: "Mansion Rentals", location: "United States" },
        { name: "Villa Rentals", location: "United Kingdom" },
        { name: "Holiday Bungalows", location: "United Kingdom" },
    ];
    const visibleStays = showAllStays ? stays : stays.slice(0, 12);
    // places names - array
    const places = [
        "A-frames",
        "Amazing pools",
        "Amazing views",
        "Arctic",
        "BeachFronts",
        "bed&breakfast",
        "Boats",
        "Cabins",
        "Camper vans",
        "camping",
        "castles",
        "Caves",
        "Chef's kitchen",
        "containers",
        "CountrySide",
        "Cycladic homes",
        "Desert",
        "designs",
        "Domes",
        "Earth homes",
        "Farms",
        "Golfing",
        "Hanoks",
        "historical homes",
        "houseboat",
        "island",
        "Lakefronts",
        "Lakes",
        "Luxe",
        "Mansions",
        "National parks",
        "New",
        "off the grid",
        "OMG",
        "Play",
        "Rooms",
        "Ryokans",
        "Sheperd",
        "Skillings",
        "surfing",
        "tiny homes",
        "top cities",
        "top",
        "Towers",
        "Treding",
        "Treehouses",
        "tropical",
        "Vineyards",
        "Windmils",
    ];

    const visiblePlaces = showAllPlaces ? places : places.slice(0, 8);

    return (
        <>
            <div className="px-10 py-5">
                <h1 className="font-semibold text-2xl mb-3">Inspiration for future getaways</h1>
                <div className="flex gap-10 mb-7 font-semibold
                                 shadow-gray-700 border-b border-gray-300">
                    <h1
                        onClick={() => { setSection(true) }}
                        className="cursor-pointer mb-6">Unique Stays</h1>
                    <h1
                        onClick={() => { setSection(false) }}
                        className="cursor-pointer">Catagories</h1>
                </div>

                {section ?
                    // Unique section
                    < section id="footer__section__1">
                        <div className="p-4">
                            <div
                                className="grid sm:grid-cols-2 md:grid-cols-3 
                                          lg:grid-cols-6 gap-y-3 ">
                                {visibleStays.map((stay, index) => (
                                    <div key={index} >
                                        <p className="font-medium text-gray-800 mr-10">{stay.name}</p>
                                        <p className="text-sm text-gray-500">{stay.location}</p>
                                    </div>
                                ))}

                            </div>

                            <button
                                onClick={() => setShowAllStays(!showAllStays)}
                                className="mt-4 text-blue-600 hover:underline">
                                {showAllStays ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </section>
                    :
                    // Catagories section
                    <section>
                        <div className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 font-semibold">
                                {visiblePlaces.map((place, index) => (
                                    <p key={index} className="text-gray-700">{place}</p>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowAllPlaces(!showAllPlaces)}
                                className="mt-4 text-blue-600 hover:underline">
                                {showAllPlaces ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </section>
                }
            </div >
            <FooterLinks />
            <FooterBottom />
        </>
    )
}

export default Footer