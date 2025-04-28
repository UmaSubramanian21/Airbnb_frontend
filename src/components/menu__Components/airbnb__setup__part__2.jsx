import React from 'react';
import { Check } from 'lucide-react';


export default function Part__2() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-12 bg-white">
                {/* Logo */}
                <div className="flex items-center space-x-1 text-2xl md:text-5xl">
                    <span className="text-pink-600 font-bold  ">air</span>
                    <span className="text-black font-bold ">cover</span>
                </div>
                <div className="text-gray-600 text-sm md:text-xl font-semibold">for Hosts</div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center mt-6 md:text-6xl">
                    However you host, <br /> you’re protected
                </h1>

                {/* Subheading */}
                <p className="text-gray-500 text-center 
                mt-4 max-w-2xl w-[50%] md-[70%] md:text-2xl">
                    Top-to-bottom protection, included every time you host your home on Airbnb.
                </p>

                {/* Features List */}
                <div className="mt-8 space-y-6">
                    <div className="flex items-center space-x-3 gap-[104px]">
                        <span className="text-lg text-gray-700">
                            Up to $3m USD damage protection
                        </span>
                        <Check className="text-green-600 w-6 h-6" />

                    </div>

                    <div className="flex items-center space-x-3 gap-30">
                        <span className="text-lg text-gray-700">
                            Up to $1m USD liability insurance
                        </span>
                        <Check className="text-green-600 w-6 h-6" />

                    </div>

                    <div className="flex items-center space-x-3 gap-60">
                        <span className="text-lg text-gray-700">
                            24-hour safety line
                        </span>
                        <Check className="text-green-600 w-6 h-6" />
                    </div>
                </div>
                {/* Learn about AirCover btn */}
                <button
                    className='w-[100%] mt-10 bg-black md:w-[30%] md:py-3
                           font-bold text-gray-100 p-2 rounded-4xl '>Learn about AirCover</button>

                <p
                    className=' md:w-[55%] text-sm text-gray-600 text-center mt-10'>Host Damage Protection reimburses for certain guest damages during Airbnb stays. It’s not insurance and may apply if guests don’t pay. Liability insurance is provided by 3rd parties. <a className='underline text-black'>Check details and exclusions</a>.</p>
               
                </div>
        </>
    )
}