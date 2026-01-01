import { useState } from "react";
import JerseyCard from "./JerseyCard";
import { jerseys, categories, Category } from "@/data/jerseys";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredJerseys = activeCategory === "all" 
    ? jerseys 
    : jerseys.filter(jersey => jersey.category === activeCategory);

  return (
    <section id="collections" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Collection</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">ALL-TIME BEST SELLERS</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Shop the most popular jerseys loved by fans worldwide. Premium quality at unbeatable prices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
                flex items-center gap-2
                ${activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105" 
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                }
              `}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`
                text-xs px-2 py-0.5 rounded-full
                ${activeCategory === category.id 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
                }
              `}>
                {category.id === "all" 
                  ? jerseys.length 
                  : jerseys.filter(j => j.category === category.id).length
                }
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredJerseys.map((jersey) => (
            <JerseyCard
              key={jersey.id}
              id={jersey.id}
              name={jersey.name}
              image={jersey.image}
              price={jersey.price}
              originalPrice={jersey.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
