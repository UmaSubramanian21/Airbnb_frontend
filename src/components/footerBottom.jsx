// Page - Footer Bottom - contact pages links

function FooterBottom() {
    return (
        <div
            className="flex flex-col md:flex-row  
                    justify-between items-center 
                    px-10 py-4 border-t text-sm text-gray-600 bg-white">
            <div className="mb-2 md:mb-0"> 
                © 2025 Airbnb, Inc. ·{" "}
                <a href="#" className="hover:underline">Privacy</a> ·{" "}
                <a href="#" className="hover:underline">Terms</a> ·{" "}
                <a href="#" className="hover:underline">Sitemap</a> ·{" "}
                <a href="#" className="hover:underline">Company details</a>
            </div>

            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 hover:underline cursor-pointer">
                    <i className="fas fa-globe"></i> English (IN)
                </span>
                <span className="hover:underline cursor-pointer">₹ INR</span>
                <div className="flex gap-3 text-lg">
                    <a href="#" className="hover:text-black">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:text-black">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-black">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom