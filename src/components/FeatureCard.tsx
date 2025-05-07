
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {icon && <div className="text-gold mb-4">{icon}</div>}
      <h3 className="font-playfair text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
