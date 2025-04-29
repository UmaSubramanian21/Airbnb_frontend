import { useLocation } from 'react-router-dom';

function PlaceDetails() {
    const location = useLocation();
    const place = location.state;

    if (!place) {
        return <div>No place selected!</div>
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <img src={place.image} alt={place.name} className="w-[500px] h-[400px] object-cover rounded-xl shadow-lg" />
            <h2 className="text-3xl font-bold mt-4">{place.name}</h2>
            <p className="text-gray-600 text-lg">Rating: ★ {place.rating}</p>
            <p className="text-gray-500">{place.distance} away</p>
            <p className="text-xl font-semibold mt-2">Price: ₹ {place.price} / night</p>
        </div>
    );
}

export default PlaceDetails;
