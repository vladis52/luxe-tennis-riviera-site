
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Andre Laurent",
      role: "Founder & Head Coach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800",
      bio: "Former ATP tour player with 15 years of coaching experience at elite clubs worldwide.",
    },
    {
      name: "Sofia Martinez",
      role: "Tennis Professional",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800",
      bio: "Former WTA player with expertise in technical development and mental conditioning.",
    },
    {
      name: "Philippe Dubois",
      role: "Hospitality Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
      bio: "Luxury hospitality expert with experience managing five-star resorts across Europe.",
    },
    {
      name: "Elise Renard",
      role: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800",
      bio: "Specialized in tennis-specific fitness training and injury prevention techniques.",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&h=800"
        title="About Tennis Luxe Club"
        subtitle="Discover the story behind our exclusive tennis retreats and meet our team of professionals dedicated to providing exceptional experiences."
      />

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Tennis Luxe Club was founded in 2015 by former ATP player Andre Laurent with a vision to create tennis experiences that blend professional coaching with luxury accommodations in some of the world's most beautiful locations.
              </p>
              <p className="text-gray-600 mb-4">
                What began as intimate retreats for a small group of tennis enthusiasts has evolved into exclusive week-long tennis camps that attract passionate players from around the world seeking to improve their skills while enjoying the finest things life has to offer.
              </p>
              <p className="text-gray-600 mb-8">
                Our focus remains on providing personalized attention, world-class coaching, and unforgettable experiences against the backdrop of the stunning French Riviera and glamorous Monaco.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120"
                  alt="Andre Laurent"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-navy">Andre Laurent</h4>
                  <p className="text-sm text-gray-500">Founder & Head Coach</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800"
                  alt="Tennis Retreat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-12 -left-12 w-48 h-48 bg-gold opacity-10 -z-10"></div>
              <div className="absolute bottom-12 -right-12 w-48 h-48 bg-navy opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Philosophy"
            subtitle="At Tennis Luxe Club, we believe in combining passion for tennis with extraordinary experiences in breathtaking locations."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-navy bg-opacity-5 rounded-full mb-6">
                <span className="font-playfair text-2xl font-bold text-gold">01</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Excellence in Coaching
              </h3>
              <p className="text-gray-600">
                Our coaching staff consists of former professional players and certified coaches with decades of experience. We maintain small coach-to-player ratios to ensure personalized attention and rapid improvement.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-navy bg-opacity-5 rounded-full mb-6">
                <span className="font-playfair text-2xl font-bold text-gold">02</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Luxury Experience
              </h3>
              <p className="text-gray-600">
                We believe that accommodations, dining, and off-court experiences should be as exceptional as our tennis instruction. Every aspect of our retreats is designed with sophistication and comfort in mind.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-navy bg-opacity-5 rounded-full mb-6">
                <span className="font-playfair text-2xl font-bold text-gold">03</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Exclusive Community
              </h3>
              <p className="text-gray-600">
                By limiting our retreats to small groups, we foster a community of like-minded tennis enthusiasts who form lasting connections. Many of our clients return year after year to reconnect with fellow tennis lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Our experienced professionals are dedicated to providing exceptional tennis instruction and luxury experiences."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200)",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Tennis Luxe Difference
          </h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-10">
            Ready to elevate your tennis experience? Join us for a week of
            professional coaching, luxury accommodations, and unforgettable
            moments on the French Riviera or Monaco.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/retreats">
              <Button className="bg-gold hover:bg-opacity-90 text-white px-8">
                Explore Retreats
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-8"
              >
                Contact Us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
