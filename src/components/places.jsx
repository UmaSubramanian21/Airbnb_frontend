// // import all tourist place images section
// import { useNavigate } from 'react-router'
// import gokarna from '../assets/places/gokarna.jpeg'
// import india from '../assets/places/india.jpeg'
// import kandy from '../assets/places/kandy.jpeg'
// import karnataka from '../assets/places/karnataka.jpeg'
// import kollam from '../assets/places/kollam.jpeg'
// import kothagiri from '../assets/places/kothagiri.jpeg'
// import munnar from '../assets/places/munnar.jpeg'
// import nandhi from '../assets/places/nandhi.jpeg'

// function Places() {
//     const navigate = useNavigate()

//     function handleReserve() {
//         navigate('/reserve')
//     }
//     return (
//         <>
//             <div className='px-10 py-2'>

//                 {/* tourist places pictures section 1*/}
//                 <section id="places__images" className='flex flex-wrap gap-5 mb-5 justify-center'>

//                     {/* image 1 */}
//                     <div onClick={handleReserve()}>
//                         <img src={gokarna} ></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Gokarna</p>
//                                 <p>★ 4.94</p>
//                             </div>
//                             <p className='text-gray-400'>4535 Kilometers away</p>
//                             <p className='text-gray-400'>23-25 May</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 76000 /-</span> for five nights </p>
//                         </div>
//                     </div>
//                     {/* image2 */}
//                     <div
//                         onClick={handleReserve()}>

//                         <img src={india}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>India</p>
//                                 <p>★ 5.94</p>
//                             </div>
//                             <p className='text-gray-400'>2784 Kilometers away</p>
//                             <p className='text-gray-400'>03-09 May</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 67000 /-</span> for five nights </p>
//                         </div>
//                     </div>
//                     {/* image 3 */}
//                     <div onClick={handleReserve()}>
//                         <img src={kandy}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Kandy</p>
//                                 <p>★ 3.94</p>
//                             </div>
//                             <p className='text-gray-400'>4786 Kilometers away</p>
//                             <p className='text-gray-400'>09-15 May</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 98000 /-</span> for five nights </p>
//                         </div>

//                     </div>
//                     {/* image4 */}
//                     <div>
//                         <img src={karnataka}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Karnataka</p>
//                                 <p>★ 4.94</p>
//                             </div>
//                             <p className='text-gray-400'>3683 Kilometers away</p>
//                             <p className='text-gray-400'>03-09 May</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 89000 /-</span> for five nights </p>
//                         </div>

//                     </div>

//                 </section>

//                 {/* section 2 places */}
//                 <section id="places__images__1" className='flex flex-wrap gap-5 mb-5 justify-center mt-5'>

//                     <div>
//                         <img src={kollam}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Kollam</p>
//                                 <p>★ 4.94</p>
//                             </div>
//                             <p className='text-gray-400'>983 Kilometers away</p>
//                             <p className='text-gray-400'>23-25 June</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 89000 /-</span> for five nights </p>
//                         </div>
//                     </div>

//                     <div>
//                         <img src={kothagiri}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Kothagiri</p>
//                                 <p>★ 2.90</p>
//                             </div>
//                             <p className='text-gray-400'>3875 Kilometers away</p>
//                             <p className='text-gray-400'>25-30 June</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 76000 /-</span> for five nights </p>
//                         </div>

//                     </div>
//                     <div>
//                         <img src={munnar}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Munnar</p>
//                                 <p>★ 4.94</p>
//                             </div>
//                             <p className='text-gray-400'>455 Kilometers away</p>
//                             <p className='text-gray-400'>23-25 June</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 49000 /-</span> for five nights </p>
//                         </div>

//                     </div>
//                     <div>
//                         <img src={nandhi}></img>
//                         {/* description section under image */}
//                         <div className='p-1'>
//                             <div className='flex justify-between'>
//                                 <p className='font-bold'>Nandhi</p>
//                                 <p>★ 4.94</p>
//                             </div>
//                             <p className='text-gray-400'>3544 Kilometers away</p>
//                             <p className='text-gray-400'>23-25 July</p>
//                             <p className='font-semibold'><span className='underline font-bold'>₹ 41000 /-</span> for five nights </p>
//                         </div>

//                     </div>
//                 </section>

//             </div>
//         </>
//     )
// }

// export default Places

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
        { image: gokarna, name: "Gokarna", rating: "4.94", distance: "4535 Kilometers", date: "23-25 May", price: 76000 },
        { image: india, name: "India", rating: "5.94", distance: "2784 Kilometers", date: "03-09 May", price: 67000 },
        { image: kandy, name: "Kandy", rating: "3.94", distance: "4786 Kilometers", date: "09-15 May", price: 98000 },
        { image: karnataka, name: "Karnataka", rating: "4.94", distance: "3683 Kilometers", date: "03-09 May", price: 89000 },
        { image: kollam, name: "Kollam", rating: "4.94", distance: "983 Kilometers", date: "23-25 June", price: 89000 },
        { image: kothagiri, name: "Kothagiri", rating: "2.90", distance: "3875 Kilometers", date: "25-30 June", price: 76000 },
        { image: munnar, name: "Munnar", rating: "4.94", distance: "455 Kilometers", date: "23-25 June", price: 49000 },
        { image: nandhi, name: "Nandhi", rating: "4.94", distance: "3544 Kilometers", date: "23-25 July", price: 41000 },
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
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
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
