import { useState } from "react"
import { Link } from "react-router";
import FooterLinks from "../footerLinks";
import FooterBottom from "../footerBottom";

export default function Part__4() {

    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };
    return (
        <>
            {/* Your questions, answered section */}
            <div className="bg-gray-200 p-2 mt-5">
                <h1
                    className="text-gray-500 font-bold text-4xl md:text-3xl text-center">Your questions, answered</h1>

                <div className="w-full max-w-2xl mx-auto bg-gray-200 p-6 rounded-2xl shadow-md space-y-6">

                    {/* Accordion Item 1 */}
                    <div className="border-b">
                        <button
                            onClick={() => toggleItem('top')}
                            className="w-full flex justify-between items-center py-4 text-left text-xl font-semibold"
                        >
                            Top questions
                            <span className={`transform transition-transform ${openItem === 'top' ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                        {openItem === 'top' && (
                            <div className="text-gray-600 space-y-4 pb-4">
                                <div>
                                    <strong>Is my place right for Airbnb?</strong>
                                    <p>Airbnb guests are interested in all kinds of places – spare rooms, flats, houses, holiday homes, even treehouses.</p>
                                </div>
                                <div>
                                    <strong>Do I have to host all the time?</strong>
                                    <p>No – you control your calendar. You can host once a year, a few nights a month, or more often.</p>
                                </div>
                                <div>
                                    <strong>What are Airbnb’s fees?</strong>
                                    <p>It’s free to create a listing. Airbnb typically collects a 3% service fee from your reservation subtotal after you get paid.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="border-b">
                        <button
                            onClick={() => toggleItem('basics')}
                            className="w-full flex justify-between items-center py-4 text-left text-xl font-semibold"
                        >
                            Hosting basics
                            <span className={`transform transition-transform ${openItem === 'basics' ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                        {openItem === 'basics' && (
                            <div className="text-gray-600 space-y-4 pb-4">
                                <div>
                                    <strong>How do I get started?</strong>
                                    <p>You can create a listing in just a few steps, all at your own pace. Start by telling us about your home, take some photos and add details about what makes it unique. Start your listing.</p>
                                </div>
                                <div>
                                    <strong>How do I get my home ready for guests?</strong>
                                    <p>Make sure your home is clean, clutter-free, and that everything is working properly. Items like fresh linen and stocked toiletries help create a comfortable and inviting place to stay. Check out our guide to getting your home ready.</p>
                                </div>
                                <div>
                                    <strong>How am I protected when I host?</strong>
                                    <p>AirCover for Hosts provides top-to-bottom protection every time you host your home on Airbnb. Learn more about AirCover for Hosts and what’s included.</p>
                                </div>
                                <div>
                                    <strong>Any tips on being a great host?</strong>
                                    <p>From sharing a list of your favourite local places to responding quickly to guest messages, there are lots of ways to be an excellent host. Get more hosting tips.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border-b">
                        <button
                            onClick={() => toggleItem('policy')}
                            className="w-full flex justify-between items-center py-4 text-left text-xl font-semibold"
                        >
                            Policy & regulations
                            <span className={`transform transition-transform ${openItem === 'policy' ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                        {openItem === 'policy' && (
                            <div className="text-gray-600 space-y-4 pb-4">
                                <div>
                                    <strong>Are there any regulations that apply in my city?</strong>
                                    <p>Some areas have laws and regulations for hosting your home. It’s important to familiarise yourself with any laws that may apply to your location. Also, depending on where you live, you may need to check with your HOA, read your lease agreement or notify your landlord or neighbours about your plans to host on Airbnb. Learn more about responsible hosting.
                                    </p>
                                </div>
                                <div>
                                    <strong>What if I have other questions?</strong>
                                    <p>
                                        Local hosts are a great source for information and insights. We can connect you with an experienced Airbnb host in your area who may be able to answer additional questions. Ask a host.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Ask a Host button */}
                    <div className="text-center pt-6">
                        <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
                        <p className="text-gray-600 mb-4">Get answers from an experienced local host.</p>
                        <Link to="/ask-a-host"> <button
                            className="bg-black cursor-pointer text-white px-6 py-3 rounded-full font-semibold">
                            Ask a host
                        </button></Link>

                    </div>


                </div>
                <hr className="mt-10 text-gray-400 w-full"></hr>
                <p className="text-sm my-10 text-gray-600  text-left">Hosts on the Co‑Host Network typically have high ratings, low cancellation rates and established Airbnb hosting experience. Ratings are based on guest reviews for listings they host or co‑host and may not represent the co‑host’s unique services.
                    <br></br>
                    <br></br>  Co‑Host Network is powered by Airbnb Global Services Limited, Airbnb Living LLC and Airbnb Plataforma Digital Ltda. Available in select locations only
                    <a className="underline"> Learn more.</a></p>
                {/* Footer Components */}
                <FooterLinks></FooterLinks>
                <FooterBottom></FooterBottom>
            </div>
        </>
    )
}