
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
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
  );
};

export default TestimonialsSection;
