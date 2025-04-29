import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, User, Heart, Menu, X, ChevronDown, Car } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                CarWale
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for cars, brands..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary-600">
                <span>New Cars</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/cars"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Browse All Cars
                </Link>
                <Link
                  to="/cars?bodyType=SUV"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  SUVs
                </Link>
                <Link
                  to="/cars?bodyType=Sedan"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sedans
                </Link>
                <Link
                  to="/cars?bodyType=Hatchback"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Hatchbacks
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary-600">
                <span>Used Cars</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/used-cars"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Browse Used Cars
                </Link>
                <Link
                  to="/sell-car"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sell Your Car
                </Link>
              </div>
            </div>

            <Link
              to="/compare"
              className="text-gray-800 hover:text-primary-600"
            >
              Compare Cars
            </Link>

            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-primary-600">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-800 hover:text-primary-600">
                <User className="h-6 w-6" />
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4">
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search for cars, brands..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="mt-4 space-y-1">
              <div className="py-2 border-b border-gray-200">
                <Link
                  to="/cars"
                  className="block text-gray-800 hover:text-primary-600"
                >
                  New Cars
                </Link>
              </div>
              <div className="py-2 border-b border-gray-200">
                <Link
                  to="/used-cars"
                  className="block text-gray-800 hover:text-primary-600"
                >
                  Used Cars
                </Link>
              </div>
              <div className="py-2 border-b border-gray-200">
                <Link
                  to="/compare"
                  className="block text-gray-800 hover:text-primary-600"
                >
                  Compare Cars
                </Link>
              </div>
              <div className="py-2 border-b border-gray-200">
                <Link
                  to="/sell-car"
                  className="block text-gray-800 hover:text-primary-600"
                >
                  Sell Your Car
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/login"
                  className="block text-gray-800 hover:text-primary-600"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
