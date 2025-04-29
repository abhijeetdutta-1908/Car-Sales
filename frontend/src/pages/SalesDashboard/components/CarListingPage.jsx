import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { fetchCars } from '../services/api';
import SectionTitle from '../components/SectionTitle';
import { Filter, ChevronDown, ChevronUp } from '../components/Icons';

const CarListingPage = () => {
  const [searchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const fetchCarListings = async () => {
    setLoading(true);
    const response = await fetchCars(searchParams.toString());
    setCars(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCarListings();
  }, [searchParams]);

  return (
    <div>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Browse Cars" 
            subtitle="Find your dream car" 
          />
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="flex items-center text-sm text-gray-600"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              {showFilters ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          {showFilters && (
            <div className="bg-gray-100 p-6 rounded-lg mt-4">
              {/* Add filter components here */}
            </div>
          )}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <p>Loading cars...</p>
            ) : (
              cars.map((car) => <CarCard key={car.id} car={car} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarListingPage;
