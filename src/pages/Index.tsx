
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UpcomingRetreatsSection from "@/components/sections/UpcomingRetreatsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1576028833245-a4d5f1afbc8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
        title="Exclusive Tennis Retreats on the French Riviera & Monaco"
        subtitle="Experience world-class tennis coaching, luxurious accommodations, and breathtaking Mediterranean views at our exclusive week-long retreats."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-gold hover:bg-opacity-90 text-white font-medium px-8 py-6"
            size="lg"
          >
            Explore Our Retreats
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-navy font-medium px-8 py-6"
            size="lg"
          >
            Watch Video
          </Button>
        </div>
      </HeroSection>

      <FeaturesSection />
      <UpcomingRetreatsSection />
      <CallToActionSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default Index;
