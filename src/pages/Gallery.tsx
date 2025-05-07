
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "tennis", name: "Tennis Facilities" },
    { id: "accommodations", name: "Accommodations" },
    { id: "dining", name: "Dining" },
    { id: "experiences", name: "Experiences" },
    { id: "tournaments", name: "Tournaments" },
    { id: "players", name: "Players" },
    { id: "riviera", name: "French Riviera" },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      alt: "Tennis court with sea view",
      category: "tennis",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Luxury villa exterior",
      category: "accommodations",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      alt: "Gourmet dining experience",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800",
      alt: "Yacht experience",
      category: "experiences",
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800",
      alt: "Tennis coaching session",
      category: "tennis",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Luxury bedroom",
      category: "accommodations",
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      alt: "Fine dining setup",
      category: "dining",
    },
    // New uploaded images
    {
      src: "/lovable-uploads/b7abd28a-f7a6-47ac-94e9-d84f46791e4d.png",
      alt: "Tennis Point tropical setting with palm trees",
      category: "tennis",
    },
    {
      src: "/lovable-uploads/1fa6978d-1431-48e3-b039-9301c05b9c20.png",
      alt: "Group of four female tennis players on clay court",
      category: "players",
    },
    {
      src: "/lovable-uploads/f829afc2-86e3-4be6-a081-e7eb7102360d.png",
      alt: "Tennis selfie at courtside",
      category: "players",
    },
    {
      src: "/lovable-uploads/2a45e19b-134a-48bf-a593-e4253570e3c4.png",
      alt: "Tennis tournament group with pine forest background",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/e8d021c8-16d8-4015-a7bc-80c5d994e266.png",
      alt: "Female tennis player kissing trophy",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/99178e2e-e790-463b-8718-57a1fcfe9842.png",
      alt: "Victory celebration with championship trophy",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/cf4c063f-6b31-4304-8e73-01f6bbeb7ea8.png",
      alt: "Group of players at World Tennis Masters Tour",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/be5c635f-3142-497d-822e-36bdbd2cba26.png",
      alt: "Tennis medals and awards on racquet",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/83d6eb96-2177-4765-8fd8-22aeb57e1c8b.png",
      alt: "Champion with trophy at tennis tournament",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/3f312285-01c9-4132-98f5-bce809d6732e.png",
      alt: "Female tennis player with multiple trophies",
      category: "players",
    },
    {
      src: "/lovable-uploads/9c2d3b91-fa97-41db-804d-b6a09435ca8a.png",
      alt: "Meeting Björn Borg at tennis event",
      category: "experiences",
    },
    {
      src: "/lovable-uploads/0dee4bb4-249e-4f2a-91c7-763c2d52e6df.png",
      alt: "Tennis at Circolo Tennis Sanremo",
      category: "tennis",
    },
    {
      src: "/lovable-uploads/127c376f-5bee-4aa2-9215-4b8d2e307166.png",
      alt: "French Riviera view with wine",
      category: "riviera",
    },
    {
      src: "/lovable-uploads/9914b35d-2469-45bb-8301-bc506af19fc2.png",
      alt: "Rafael Nadal Academy tennis training",
      category: "experiences",
    },
    {
      src: "/lovable-uploads/b9593440-3a9f-4e6e-b1be-3878a5d923ca.png",
      alt: "Elegant cafe in the French Riviera",
      category: "dining",
    },
    {
      src: "/lovable-uploads/62d7b347-76f5-4426-a22e-8a551ad7454f.png",
      alt: "Post-tournament dinner celebration",
      category: "dining",
    },
    {
      src: "/lovable-uploads/f9d57114-39ad-4a0e-916d-127ab28948e9.png",
      alt: "Tennis community gathering",
      category: "experiences",
    },
    {
      src: "/lovable-uploads/0bc783dd-4813-4b8e-8a84-33e946f0f29f.png",
      alt: "Turkish tennis tournament team",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/42a17eb4-e7ed-47f8-a741-b905b458a59b.png",
      alt: "Tennis awards ceremony",
      category: "tournaments",
    },
    {
      src: "/lovable-uploads/5da1277b-72b9-472d-9785-9d42b94707ea.png",
      alt: "Mixed doubles champions with trophy",
      category: "tournaments",
    }
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&h=800"
        title="Our Gallery"
        subtitle="Explore images from our exclusive tennis retreats on the French Riviera and Monaco. From world-class tennis facilities to luxury accommodations and unique experiences."
      />

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Experience Tennis Luxe Club"
            subtitle="Browse our gallery to get a glimpse of the luxury tennis experience that awaits you."
            centered
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gold text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden group relative cursor-pointer h-64 rounded-lg shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-playfair">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Featured Tournaments
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our members participate in exclusive tournaments across Europe, from the French Riviera to international ITF Masters Tours. Explore some of our recent tournament highlights.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages
                  .filter(img => img.category === "tournaments")
                  .map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="overflow-hidden rounded-lg h-64 relative">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-navy bg-opacity-70 p-3">
                            <p className="text-white text-sm">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Experience the Tennis Luxe Difference
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our exclusive tennis retreats offer a perfect blend of professional coaching, luxury accommodations, and unforgettable experiences. Join us for a week of tennis excellence in stunning Mediterranean locations.
          </p>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto overflow-hidden">
            {/* This would typically be a video embed */}
            <div className="bg-navy flex items-center justify-center h-full rounded-lg">
              <div className="text-white text-center">
                <p className="text-xl font-playfair mb-4">Tennis Luxe Club Experience</p>
                <p className="text-sm opacity-80">[Video Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
