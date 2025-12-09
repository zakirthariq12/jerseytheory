import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Tag, Check } from "lucide-react";
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
const VERSIONS = ["Fan Version", "Player Version"];
const VALID_COUPONS: Record<string, number> = {
  "JT10": 10, // 10% off
};

const JerseyCard = ({ id, name, image, price, originalPrice }: JerseyCardProps) => {
  const { addToCart } = useCart();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedVersion, setSelectedVersion] = useState<string>("");
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string>("");

  const handleAddToCart = () => {
    setIsDialogOpen(true);
  };

  const getBasePrice = () => {
    return selectedVersion === "Player Version" ? price + 300 : price;
  };

  const getDiscountedPrice = () => {
    const basePrice = getBasePrice();
    if (appliedCoupon && VALID_COUPONS[appliedCoupon]) {
      const discount = VALID_COUPONS[appliedCoupon];
      return Math.round(basePrice * (1 - discount / 100));
    }
    return basePrice;
  };

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase().trim();
    if (VALID_COUPONS[code]) {
      setAppliedCoupon(code);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const confirmAddToCart = () => {
    if (!selectedSize || !selectedVersion) return;
    addToCart({ id, name, image, price: getDiscountedPrice(), size: `${selectedSize} - ${selectedVersion}` });
    setIsDialogOpen(false);
    setSelectedSize("");
    setSelectedVersion("");
    setCouponCode("");
    setAppliedCoupon(null);
    setCouponError("");
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
                <div className="flex items-center gap-2">
                  <p className="text-primary font-bold">
                    Rs. {getDiscountedPrice().toLocaleString()}
                  </p>
                  {appliedCoupon && (
                    <span className="text-xs line-through text-muted-foreground">
                      Rs. {getBasePrice().toLocaleString()}
                    </span>
                  )}
                  {selectedVersion === "Player Version" && !appliedCoupon && (
                    <span className="text-xs text-muted-foreground">(+300)</span>
                  )}
                </div>
                {appliedCoupon && (
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {VALID_COUPONS[appliedCoupon]}% off applied!
                  </p>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Version</p>
              <div className="grid grid-cols-2 gap-2">
                {VERSIONS.map((version) => (
                  <button
                    key={version}
                    onClick={() => setSelectedVersion(version)}
                    className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                      selectedVersion === version
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {version}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Size</p>
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
            </div>
            {/* Coupon Code Section */}
            <div className="border border-dashed border-primary/50 rounded-lg p-3 bg-primary/5">
              <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                <Tag className="w-3 h-3" />
                Have a coupon code?
              </p>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-md px-3 py-2">
                  <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    {appliedCoupon} applied
                  </span>
                  <button 
                    onClick={handleRemoveCoupon}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code (e.g., JT10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="h-9 text-sm uppercase"
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleApplyCoupon}
                    className="h-9 px-4"
                  >
                    Apply
                  </Button>
                </div>
              )}
              {couponError && (
                <p className="text-xs text-red-500 mt-1">{couponError}</p>
              )}
            </div>

            <Button 
              onClick={confirmAddToCart} 
              className="w-full gap-2" 
              disabled={!selectedSize || !selectedVersion}
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
