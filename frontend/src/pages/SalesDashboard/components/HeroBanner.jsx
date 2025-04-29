import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, Search } from "lucide-react"

const HeroBanner = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/cars?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative h-[500px] md:h-[600px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
            Find Your Perfect Car
          </h1>
          <p
            className="text-xl text-gray-200 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Compare, Research and Buy the Right Car for You
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars, brands or models..."
                className="w-full px-5 py-4 pr-12 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-lg"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full bg-primary-600 hover:bg-primary-700 text-white px-5 rounded-r-lg transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </form>

          {/* Quick links */}
          <div
            className="flex flex-wrap gap-3 mt-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#popular-brands"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-sm transition-colors"
            >
              Popular Brands
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a
              href="#featured-cars"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-sm transition-colors"
            >
              Featured Cars
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a
              href="/compare"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-sm transition-colors"
            >
              Compare Cars
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
