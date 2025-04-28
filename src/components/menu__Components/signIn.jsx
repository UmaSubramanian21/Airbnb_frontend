import axios from "axios";
import { useEffect, useState } from "react";
import { auth, googleProvider } from '../../../firebase';
import { signInWithPopup } from "firebase/auth";

export default function SignInModal({ onSignIn }) {
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);

    // Close modal function
    const handleClose = () => setIsModalOpen(false);

    // Track whether user is signed in
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Handle background click to close the modal
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Handle phone input change
    const handlePhoneChange = (e) => setPhone(e.target.value);

    // Country data from API
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios("https://restcountries.com/v3.1/all")
            .then((response) => {
                const countryList = response.data.map((country) => {
                    const name = country.name?.common || "Unknown";
                    const root = country.idd?.root || "";
                    const suffix = country.idd?.suffixes ? country.idd.suffixes[0] : "";
                    const mobileCode = root + suffix;

                    return {
                        name,
                        mobileCode
                    };
                });

                // Sort alphabetically by name
                countryList.sort((a, b) => a.name.localeCompare(b.name));

                setCountries(countryList);
            })
            .catch(() => {
                console.log("Problem fetching country data");
            });
    }, []);

    // Google SignIn handler
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            console.log("User signed in:", user);
            console.log("User's Name: ", user.displayName);

            // Pass user details (displayName and email) to parent via onSignIn
            onSignIn({
                displayName: user.displayName,
                email: user.email
            });

            // Close the modal after successful login
            handleClose();

        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div
                    onClick={handleBackgroundClick}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn"
                >
                    <div className="bg-white rounded-2xl p-6 w-[50%] max-w-full shadow-lg overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={handleClose}
                                className="text-2xl cursor-pointer"
                            >
                                &times;
                            </button>
                            <h2 className="text-lg font-semibold">Log in or sign up</h2>
                        </div>
                        <h3 className="text-md font-bold mb-4">Welcome to Airbnb</h3>
                        <div className="mb-4">
                            <select className="border p-2 rounded-md w-full">
                                {countries.map((country, index) => (
                                    <option key={index} value={country.mobileCode}>
                                        {country.name} ({country.mobileCode})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="w-full p-2 border rounded"
                            />
                            <p className="text-xs mt-2 text-gray-600">
                                We'll call or text you to confirm your number. Standard message and data rates apply.{" "}
                                <span className="underline cursor-pointer">Privacy Policy</span>
                            </p>
                        </div>
                        <button className="w-full bg-rose-500 text-white p-2 rounded font-semibold mb-4 hover:bg-rose-600">
                            Continue
                        </button>
                        <div className="flex items-center mb-4">
                            <div className="flex-grow border-t" />
                            <span className="mx-2 text-gray-400">or</span>
                            <div className="flex-grow border-t" />
                        </div>
                        <div className="space-y-2">
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full p-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100"
                            >
                                <i className="fab fa-google text-lg"></i> Continue with Google
                            </button>
                            <button className="w-full p-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100">
                                <i className="fab fa-apple text-lg"></i> Continue with Apple
                            </button>
                            <button className="w-full p-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100">
                                <i className="fas fa-envelope text-lg"></i> Continue with Email
                            </button>
                            <button className="w-full p-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100">
                                <i className="fab fa-facebook text-lg"></i> Continue with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
