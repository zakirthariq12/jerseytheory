import JerseyCard from "./JerseyCard";

// Import jersey images
import barcelonaAway from "@/assets/jerseys/barcelona-away.jpg";
import barcelonaBlack from "@/assets/jerseys/barcelona-black.jpg";
import barcelonaPink from "@/assets/jerseys/barcelona-pink.webp";
import realMadridDragon from "@/assets/jerseys/real-madrid-dragon.webp";
import santosHome from "@/assets/jerseys/santos-home.jpg";
import manUnitedRetro from "@/assets/jerseys/man-united-retro.jpg";
import barcelonaPinkSpecial from "@/assets/jerseys/barcelona-pink-special.jpg";
import brazilJesus from "@/assets/jerseys/brazil-jesus.jpg";

const jerseys = [
  { name: "Barcelona 24/25 Away Kit", image: barcelonaAway, price: 3600, originalPrice: 7200 },
  { name: "Barcelona 25/26 Black Special Kit", image: barcelonaBlack, price: 3600, originalPrice: 7200 },
  { name: "Barcelona 25/26 Bright Pink Special Kit", image: barcelonaPink, price: 3600, originalPrice: 7200 },
  { name: "Real Madrid 25/26 Pink Dragon Special Kit", image: realMadridDragon, price: 3600, originalPrice: 7200 },
  { name: "Santos 12/13 Home Kit", image: santosHome, price: 3600, originalPrice: 7200 },
  { name: "Man United 07/08 L/S UCL Home Kit", image: manUnitedRetro, price: 3600, originalPrice: 7200 },
  { name: "Barcelona 25/26 Pink Special Kit", image: barcelonaPinkSpecial, price: 3600, originalPrice: 7200 },
  { name: "Brazil 24/25 Jesus Special Kit", image: brazilJesus, price: 3600, originalPrice: 7200 },
];

const ProductGrid = () => {
  return (
    <section id="collections" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Collection</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">ALL-TIME BEST SELLERS</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Shop the most popular jerseys loved by fans worldwide. Premium quality at unbeatable prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {jerseys.map((jersey, index) => (
            <JerseyCard
              key={index}
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
