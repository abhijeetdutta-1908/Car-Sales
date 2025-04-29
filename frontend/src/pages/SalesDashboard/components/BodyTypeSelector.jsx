import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const bodyTypes = [
  { id: 1, name: 'SUV', imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600', count: 124 },
  { id: 2, name: 'Sedan', imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600', count: 87 },
  { id: 3, name: 'Hatchback', imageUrl: 'https://images.pexels.com/photos/15952897/pexels-photo-15952897/free-photo-of-ford-fiesta-st-on-road.jpeg?auto=compress&cs=tinysrgb&w=600', count: 65 },
  { id: 4, name: 'Luxury', imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600', count: 42 }
];

const BodyTypeSelector = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Browse by Body Type" 
          subtitle="Find the perfect car that fits your lifestyle" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {bodyTypes.map((type) => (
            <Link 
              key={type.id}
              to={`/cars?bodyType=${encodeURIComponent(type.name)}`}
              className="relative group rounded-lg overflow-hidden aspect-square"
            >
              <img 
                src={type.imageUrl} 
                alt={`${type.name} cars`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-bold text-xl mb-1">{type.name}</h3>
                <p className="text-white/80 text-sm">{type.count} cars</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyTypeSelector;
