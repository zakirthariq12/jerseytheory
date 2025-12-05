import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsOpen } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const collectionsSection = document.getElementById("collections");
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2">
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            🔥 BUY 3 GET 1 FREE 🔥
          </span>
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            📦 ISLAND-WIDE DELIVERY IN SRI LANKA 📦
          </span>
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            📞 CALL US: 0729942922
          </span>
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            🔥 BUY 3 GET 1 FREE 🔥
          </span>
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            📦 ISLAND-WIDE DELIVERY IN SRI LANKA 📦
          </span>
          <span className="mx-8 text-sm font-semibold text-primary-foreground">
            📞 CALL US: 0729942922
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Track Order</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</a>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Jersey Theory" className="h-10 w-auto" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:bg-secondary rounded-md transition-colors relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Track Order</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</a>
          </nav>
        </div>
      )}

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Jerseys</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Search for jerseys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <button type="submit" className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
