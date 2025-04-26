export default function DropdownMenu() {
    return (
        <div className="w-60 rounded-xl shadow-lg 
                         bg-white overflow-hidden 
                        fixed z-50 top-24 right-10">
            {/* Upper part */}
            <div className="flex flex-col">
                <div className="px-4 py-3 hover:bg-gray-100 font-semibold cursor-pointer">
                    Sign up
                </div>
                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Log in
                </div>
            </div>

            <hr />

            {/* Lower part */}
            <div className="flex flex-col">
                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Airbnb your home
                </div>
                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Host an experience
                </div>
                <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Help Centre
                </div>
            </div>
        </div>
    );
}
