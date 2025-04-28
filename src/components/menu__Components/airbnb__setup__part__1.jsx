import mobile_pic from '../../assets/images/home__on__airbnb.png'

export default function Part__1() {
    return (
        <>
            {/* mobile phone picture area */}
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl w-[60%] font-bold text-center text-gray-700 md:text-6xl">It’s easy to list your home on Airbnb</h1>
                <img src={mobile_pic}></img>
            </div>

            <div className="flex flex-col md:flex-row text-gray-800 my-5
                            gap-5 items-left justify-center text-center">
                <div className="flex gap-9 md:flex-col md:w-[19%] text-center ">
                    <i class="fa-solid fa-house"></i>
                    <p>Create a listing for your place in just a few steps</p>
                </div>

                <div className="flex gap-9 md:flex-col md:w-[19%] text-center ">
                    <i class="fa-regular fa-clock"></i>
                    <p>Go at your own pace, and make changes whenever</p>
                </div>
                <div className="flex gap-9 md:flex-col md:w-[19%] text-center ">
                    <i class="fa-regular fa-message"></i>
                    <p>Get 1:1 support from experienced hosts at any time</p>
                </div>
            </div>
        </>
    )
}