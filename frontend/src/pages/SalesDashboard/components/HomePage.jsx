import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import PopularBrands from '../components/PopularBrands';
import FeaturedCars from '../components/FeaturedCars';
import BodyTypeSelector from '../components/BodyTypeSelector';
import PriceRangeSelector from '../components/PriceRangeSelector';

const HomePage = () => {
  useEffect(() => {
    document.title = 'CarWale Clone - Find Your Perfect Car';
  }, []);

  return (
    <div>
      <HeroBanner />
      <PopularBrands />
      <FeaturedCars />
      <BodyTypeSelector />
      <PriceRangeSelector />
    </div>
  );
};

export default HomePage;
