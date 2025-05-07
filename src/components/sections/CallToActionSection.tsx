
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section
      className="py-24 px-4 bg-navy text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200)",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Elevate Your Tennis Experience
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Join us for a week of tennis, luxury, and unforgettable moments on
            the French Riviera or Monaco. Our retreats combine professional
            coaching, premium accommodations, and exclusive experiences.
          </p>
          <Button className="bg-gold hover:bg-opacity-90 text-white px-8 py-6" size="lg">
            Book Your Retreat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
