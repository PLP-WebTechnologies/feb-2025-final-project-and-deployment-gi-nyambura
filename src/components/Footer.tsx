
import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold font-poppins text-gray-800">
                Mama Mboga
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Connecting local farmers directly to consumers. Fresh, affordable produce at your doorstep.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-medium text-lg text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Shop by Category
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Track Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-medium text-lg text-gray-800 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Seller Information */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-medium text-lg text-gray-800 mb-4">
              Sell with Us
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/seller" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Become a Seller
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Seller Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Mama Mboga. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
