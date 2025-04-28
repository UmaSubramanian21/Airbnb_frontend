import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import SignInModal from "./menu__Components/signIn";

export default function DropdownMenu({ onSignIn }) {
    // States to control showing SignUp modal and Dropdown menu
    const [showSignUp, setSignUp] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true); // Default open menu (because Navbar controls it)

    // Close Dropdown if background is clicked
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    // Toggle signup/login modal
    const handleSignUpClick = () => {
        setSignUp(true);
    };

    return (
        <>
            {/* Main Dropdown Menu */}
            {isModalOpen && (
                <div>
                    <div
                        onClick={handleBackgroundClick}
                        className="w-60 rounded-xl shadow-lg bg-white overflow-hidden fixed z-50 top-24 right-10"
                    >
                        {/* Top Section: Sign up and Login */}
                        <div className="flex flex-col">
                            <div
                                onClick={handleSignUpClick}
                                className="px-4 py-3 hover:bg-gray-100 font-semibold cursor-pointer"
                            >
                                Sign up
                            </div>
                            <div
                                onClick={handleSignUpClick}
                                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                            >
                                Log in
                            </div>
                        </div>

                        {/* Separator */}
                        <hr className="text-gray-300" />

                        {/* Bottom Section: Hosting and Help */}
                        <div className="flex flex-col">
                            <Link to="/host-your-home">
                                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                    Airbnb your home
                                </div>
                            </Link>
                            <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                Host an experience
                            </div>
                            <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                Help Centre
                            </div>
                        </div>
                    </div>

                    {/* SignUp / SignIn Modal */}
                    {showSignUp && (
                        <SignInModal onSignIn={onSignIn} /> //  Pass `onSignIn` here
                    )}
                </div>
            )}
        </>
    );
}
