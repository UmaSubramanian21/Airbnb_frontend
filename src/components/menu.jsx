import { useState } from "react";
import { Link, useNavigate } from "react-router";
import SignInModal from "./menu__Components/signIn";

export default function DropdownMenu() {
    const navigate = useNavigate()
    const [showSignUp, setSignUp] = useState(false)
    const [showHostYourHome, setHost] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(true)
    const handleClose = () => setIsModalOpen(false)

    // for handle all dialogue boxes when normal click
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    return (
        <>
            {isModalOpen && (<div>
                <div
                    onClick={handleBackgroundClick}
                    className="w-60 rounded-xl shadow-lg 
                         bg-white overflow-hidden 
                        fixed z-50 top-24 right-10">
                    {/* Upper part */}

                    <div

                        className="flex flex-col">
                        <div
                            onClick={() => { setSignUp(!showSignUp) }}
                            className="px-4 py-3 hover:bg-gray-100 font-semibold cursor-pointer">
                            Sign up
                        </div>
                        <div
                            onClick={() => { setSignUp(!showSignUp) }}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                            Log in
                        </div>
                    </div>

                    <hr className="text-gray-300" />

                    {/* Lower part */}
                    <div className="flex flex-col">
                        <Link to="/host-your-home"><div
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                            Airbnb your home
                        </div></Link>
                        <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                            Host an experience
                        </div>
                        <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                            Help Centre
                        </div>
                    </div>
                </div>

                {/* signup dialogue box ,  */}
                <div>
                    {showSignUp ? (<SignInModal />) : ""}

                </div>
            </div>)}
        </>
    );
}
