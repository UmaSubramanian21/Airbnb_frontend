import axios from "axios";
import { useEffect, useState } from "react";

export default function SignIn__Airbnb__setUp() {

    const [phone, setPhone] = useState("");
    const handleClose = () => setIsModalOpen(false)

    const handlePhoneChange = (e) => setPhone(e.target.value)

    // country name and mobile code from api
    const [countries, setCountries] = useState([])

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

                // Optional: sort alphabetically by name
                countryList.sort((a, b) => a.name.localeCompare(b.name));

                setCountries(countryList);
                setLoading(false);
            })
            .catch(() => {
                console.log("Problem on run API");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div

                className=" flex items-center justify-center z-50 ">
                <div className="bg-white rounded-2xl p-6 w-[50%] max-w-full shadow-lg overflow-y-auto">
                    <div className="flex justify-center items-center mb-4 ">

                        {/* heading */}
                        <h2 className="text-lg font-semibold text-center">Log in or sign up</h2>
                        <div></div>
                    </div>
                    <h3 className="text-md font-bold mb-4 text-center">Welcome to Airbnb</h3>
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
                            We'll call or text you to confirm your number. Standard message and data rates apply. <span className="underline cursor-pointer">Privacy Policy</span>
                        </p>
                    </div>
                    <button className="w-full bg-rose-500 text-white p-2 rounded font-semibold mb-4 hover:bg-rose-600">Continue</button>
                    <div className="flex items-center mb-4">
                        <div className="flex-grow border-t" />
                        <span className="mx-2 text-gray-400">or</span>
                        <div className="flex-grow border-t" />
                    </div>
                    <div className="space-y-2">
                        <button className="w-full p-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100">
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

        </>
    )
}