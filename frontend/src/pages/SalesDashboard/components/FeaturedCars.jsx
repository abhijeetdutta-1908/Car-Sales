import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CarCard from "./CarCard"
import SectionTitle from "./SectionTitle"
import { fetchFeaturedCars } from "../services/api"

const FeaturedCars = () => {
  const [featuredCars, setFeaturedCars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadFeaturedCars = async () => {
      try {
        setIsLoading(true)
        const data = await fetchFeaturedCars()
        setFeaturedCars(data)
        setError(null)
      } catch (err) {
        setError("Failed to load featured cars")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadFeaturedCars()
  }, [])

  // Scroll functionality for carousel
  const scrollLeft = () => {
    const container = document.getElementById("featured-cars-container")
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("featured-cars-container")
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  if (isLoading) {
    return (
      <section id="featured-cars" className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Cars"
            subtitle="Explore the most popular cars on CarWale"
          />
          <div className="flex justify-center">
            <div className="animate-pulse space-y-4 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-gray-200 h-72 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="featured-cars" className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Cars"
            subtitle="Explore the most popular cars on CarWale"
          />
          <div className="text-center text-red-500">
            {error}. Please try again later.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="featured-cars" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle
            title="Featured Cars"
            subtitle="Explore the most popular cars on CarWale"
            alignment="left"
          />

          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          id="featured-cars-container"
          className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {featuredCars.map(car => (
            <div
              key={car.id}
              className="min-w-[300px] md:min-w-[350px] snap-start"
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/cars"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Cars
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars
