import { listings } from '../data/listings';

const Listings = ({ selectedCategory }) => {
  const filtered = selectedCategory
    ? listings.filter(item => item.category === selectedCategory)
    : listings;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-4">
      {filtered.map(listing => (
        <div key={listing.id} className="shadow-md rounded-lg overflow-hidden">
          <img src={listing.img} alt={listing.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">{listing.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;