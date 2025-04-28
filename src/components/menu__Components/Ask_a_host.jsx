import logo from "../../assets/images/logo__airbnb.png"
import { Link } from "react-router";
import React from "react";

const AskSuperhost = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
            <div className="text-center max-w-2xl">
                <div className="flex items-center justify-center mb-4">
                    <Link to="/"><img src={logo} alt="Airbnb Logo" className="h-10 cursor-pointer" /></Link>
                </div>
                <h2 className="text-xl text-[#6b0d27] font-semibold mb-6">
                    Questions about hosting?
                </h2>
                <h1 className="text-4xl font-bold text-[#6b0d27] mb-6">
                    Just ask{" "}
                    <span className="italic underline">Erica</span>
                    <span className="inline-block mx-2">

                    </span>
                    , a Superhost in New Delhi. They’ll be your guide to all things hosting.
                </h1>
                <button className="mt-6 bg-[#6b0d27] hover:bg-[#8b1036] text-white font-semibold py-3 px-6 rounded-md">
                    Connect with Erica
                </button>
            </div>
        </div>
    );
};

export default AskSuperhost;
