
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll be in touch soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  const faqItems = [
    {
      question: "What skill level is required for your retreats?",
      answer:
        "Our retreats are designed for intermediate to advanced players (NTRP 3.0-5.0). However, we can accommodate enthusiastic beginners with some tennis experience. Our coaches will adapt the program to your skill level.",
    },
    {
      question: "How many participants are in each retreat?",
      answer:
        "We limit our retreats to 8-10 participants to ensure personalized attention from our coaches and an intimate, exclusive experience for all guests.",
    },
    {
      question: "What is included in the retreat price?",
      answer:
        "Our all-inclusive pricing covers 7 nights accommodation, all meals and beverages, daily tennis instruction, use of facilities, local excursions, one spa treatment, airport transfers, and more. Only personal purchases and optional activities are extra.",
    },
    {
      question: "Do I need to bring my own tennis equipment?",
      answer:
        "While many guests prefer to bring their own racquets, we have high-quality equipment available for use. Tennis shoes appropriate for clay courts are recommended. We provide tennis balls and other training aids.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Deposits are fully refundable up to 90 days before the retreat. Cancellations 60-90 days prior receive a 50% refund. Cancellations within 60 days are non-refundable, but you may transfer your booking to another person or to a future retreat date.",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1200&h=800"
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about our exclusive tennis retreats or to book your next luxury tennis experience."
      />

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="Have questions about our tennis retreats? Our team is here to help you plan your perfect tennis getaway."
              />

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gold outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gold outline-none"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gold outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gold outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Information">
                        Booking Information
                      </option>
                      <option value="Private Group Retreat">
                        Private Group Retreat
                      </option>
                      <option value="Partnership Opportunity">
                        Partnership Opportunity
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="bg-gold hover:bg-opacity-90 text-white px-8 py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-beige p-8 h-full">
                <h3 className="font-playfair text-2xl font-semibold text-navy mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-gold bg-opacity-10 p-3 mr-4 text-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy mb-1">Address</h4>
                      <address className="text-gray-600 not-italic">
                        1 Avenue Princesse Grace
                        <br />
                        98000 Monaco
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold bg-opacity-10 p-3 mr-4 text-gold">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy mb-1">Phone</h4>
                      <p className="text-gray-600">+377 99 99 99 99</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold bg-opacity-10 p-3 mr-4 text-gold">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy mb-1">Email</h4>
                      <p className="text-gray-600">info@tennisluxeclub.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold bg-opacity-10 p-3 mr-4 text-gold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy mb-1">
                        Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday to Friday: 9am - 6pm CET
                        <br />
                        Saturday: 10am - 2pm CET
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair text-xl font-semibold text-navy mb-4">
                    Response Time
                  </h4>
                  <p className="text-gray-600 mb-2">
                    We strive to respond to all inquiries within 24 hours during
                    business days.
                  </p>
                  <p className="text-gray-600">
                    For urgent matters, please contact us by phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our tennis retreats, accommodations, and services."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 shadow-sm">
                  <h3 className="font-playfair text-lg font-semibold text-navy mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Contact our team for
                personalized assistance.
              </p>
              <Button className="bg-gold hover:bg-opacity-90 text-white">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-navy">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Tennis Experience?
          </h2>
          <p className="text-white opacity-80 max-w-2xl mx-auto mb-10">
            Join us for a week of professional coaching, luxury accommodations,
            and unforgettable experiences on the French Riviera or Monaco.
          </p>
          <Button className="bg-gold hover:bg-opacity-90 text-white px-8 py-6" size="lg">
            Book Your Retreat
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
