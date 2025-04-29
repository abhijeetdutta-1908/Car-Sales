import React from "react"
import { Link } from "react-router-dom"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Car
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">CarWale</span>
            </div>
            <p className="mb-4">
              India's #1 auto portal for car buyers and owners
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/cars"
                  className="hover:text-primary-500 transition-colors"
                >
                  New Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/used-cars"
                  className="hover:text-primary-500 transition-colors"
                >
                  Used Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/compare"
                  className="hover:text-primary-500 transition-colors"
                >
                  Compare Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/sell-car"
                  className="hover:text-primary-500 transition-colors"
                >
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-primary-500 transition-colors"
                >
                  Car News
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="hover:text-primary-500 transition-colors"
                >
                  Car Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Popular Brands
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/cars?brand=Maruti"
                  className="hover:text-primary-500 transition-colors"
                >
                  Maruti Suzuki
                </Link>
              </li>
              <li>
                <Link
                  to="/cars?brand=Hyundai"
                  className="hover:text-primary-500 transition-colors"
                >
                  Hyundai
                </Link>
              </li>
              <li>
                <Link
                  to="/cars?brand=Tata"
                  className="hover:text-primary-500 transition-colors"
                >
                  Tata
                </Link>
              </li>
              <li>
                <Link
                  to="/cars?brand=Mahindra"
                  className="hover:text-primary-500 transition-colors"
                >
                  Mahindra
                </Link>
              </li>
              <li>
                <Link
                  to="/cars?brand=Toyota"
                  className="hover:text-primary-500 transition-colors"
                >
                  Toyota
                </Link>
              </li>
              <li>
                <Link
                  to="/cars?brand=Honda"
                  className="hover:text-primary-500 transition-colors"
                >
                  Honda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>
                  123 CarWale Tower, Auto Street, Motorville, India - 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-500" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-500" />
                <span>contact@carwale-clone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 CarWale Clone. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="hover:text-primary-500 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
