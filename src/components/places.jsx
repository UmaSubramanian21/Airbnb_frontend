
import { useNavigate } from 'react-router'
import gokarna from '../assets/places/gokarna.jpeg'
import india from '../assets/places/india.jpeg'
import kandy from '../assets/places/kandy.jpeg'
import karnataka from '../assets/places/karnataka.jpeg'
import kollam from '../assets/places/kollam.jpeg'
import kothagiri from '../assets/places/kothagiri.jpeg'
import munnar from '../assets/places/munnar.jpeg'
import nandhi from '../assets/places/nandhi.jpeg'

function Places() {
    const navigate = useNavigate();

    const places = [
        { image: gokarna, name: "Gokarna", rating: "4.94", distance: "4535 Kilometers", date: "23-25 May", price: 7600 },
        { image: india, name: "India", rating: "5.94", distance: "2784 Kilometers", date: "03-09 May", price: 6700 },
        { image: kandy, name: "Kandy", rating: "3.94", distance: "4786 Kilometers", date: "09-15 May", price: 9800 },
        { image: karnataka, name: "Karnataka", rating: "4.94", distance: "3683 Kilometers", date: "03-09 May", price: 8900 },
        { image: kollam, name: "Kollam", rating: "4.94", distance: "983 Kilometers", date: "23-25 June", price: 8900 },
        { image: kothagiri, name: "Kothagiri", rating: "2.90", distance: "3875 Kilometers", date: "25-30 June", price: 7600 },
        { image: munnar, name: "Munnar", rating: "4.94", distance: "455 Kilometers", date: "23-25 June", price: 4900 },
        { image: nandhi, name: "Nandhi", rating: "4.94", distance: "3544 Kilometers", date: "23-25 July", price: 4100 },
    ];

    function handleReserve(place) {
        navigate('/reserve', { state: place });
    }

    return (
        <div className='px-10 py-2'>
            {/* tourist places pictures */}
            <section id="places__images" className='flex flex-wrap gap-5 mb-5 justify-center'>
                {places.map((place, index) => (
                    <div
                        key={index}
                        onClick={() => handleReserve(place)}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img src={place.image} alt={place.name} className="w-72 h-60 object-cover rounded-lg" />
                        <div className='p-1'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>{place.name}</p>
                                <p>★ {place.rating}</p>
                            </div>
                            <p className='text-gray-400'>{place.distance} away</p>
                            <p className='text-gray-400'>{place.date}</p>
                            <p className='font-semibold'>
                                <span className='underline font-bold'>₹ {place.price} /-</span> for five nights
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Places;
