
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RetreatCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  price: string;
  description: string;
  className?: string;
}

const RetreatCard = ({
  image,
  title,
  location,
  date,
  price,
  description,
  className,
}: RetreatCardProps) => {
  return (
    <div className={cn("bg-white shadow-sm overflow-hidden", className)}>
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-navy">
              {title}
            </h3>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
          <div className="text-right">
            <p className="text-gold font-semibold">{price}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Button className="bg-navy hover:bg-opacity-90 text-white w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default RetreatCard;
