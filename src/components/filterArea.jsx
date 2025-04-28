
import { useRef, useState, useEffect } from 'react';
import filter_icon from '../assets/images/filter__logo.jpg'
import priceTag from '../assets/images/price tag.png'

const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

// To make import images easy
const imageRoutes = {
  'Amazing views.jpg': { key: 'Amazing views', label: 'Amazing views' },
  'icons.jpg': { key: 'icons', label: 'Icons' },
  'BeachFronts.jpg': { key: 'beach', label: 'Beach' },
  'Cabins.jpg': { key: 'cabins', label: 'Cabins' },
  'A-frames.jpg': { key: 'A-frames', label: 'A-frames' },
  'Amazing pools.jpg': { key: 'Amazing pools', label: 'Amazing pools' },
  'Arctic.jpg': { key: 'Arctic', label: 'Arctic' },
  'bed&breakfast.jpg': { key: 'bed&breakfast', label: 'bed&breakfast' },
  'Boats.jpg': { key: 'Boats', label: 'Boats' },
  'Camper vans.jpg': { key: 'Camper vans', label: 'Camper vans' },
  'camping.jpg': { key: 'camping', label: 'camping' },
  'castles.jpg': { key: 'castles', label: 'castles' },
  'Caves.jpg': { key: 'Caves', label: 'Caves' },
  'Chefs kitchen.jpg': { key: 'Chefs kitchen', label: `Chef's kitchen` },
  'containers.jpg': { key: 'containers', label: 'containers' },
  'CountrySide.jpg': { key: 'CountrySide', label: 'CountrySide' },
  'Cycladic homes.jpg': { key: 'Cycladic homes', label: 'Cycladic homes' },
  'Desert.jpg': { key: 'Desert', label: 'Desert' },
  'designs.jpg': { key: 'designs', label: 'designs' },
  'Domes.jpg': { key: 'Domes', label: 'Domes' },
  'Earth homes.jpg': { key: 'Earth homes', label: 'Earth homes' },
  'Farms.jpg': { key: 'Farms', label: 'Farms' },
  'Golfing.jpg': { key: 'Golfing', label: 'Golfing' },
  'Hanoks.jpg': { key: 'Hanoks', label: 'Hanoks' },
  'historical homes.jpg': { key: 'historical homes', label: 'historical homes' },
  'houseboat.jpg': { key: 'houseboat', label: 'houseboat' },
  'island.jpg': { key: 'island', label: 'island' },
  'Lakefronts.jpg': { key: 'Lakefronts', label: 'Lakefronts' },
  'Lakes.jpg': { key: 'Lakes', label: 'Lakes' },
  'logo.jpg': { key: 'logo', label: 'logo' },
  'Mansions.jpg': { key: 'Mansions', label: 'Mansions' },
  'National parks.jpg': { key: 'National parks', label: 'National parks' },
  'New.jpg': { key: 'New', label: 'New' },
  'Luxe.jpg': { key: 'Luxe', label: 'Luxe' },
  'off the grid.jpg': { key: 'off the grid', label: 'Off the grid' },
  'OMG.jpg': { key: 'OMG', label: 'OMG' },
  'Play.jpg': { key: 'Play', label: 'Play' },
  'Rooms.jpg': { key: 'Rooms', label: 'Rooms' },
  'Ryokans.jpg': { key: 'Ryokans', label: 'Ryokans' },
  'Sheperd.jpg': { key: 'Sheperd', label: 'Sheperd' },
  'Skillings.jpg': { key: 'Skillings', label: 'Skillings' },
  'surfing.jpg': { key: 'surfing', label: 'Surfing' },
  'tiny homes.jpg': { key: 'tiny homes', label: 'Tiny homes' },
  'top cities.jpg': { key: 'top cities', label: 'Top cities' },
  'top.jpg': { key: 'top', label: 'Top' },
  'Towers.jpg': { key: 'Towers', label: 'Towers' },
  'Treding.jpg': { key: 'Treding', label: 'Treding' },
  'Treehouses.jpg': { key: 'Treehouses', label: 'Treehouses' },
  'tropical.jpg': { key: 'tropical', label: 'Tropical' },
  'Vineyards.jpg': { key: 'Vineyards', label: 'Vineyards' },
  'Windmils.jpg': { key: 'Windmils', label: 'Windmils' },
};

const FilterArea = ({ selectedCategory, setSelectedCategory }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };


  return (
    <>
      <section id="filterArea__main"
        className='flex justify-between items-center 
                  px-10 bg-white sticky top-[19%]'>

        {/* icons section  */}
        <div className="relative w-[70%] px-10 "
          id="filterArea__scrollbar">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute border-gray-500 left-2 top-1/2 -translate-y-1/2 z-10 p-2 
                    bg-white shadow-md rounded-full"
          >
            ←
          </button>

          {/* Icon List */}
          <section
            id="filterArea"
            ref={scrollRef}
            className="flex gap-4 overflow-hidden px-4 py-5 scroll-smooth no-scrollbar">

            {Object.entries(images).map(([path, src]) => {
              const fileName = path.split('/').pop();
              const data = imageRoutes[fileName];
              if (!data) return null;

              return (
                <button
                  key={fileName}
                  onClick={() => setSelectedCategory(data.key)}
                  className={`text-center min-w-[80px]  ${selectedCategory === data.key ? 'border-b-2 border-rose-500' : ''
                    }`}
                >
                  <img src={src} alt={data.label} className="w-6 h-6 mx-auto" />
                  <p className="text-xs mt-1">{data.label}</p>
                </button>
              );
            })}
          </section>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-2  top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
          >
            →
          </button>

        </div>

        {/* filter */}
        <section id="filterArea__filter__icon" className='flex right-0 gap-10'>
          <div className=' rounded-lg flex gap-1 shadow-lg w-[18%] p-2 items-center justify-center'>
            <div><img src={filter_icon} ></img></div>
            <p className='text-xs font-bold'>Filter</p>
          </div>
          {/* offer section */}
        <div className="flex items-center justify-between">
            <img
              src={priceTag}
              alt="Price Tag"
              className="w-16 mr-2 animate-pulse" ></img>
            <p className="whitespace-nowrap">Prices include all fees</p>
          </div>
        </section>
        
      </section>
    </>
  )
}

export default FilterArea;