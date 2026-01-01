import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JerseyCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

const JerseyCard = ({ id, name, image, price, originalPrice }: JerseyCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="card-hover bg-card rounded-lg overflow-hidden border border-border">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Quick View Button */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              View Details
            </Button>
          </div>

          {/* Sale Badge */}
          {originalPrice && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              Rs. {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rs. {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JerseyCard;
