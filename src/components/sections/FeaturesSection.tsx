
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Activity, Award, Star, Trophy } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          title="Experience Luxury Tennis Like Never Before"
          subtitle="Tennis Luxe Club offers exclusive, high-end tennis retreats that combine professional coaching, luxurious accommodations, and unforgettable experiences on the stunning French Riviera and Monaco."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          <FeatureCard
            icon={<Activity size={40} />}
            title="World-Class Coaching"
            description="Train with former ATP and WTA professionals in intimate group settings with personalized attention."
          />
          <FeatureCard
            icon={<Award size={40} />}
            title="Luxury Accommodations"
            description="Stay in premium villas and five-star hotels with Mediterranean views and exceptional amenities."
          />
          <FeatureCard
            icon={<Star size={40} />}
            title="Gourmet Experiences"
            description="Enjoy fine dining prepared by private chefs and exclusive tastings at renowned restaurants."
          />
          <FeatureCard
            icon={<Trophy size={40} />}
            title="Exclusive Access"
            description="Play on private courts, visit exclusive clubs, and attend special tennis events during your stay."
          />
        </div>

        <div className="mt-16 text-center">
          <NavLink to="/about">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              Learn More About Us
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
