
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
