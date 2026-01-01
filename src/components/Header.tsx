import { ShoppingCart, Menu, Search, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";
import { useTheme } from "@/contexts/ThemeContext";
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
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/#collections");
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
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/#collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Track Order</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</a>
          </nav>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Jersey Theory" className="h-10 w-auto" />
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button 
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="p-2 hover:bg-secondary rounded-md transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/#collections" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Collections</Link>
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
