import React from "react"
import { Link } from "react-router-dom"
import SectionTitle from "./SectionTitle"

const brands = [
  {
    id: 1,
    name: "Maruti Suzuki",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/maruti.png",
    carCount: 48
  },
  {
    id: 2,
    name: "Hyundai",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/hyundai.png",
    carCount: 35
  },
  {
    id: 3,
    name: "Tata",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/tata.png",
    carCount: 29
  },
  {
    id: 4,
    name: "Mahindra",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/mahindra.png",
    carCount: 31
  },
  {
    id: 5,
    name: "Toyota",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/toyota.png",
    carCount: 18
  },
  {
    id: 6,
    name: "Honda",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/honda.png",
    carCount: 14
  },
  {
    id: 7,
    name: "Kia",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/kia.png",
    carCount: 9
  },
  {
    id: 8,
    name: "Mercedes-Benz",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/mercedes.png",
    carCount: 24
  },
  {
    id: 9,
    name: "BMW",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/bmw.png",
    carCount: 21
  },
  {
    id: 10,
    name: "Audi",
    logoUrl: "https://www.carwale.com/images/logo-manufacturers/audi.png",
    carCount: 17
  }
]

const PopularBrands = () => {
  return (
    <section id="popular-brands" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Popular Brands"
          subtitle="Explore cars from top manufacturers"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {brands.map(brand => (
            <Link
              key={brand.id}
              to={`/cars?brand=${encodeURIComponent(brand.name)}`}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-gray-800 font-medium">{brand.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {brand.carCount} models
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/cars"
            className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
          >
            View All Brands
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularBrands
