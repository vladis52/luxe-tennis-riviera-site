
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const Retreats = () => {
  const locations = [
    {
      name: "French Riviera",
      description:
        "Experience our signature tennis retreat in the heart of the French Riviera. Train on clay courts overlooking the Mediterranean, stay in a luxurious private villa with panoramic sea views, and enjoy gourmet cuisine prepared by our private chef.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      features: [
        "5 clay courts with sea views",
        "Private luxury villa accommodation",
        "Daily gourmet meals by private chef",
        "Access to beach club and spa",
        "Wine tasting experience at local vineyard",
        "Personalized coaching (4:1 player-to-coach ratio)",
      ],
    },
    {
      name: "Monaco",
      description:
        "Our Monaco retreat offers an unparalleled tennis experience in the playground of the elite. Train at exclusive tennis facilities, stay at a five-star hotel in the heart of Monte Carlo, and enjoy the glamorous Monaco lifestyle.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      features: [
        "Access to exclusive Monaco tennis club",
        "Five-star hotel accommodation",
        "Michelin-starred dining experiences",
        "Luxury yacht excursion",
        "VIP access to Monaco attractions",
        "Personalized coaching (3:1 player-to-coach ratio)",
      ],
    },
  ];

  const upcomingDates = [
    {
      location: "French Riviera",
      dates: "June 15-22, 2025",
      price: "€8,500",
      availability: "4 spots left",
    },
    {
      location: "Monaco",
      dates: "July 10-17, 2025",
      price: "€9,750",
      availability: "6 spots left",
    },
    {
      location: "French Riviera",
      dates: "August 5-12, 2025",
      price: "€8,750",
      availability: "8 spots left",
    },
    {
      location: "Monaco",
      dates: "September 7-14, 2025",
      price: "€9,500",
      availability: "Fully Booked",
    },
    {
      location: "French Riviera",
      dates: "October 3-10, 2025",
      price: "€8,250",
      availability: "8 spots left",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=800"
        title="Tennis Retreats"
        subtitle="Discover our exclusive week-long tennis retreats on the French Riviera and in Monaco. Combining professional coaching, luxury accommodations, and unforgettable experiences."
      />

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Tennis Retreat Locations"
            subtitle="Choose between our signature locations, each offering a unique blend of tennis excellence and luxury experiences."
            centered
          />

          <div className="space-y-24 mt-12">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-auto object-cover"
                    />
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-right-5" : "-left-5"
                      } -bottom-5 bg-gold py-3 px-6`}
                    >
                      <h4 className="font-playfair text-lg text-white">
                        {location.name}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4">
                    {location.name} Experience
                  </h3>
                  <p className="text-gray-600 mb-8">{location.description}</p>
                  <div className="space-y-3 mb-8">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="text-gold mr-3">
                          <Star size={18} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-navy hover:bg-opacity-90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto">
          <SectionTitle
            title="What's Included"
            subtitle="Our all-inclusive tennis retreats provide everything you need for an exceptional week of tennis and luxury."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Tennis Program
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    4 hours of daily tennis instruction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Professional coaching (max 4:1 ratio)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Video analysis and personalized feedback
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Access to premium tennis facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Fitness and conditioning sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Exhibition matches with coaches
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Accommodations & Dining
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    7 nights luxury accommodation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Daily breakfast, lunch, and dinner
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Private chef (French Riviera) or fine dining (Monaco)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Premium beverages and snacks
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Daily housekeeping service
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Access to property amenities
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                Experiences & Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Airport transfers and local transportation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Two curated local excursions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Wine tasting or yacht experience
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    One spa treatment session
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Tennis equipment if needed
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <Star size={16} />
                  </div>
                  <span className="text-gray-600">
                    Personalized concierge service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="A Day at Tennis Luxe Club"
            subtitle="Experience a perfect balance of intensive tennis training, relaxation, and exclusive experiences."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-16 border-l-2 border-dashed border-gold"></div>

              <div className="space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">7:00 AM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Morning Fitness
                    </h4>
                    <p className="text-gray-600">
                      Start your day with an optional fitness session focused on
                      tennis-specific conditioning and stretching.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">8:00 AM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Gourmet Breakfast
                    </h4>
                    <p className="text-gray-600">
                      Enjoy a nutritious breakfast prepared by our chef with
                      options to fuel your active day.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">9:30 AM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Morning Tennis Session
                    </h4>
                    <p className="text-gray-600">
                      Focus on technical skills and stroke development with
                      personalized coaching and video analysis.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">12:30 PM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Lunch & Rest
                    </h4>
                    <p className="text-gray-600">
                      Refuel with a Mediterranean-inspired lunch followed by
                      relaxation time by the pool or beach.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">3:30 PM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Afternoon Tennis Session
                    </h4>
                    <p className="text-gray-600">
                      Focus on match play, strategy, and tactical aspects of the
                      game with supervised matches and drills.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">6:30 PM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Evening Activities
                    </h4>
                    <p className="text-gray-600">
                      Enjoy curated experiences such as wine tastings, yacht
                      excursions, or local cultural visits.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="font-semibold text-navy">8:00 PM</span>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-2 mt-1 w-5 h-5 rounded-full bg-gold"></div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">
                      Gourmet Dinner
                    </h4>
                    <p className="text-gray-600">
                      Complete your day with a gourmet dinner featuring local
                      specialties and fine wines in an elegant setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto">
          <SectionTitle
            title="Upcoming Retreat Dates"
            subtitle="Secure your spot at one of our exclusive tennis retreats. Limited to 8-10 participants per retreat."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead>
                  <tr className="border-b-2 border-navy">
                    <th className="py-4 px-6 text-left font-playfair text-navy">
                      Location
                    </th>
                    <th className="py-4 px-6 text-left font-playfair text-navy">
                      Dates
                    </th>
                    <th className="py-4 px-6 text-left font-playfair text-navy">
                      Price
                    </th>
                    <th className="py-4 px-6 text-left font-playfair text-navy">
                      Availability
                    </th>
                    <th className="py-4 px-6 text-left font-playfair text-navy"></th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingDates.map((date, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index === upcomingDates.length - 1 ? "" : "border-gray-200"
                      }`}
                    >
                      <td className="py-4 px-6 flex items-center">
                        <MapPin size={16} className="text-gold mr-2" />
                        {date.location}
                      </td>
                      <td className="py-4 px-6 flex items-center">
                        <CalendarDays size={16} className="text-gold mr-2" />
                        {date.dates}
                      </td>
                      <td className="py-4 px-6">{date.price}</td>
                      <td className="py-4 px-6 flex items-center">
                        <Clock size={16} className="text-gold mr-2" />
                        <span
                          className={
                            date.availability === "Fully Booked"
                              ? "text-red-500"
                              : "text-green-600"
                          }
                        >
                          {date.availability}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <Button
                          className={`${
                            date.availability === "Fully Booked"
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-gold hover:bg-opacity-90"
                          } text-white`}
                          disabled={date.availability === "Fully Booked"}
                        >
                          Book Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Can't find a suitable date? Contact us for private group bookings
              or custom retreat options.
            </p>
            <NavLink to="/contact">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Contact Us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retreats;
