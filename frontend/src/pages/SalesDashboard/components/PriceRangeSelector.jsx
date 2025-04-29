import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const priceRanges = [
  { id: 1, label: 'Under ₹5 Lakh', min: 0, max: 500000 },
  { id: 2, label: '₹5-10 Lakh', min: 500000, max: 1000000 },
  { id: 3, label: '₹10-20 Lakh', min: 1000000, max: 2000000 },
  { id: 4, label: '₹20-50 Lakh', min: 2000000, max: 5000000 },
  { id: 5, label: 'Above ₹50 Lakh', min: 5000000, max: null },
];

const PriceRangeSelector = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Find Cars by Budget" 
          subtitle="Discover the perfect car that fits your price range" 
        />
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {priceRanges.map((range) => {
            const queryParams = range.max 
              ? `minPrice=${range.min}&maxPrice=${range.max}` 
              : `minPrice=${range.min}`;
            
            return (
              <Link
                key={range.id}
                to={`/cars?${queryParams}`}
                className="bg-white border border-gray-200 hover:border-primary-500 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all text-center min-w-[180px]"
              >
                <h3 className="text-gray-900 font-medium">{range.label}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriceRangeSelector;
