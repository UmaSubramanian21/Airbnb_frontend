import mobile_img from '../../assets/images/mobile__img.png'

export default function Part__3() {
    return (
        <>
            <div className="text-center flex flex-col gap-5 items-center justify-center">
                <p
                    className='text-3xl md:text-6xl font-bold text-gray-700
                w-[70%] mt-20 text-center md:w-[55%]'>All the tools you need to host, all in one app</p>

                <img src={mobile_img}></img>

                <a href='https://play.google.com/store/apps/details?id=com.airbnb.android&hl=en_IN&pli=1'
                    target='blank'

                    className='bg-black text-gray-300 md:w-[30%]
                w-[100%] rounded-4xl p-3 mb-5 font-bold'
                >Download the Airbnb app
                </a>
            </div>
        </>
    )
}