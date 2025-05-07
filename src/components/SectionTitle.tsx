
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
