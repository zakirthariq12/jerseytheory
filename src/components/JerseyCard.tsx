import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface JerseyCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

const JerseyCard = ({ id, name, image, price, originalPrice }: JerseyCardProps) => {
  const { addToCart } = useCart();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleAddToCart = () => {
    setIsDialogOpen(true);
  };

  const confirmAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ id, name, image, price, size: selectedSize });
    setIsDialogOpen(false);
    setSelectedSize("");
  };

  return (
    <>
      <div className="group card-hover bg-card rounded-lg overflow-hidden border border-border">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Quick Add Button */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
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

      {/* Size Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Size</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="font-medium text-sm">{name}</p>
                <p className="text-primary font-bold">Rs. {price.toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Button 
              onClick={confirmAddToCart} 
              className="w-full gap-2" 
              disabled={!selectedSize}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JerseyCard;
