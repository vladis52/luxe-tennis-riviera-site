
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Retreats", path: "/retreats" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-navy">
            Tennis <span className="text-gold">Luxe</span> Club
          </span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-wider font-medium hover-underline",
                  isActive
                    ? "text-gold"
                    : isScrolled
                    ? "text-navy"
                    : "text-white"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            className="bg-gold hover:bg-opacity-90 text-white rounded-none px-6"
            variant="default"
          >
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} className={!isScrolled ? "text-white" : ""} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block py-3 text-sm uppercase tracking-wider font-medium",
                    isActive ? "text-gold" : "text-navy hover:text-gold"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              className="bg-gold hover:bg-opacity-90 text-white rounded-none px-6 mt-4 w-full"
              variant="default"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
