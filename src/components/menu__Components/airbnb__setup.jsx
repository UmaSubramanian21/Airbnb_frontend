// airbnb setup navbar + login + footer
import { Link } from "react-router";
import FooterBottom from "../footerBottom";
import FooterLinks from "../footerLinks";
import logo from '../../assets/images/logo.png'
import SignIn__Airbnb__setUp from "./signin__airbnb__setup";
import { useState } from "react";
import DropdownMenu from "../menu";

export default function Airbnb__setUp() {
    const [menu, setMenu] = useState(false)
    return (
        <>
            {/* navbar */}
            {/* section 1 */}
            <div
                className="px-10 py-5 sticky top-0 flex items-center justify-between" id="navbar">
                {/* logo */}
                <div>
                    <img src={logo} className="w-[100%] "></img>
                </div>

                <div className="flex gap-10">
                    {/* airbnb your home btn */}
                    <div
                        className="flex gap-3 items-center">
                        <Link to="/host-your-home"><h1 className="whitespace-nowrap cursor-pointer font-semibold">Airbnb your home</h1></Link>
                        <i class="fa-solid fa-globe" id="globe__icon" ></i>
                    </div>

                    {/* menubar */}
                    <div
                        onClick={() => { setMenu(!menu) }}
                        className="bg-gray-200  items-center hover:outline-gray-600 border 
                                        rounded-3xl px-5 py-3 flex gap-3 cursor-pointer 
                                        hover:shadow-2xl border-gray-300 ">
                        <span class="material-symbols-outlined">menu</span>
                        <i class="fa-solid fa-circle-user" id="user__icon"></i>
                    </div>
                </div>

            </div>
            {/* other components */}
            {menu && (<DropdownMenu />)}
            <SignIn__Airbnb__setUp />
            <FooterLinks />
            <FooterBottom />
        </>
    )
}