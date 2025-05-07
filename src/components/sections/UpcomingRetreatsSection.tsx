
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import RetreatCard from "@/components/RetreatCard";

interface Retreat {
  image: string;
  title: string;
  location: string;
  date: string;
  price: string;
  description: string;
}

const UpcomingRetreatsSection = () => {
  const upcomingRetreats: Retreat[] = [
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      title: "Summer Tennis Escape",
      location: "French Riviera",
      date: "Jun 15 - Jun 22, 2025",
      price: "€8,500",
      description:
        "Experience a week of world-class tennis coaching and luxury accommodations on the stunning French Riviera.",
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      title: "Elite Tennis Experience",
      location: "Monaco",
      date: "Jul 10 - Jul 17, 2025",
      price: "€9,750",
      description:
        "Train like a professional in the heart of Monaco with former ATP tour coaches and luxury five-star amenities.",
    },
    {
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800",
      title: "Mediterranean Tennis Week",
      location: "French Riviera",
      date: "Aug 5 - Aug 12, 2025",
      price: "€8,750",
      description:
        "Combine intensive tennis sessions with relaxing Mediterranean surroundings in this exclusive retreat.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-beige">
      <div className="container mx-auto">
        <SectionTitle
          title="Upcoming Tennis Retreats"
          subtitle="Secure your spot at our exclusive tennis retreats on the French Riviera and Monaco. Limited availability ensures an intimate and personalized experience."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingRetreats.map((retreat, index) => (
            <RetreatCard
              key={index}
              image={retreat.image}
              title={retreat.title}
              location={retreat.location}
              date={retreat.date}
              price={retreat.price}
              description={retreat.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <NavLink to="/retreats">
            <Button className="bg-gold hover:bg-opacity-90 text-white">
              View All Retreats
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRetreatsSection;
