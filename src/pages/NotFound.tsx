
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl md:text-7xl font-bold font-playfair text-navy mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-playfair text-navy mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink to="/">
          <Button className="bg-gold hover:bg-opacity-90 text-white px-8">
            Return to Home
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
