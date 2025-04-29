import PropertyHeader from './PropertyHeader';
import PropertyHighlights from './PropertyHighlights';
import HostInfo from './HostInfo';
import PropertyFeatures from './PropertyFeatures';
import PropertyDescription from './PropertyDescription';
import SleepingArrangements from './SleepingArrangements';
import BookingBox from './BookingBox';
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router';
import Navbar from "./reservation__navbar"

export default function PropertyPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-10 px-8 py-10">

                {/* Left Section */}
                <div className="flex-1 flex flex-col gap-6 px-10 py-5">
                    <PropertyHeader />
                    <PropertyHighlights />
                    <HostInfo />
                    <PropertyFeatures />
                    <PropertyDescription />
                    <SleepingArrangements />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/3 sticky top-24">
                    <BookingBox />
                </div>
            </div>
        </>
    );
}
