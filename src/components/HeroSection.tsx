
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  children,
  className,
  overlay = true,
}: HeroSectionProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center min-h-screen bg-center bg-cover bg-no-repeat",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
      )}
      <div className="container mx-auto px-4 relative z-10 mt-20">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
