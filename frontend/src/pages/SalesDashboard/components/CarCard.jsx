import React from "react"
import { Link } from "react-router-dom"
import { Star, Heart, Fuel, Settings, ArrowRight } from "lucide-react"

const CarCard = ({ car, showCompareButton = false, onCompareClick }) => {
  // Format price in Indian format (e.g., "₹10.50 Lakh")
  const formatPrice = price => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lakh`
    } else {
      return `₹${price.toLocaleString("en-IN")}`
    }
  }

  // Determine label (Featured, New, Popular)
  const getLabel = () => {
    if (car.isNew) return { text: "New", bgColor: "bg-green-500" }
    if (car.isFeatured) return { text: "Featured", bgColor: "bg-primary-600" }
    if (car.isPopular) return { text: "Popular", bgColor: "bg-accent-500" }
    return null
  }

  const label = getLabel()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Label */}
        {label && (
          <div
            className={`absolute top-3 left-3 ${label.bgColor} text-white text-xs font-bold px-2 py-1 rounded`}
          >
            {label.text}
          </div>
        )}

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-1.5 rounded-full transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-primary-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              <Link
                to={`/cars/${car.id}`}
                className="hover:text-primary-600 transition-colors"
              >
                {car.brand} {car.model}
              </Link>
            </h3>
            <p className="text-gray-500 text-sm">{car.year}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
            <span className="font-medium">{car.rating}</span>
            <span className="text-gray-500 ml-1">({car.reviewCount})</span>
          </div>
        </div>

        {/* Price */}
        <div className="my-3">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(car.price)}
          </span>
          <span className="text-sm text-gray-500 ml-1">onwards</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <Fuel className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{car.fuel}</span>
          </div>
          <div className="flex items-center">
            <Settings className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{car.transmission}</span>
          </div>
          <div className="flex items-center col-span-2">
            <span className="text-sm text-gray-600">{car.mileage} km/l</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Link
            to={`/cars/${car.id}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded transition-colors"
          >
            View Details
          </Link>

          {showCompareButton && (
            <button
              onClick={() => onCompareClick && onCompareClick(car)}
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded transition-colors"
            >
              <span className="mr-1">Compare</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarCard
