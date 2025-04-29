import { useState } from 'react';
import logo from '../../../assets/images/logo.png';

import DropdownMenu from "../../menu";
import { Link } from 'react-router-dom';
import UserMenu from '../../menu__Components/menu_after_login';

function Navbar() {
    const [home, setHome] = useState(true);
    const [menu, setMenu] = useState(false); // Track menu open/close
    const [isSignedIn, setIsSignedIn] = useState(false); // Track login
    const [user, setUser] = useState(null); // State to hold the user data

    // Handle sign-in by receiving user data from SignInModal
    const handleSignIn = (userData) => {
        setIsSignedIn(true); // Mark as signed in
        setUser(userData); // Set user data
        setMenu(false); // Optionally close the menu
    };

    // Handle sign-out
    const handleSignOut = () => {
        setIsSignedIn(false);
        setUser(null);
        setMenu(false); // Optionally close the menu
    };

    // Toggle the menu visibility
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            {/* Navbar */}

            <div className="px-10 py-5 sticky top-0 bg-white" id="navbar">
                <section className="flex justify-between items-center">
                    {/* Section 1: Logo */}
                    <div>
                        <Link to="/"><img src={logo} className="w-[150%]" alt="Logo" /></Link>
                    </div>

                    {/* Section 2: Navigation Links */}
                    <div className="flex gap-5 text-xl items-center">
                        <h1 className='cursor-pointer' onClick={() => setHome(true)}>Homes</h1>
                        <h1 className='cursor-pointer' onClick={() => setHome(false)}>Experiences</h1>
                    </div>

                    {/* Section 3: User Buttons */}
                    <div className="flex gap-3 items-center">
                        <Link to="/host-your-home">
                            <h1 className="whitespace-nowrap font-semibold cursor-pointer">Airbnb your home</h1>
                        </Link>
                        <i className="fa-solid fa-globe" id="globe__icon"></i>

                        {/* Menu Button */}
                        <div onClick={toggleMenu}
                            className="bg-gray-200 items-center hover:outline-gray-600 border rounded-3xl px-5 py-3 flex gap-3 cursor-pointer hover:shadow-2xl border-gray-300">
                            <span className="material-symbols-outlined">menu</span>
                            <i className="fa-solid fa-circle-user" id="user__icon"></i>
                        </div>
                    </div>
                </section>
            </div>

            {/* Search Bar Section */}
            <section className="px-10 py-5 cursor-pointer sticky top-0 bg-white" id="searchbar">
                <div className="flex items-center gap-5 rounded-3xl p-[2%] shadow-lg justify-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        className="w-[100%] outline-none"
                        placeholder="Start your search" />
                </div>
            </section>

            {/* Dropdown Menu on Click */}
            {menu && (
                <div className="dropdown-menu">
                    {isSignedIn ? (
                        <UserMenu onSignOut={handleSignOut} username={user.displayName} email={user.email} />
                    ) : (
                        <DropdownMenu onSignIn={handleSignIn} />
                    )}
                </div>
            )}

            {/* SignInModal Component */}
            {/* {!isSignedIn && <SignInModal onSignIn={handleSignIn} />} */}
        </>
    );
}

export default Navbar;
