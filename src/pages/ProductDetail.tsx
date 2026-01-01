import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, Minus, Plus, Tag, Check, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { getJerseyById } from "@/data/jerseys";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SIZES = ["S", "M", "L", "XL", "XXL"];
const VERSIONS = ["Fan Version", "Player Version"];
const VALID_COUPONS: Record<string, number> = {
  "JT10": 10,
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const jersey = getJerseyById(id || "");

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedVersion, setSelectedVersion] = useState<string>("Fan Version");
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");

  if (!jersey) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Jersey Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Go back to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getBasePrice = () => {
    return selectedVersion === "Player Version" ? jersey.price + 300 : jersey.price;
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

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: jersey.id,
        name: jersey.name,
        image: jersey.image,
        price: getDiscountedPrice(),
        size: `${selectedSize} - ${selectedVersion}`,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link to="/#collections" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-card border border-border">
              <img
                src={jersey.image}
                alt={jersey.name}
                className="w-full h-full object-cover"
              />
              {jersey.originalPrice && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded">
                  SALE
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {jersey.category === "clubs" ? "Club Kit" : jersey.category === "national" ? "National Team" : "Retro Classic"}
                </span>
                <h1 className="text-3xl md:text-4xl font-display mt-2">{jersey.name}</h1>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  Rs. {getDiscountedPrice().toLocaleString()}
                </span>
                {(jersey.originalPrice || appliedCoupon) && (
                  <span className="text-lg text-muted-foreground line-through">
                    Rs. {(appliedCoupon ? getBasePrice() : jersey.originalPrice)?.toLocaleString()}
                  </span>
                )}
                {appliedCoupon && (
                  <span className="text-sm text-green-500 font-medium flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    {VALID_COUPONS[appliedCoupon]}% off!
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground">
                {jersey.description || "Premium quality jersey with authentic details and breathable fabric. Perfect for match days or casual wear."}
              </p>

              {/* Version Selection */}
              <div>
                <p className="text-sm font-medium mb-3">Version</p>
                <div className="flex gap-3">
                  {VERSIONS.map((version) => (
                    <button
                      key={version}
                      onClick={() => setSelectedVersion(version)}
                      className={`py-3 px-6 border rounded-lg font-medium transition-all ${
                        selectedVersion === version
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {version}
                      {version === "Player Version" && (
                        <span className="ml-1 text-xs opacity-75">(+300)</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-3">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-sm text-muted-foreground mt-2">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium mb-3">Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="border border-dashed border-primary/50 rounded-lg p-4 bg-primary/5">
                <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Have a coupon code?
                </p>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-md px-4 py-3">
                    <span className="font-medium text-green-500 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      {appliedCoupon} applied - {VALID_COUPONS[appliedCoupon]}% off
                    </span>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-sm text-muted-foreground hover:text-foreground"
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
                      className="uppercase"
                    />
                    <Button variant="outline" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </div>
                )}
                {couponError && (
                  <p className="text-sm text-red-500 mt-2">{couponError}</p>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button
                size="lg"
                className="w-full gap-2 text-lg py-6"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart - Rs. {(getDiscountedPrice() * quantity).toLocaleString()}
              </Button>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Island-wide Delivery</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Premium Quality</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
