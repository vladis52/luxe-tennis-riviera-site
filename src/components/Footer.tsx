
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div className="lg:col-span-1">
          <h3 className="font-playfair text-2xl font-bold mb-6">
            Tennis <span className="text-gold">Luxe</span> Club
          </h3>
          <p className="text-sm leading-relaxed opacity-80 mb-6 max-w-xs">
            Experience exclusive luxury tennis retreats on the stunning French Riviera and
            Monaco. Where passion for tennis meets unparalleled luxury.
          </p>
        </div>

        <div>
          <h4 className="font-playfair text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/retreats"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Retreats
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair text-lg mb-6">Retreats</h4>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/retreats/french-riviera"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                French Riviera
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/retreats/monaco"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Monaco
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/retreats/calendar"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Upcoming Dates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/retreats/booking"
                className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors"
              >
                Booking
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair text-lg mb-6">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm opacity-80">
                1 Avenue Princesse Grace, 98000 Monaco
              </span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="text-gold mr-2 flex-shrink-0" />
              <span className="text-sm opacity-80">+377 99 99 99 99</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
              <span className="text-sm opacity-80">info@tennisluxeclub.com</span>
            </li>
          </ul>

          <div className="mt-8">
            <h5 className="text-sm uppercase tracking-wider mb-4">Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white bg-opacity-10 px-4 py-2 text-sm flex-1 outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gold text-white px-4 py-2 text-sm hover:bg-opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white border-opacity-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Tennis Luxe Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs opacity-60 hover:opacity-100 hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="text-xs opacity-60 hover:opacity-100 hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
