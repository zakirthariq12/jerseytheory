import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const message = items
      .map((item) => `${item.name} (Size: ${item.size}) x${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}`)
      .join("\n");
    
    const total = `\n\nTotal: Rs. ${totalPrice.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(`Hi! I'd like to order:\n\n${message}${total}`);
    
    window.open(`https://wa.me/94766559585?text=${encodedMessage}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-3 bg-secondary/50 p-3 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    <p className="text-primary font-bold mt-1">
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">Rs. {totalPrice.toLocaleString()}</span>
              </div>
              <Button onClick={handleCheckout} className="w-full gap-2" size="lg">
                <ShoppingBag className="w-4 h-4" />
                Buy via WhatsApp
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full">
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
