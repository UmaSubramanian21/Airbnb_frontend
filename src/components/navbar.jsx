
function Navbar() {
    return (
        <>
            <div className="px-10 py-5" id="navbar">
                {/* navbar sections */}
                <section className="flex justify-between items-center">
                    {/* section 1 */}
                    <div>
                        <img src="../assets/images/logo.png" className="w-[150%]"></img>
                    </div>
                    {/* section 2 */}
                    <div className="flex gap-5">
                        <h1>Homes</h1>
                        <h1>Experiences</h1>
                    </div>
                    {/* section 3 */}
                    <div className="flex gap-3 items-center">
                        <h1 className="whitespace-nowrap">Airbnb your home</h1>
                        <i class="fa-solid fa-globe" id="globe__icon" ></i>

                        <div
                            className="bg-gray-200 items-center hover:outline-gray-600 border 
                                        rounded-3xl px-5 py-3 flex gap-3 cursor-pointer 
                                        hover:shadow-2xl border-gray-300 ">
                            <span class="material-symbols-outlined">menu</span>
                            <i class="fa-solid fa-circle-user" id="user__icon"></i>
                        </div>
                    </div>
                </section>
            </div>

            {/* minimum  screen size design */}
            <section className="px-10 py-5 cursor-pointer" id="searchbar">
                <div
                    className="flex items-center gap-5 rounded-3xl p-[2%] 
                shadow-lg justify-center ">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                        className="w-[100%] outline-none"
                        placeholder="Start your search "></input>
                </div>
            </section>
        </>
    )
}

export default Navbar