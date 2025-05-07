
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, TennisBall } from "lucide-react";
import { NavLink } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import RetreatCard from "@/components/RetreatCard";

const Index = () => {
  const upcomingRetreats = [
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

  const testimonials = [
    {
      quote:
        "The Tennis Luxe Club experience exceeded all my expectations. The coaches were world-class, the villa was stunning, and the attention to detail was impeccable. I'll be returning next year.",
      name: "Michael R.",
      title: "Executive & Tennis Enthusiast",
    },
    {
      quote:
        "From the moment we arrived, we were treated like royalty. The tennis facilities were exceptional, and the personalized coaching has transformed my game. Worth every penny.",
      name: "Sophia L.",
      title: "Finance Director",
    },
    {
      quote:
        "As someone who has attended tennis camps worldwide, Tennis Luxe Club stands out for its perfect balance of intensive training and luxury accommodations. The French Riviera setting is simply magical.",
      name: "James T.",
      title: "Retired Professional Player",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1200&h=800"
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

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Experience Luxury Tennis Like Never Before"
            subtitle="Tennis Luxe Club offers exclusive, high-end tennis retreats that combine professional coaching, luxurious accommodations, and unforgettable experiences on the stunning French Riviera and Monaco."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
            <FeatureCard
              icon={<TennisBall size={40} />}
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

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from tennis enthusiasts who have experienced our exclusive retreats on the French Riviera and Monaco."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
              Join Our Exclusive Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest retreat offerings, tennis tips from
              professionals, and exclusive promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 outline-none border border-gray-300 focus:border-gold"
              />
              <Button className="bg-gold hover:bg-opacity-90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
