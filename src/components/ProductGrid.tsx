import JerseyCard from "./JerseyCard";

// Import jersey images - Original collection
import barcelonaAway from "@/assets/jerseys/barcelona-away.jpg";
import barcelonaBlack from "@/assets/jerseys/barcelona-black.jpg";
import barcelonaPink from "@/assets/jerseys/barcelona-pink.webp";
import realMadridDragon from "@/assets/jerseys/real-madrid-dragon.webp";
import santosHome from "@/assets/jerseys/santos-home.jpg";
import manUnitedRetro from "@/assets/jerseys/man-united-retro.jpg";
import barcelonaPinkSpecial from "@/assets/jerseys/barcelona-pink-special.jpg";
import brazilJesus from "@/assets/jerseys/brazil-jesus.jpg";

// Import jersey images - Retro collection
import barcelona1415Home from "@/assets/jerseys/barcelona-1415-home.jpg";
import acMilan0607Away from "@/assets/jerseys/ac-milan-0607-away.jpg";
import brazil0203Home from "@/assets/jerseys/brazil-0203-home.jpg";
import realMadrid1617Away from "@/assets/jerseys/real-madrid-1617-away.jpg";
import barcelona0809Home from "@/assets/jerseys/barcelona-0809-home.jpg";
import manUnited0203Home from "@/assets/jerseys/man-united-0203-home.jpg";
import netherlands9899Home from "@/assets/jerseys/netherlands-9899-home.webp";
import manUnited0708HomeSS from "@/assets/jerseys/man-united-0708-home-ss.jpg";
import realMadrid1314HomeLS from "@/assets/jerseys/real-madrid-1314-home-ls.jpg";
import realMadrid2122Home from "@/assets/jerseys/real-madrid-2122-home.jpg";
import france1819Home from "@/assets/jerseys/france-1819-home.webp";
import acMilan0910HomeLS from "@/assets/jerseys/ac-milan-0910-home-ls.webp";
import barcelona1011Home from "@/assets/jerseys/barcelona-1011-home.webp";

const jerseys = [
  // Original collection
  { id: "barcelona-away", name: "Barcelona 24/25 Away Kit", image: barcelonaAway, price: 3600, originalPrice: 7200 },
  { id: "barcelona-black", name: "Barcelona 25/26 Black Special Kit", image: barcelonaBlack, price: 3600, originalPrice: 7200 },
  { id: "barcelona-pink", name: "Barcelona 25/26 Bright Pink Special Kit", image: barcelonaPink, price: 3600, originalPrice: 7200 },
  { id: "real-madrid-dragon", name: "Real Madrid 25/26 Pink Dragon Special Kit", image: realMadridDragon, price: 3600, originalPrice: 7200 },
  { id: "santos-home", name: "Santos 12/13 Home Kit", image: santosHome, price: 3600, originalPrice: 7200 },
  { id: "man-united-retro", name: "Man United 07/08 L/S UCL Home Kit", image: manUnitedRetro, price: 3600, originalPrice: 7200 },
  { id: "barcelona-pink-special", name: "Barcelona 25/26 Pink Special Kit", image: barcelonaPinkSpecial, price: 3600, originalPrice: 7200 },
  { id: "brazil-jesus", name: "Brazil 24/25 Jesus Special Kit", image: brazilJesus, price: 3600, originalPrice: 7200 },
  
  // Retro collection
  { id: "barcelona-1415-home", name: "Barcelona 14/15 Home UCL Kit", image: barcelona1415Home, price: 4300, originalPrice: 8600 },
  { id: "ac-milan-0607-away", name: "AC Milan 06/07 UCL Away Kit", image: acMilan0607Away, price: 4300, originalPrice: 8600 },
  { id: "brazil-0203-home", name: "Brazil 02/03 Home Kit", image: brazil0203Home, price: 4300, originalPrice: 8600 },
  { id: "real-madrid-1617-away", name: "Real Madrid 16/17 UCL Away Kit", image: realMadrid1617Away, price: 4300, originalPrice: 8600 },
  { id: "barcelona-0809-home", name: "Barcelona 08/09 UCL Home Kit", image: barcelona0809Home, price: 4300, originalPrice: 8600 },
  { id: "man-united-0203-home", name: "Man United 02/03 Home Kit", image: manUnited0203Home, price: 4300, originalPrice: 8600 },
  { id: "netherlands-9899-home", name: "Netherlands 98/99 Home Kit", image: netherlands9899Home, price: 4300, originalPrice: 8600 },
  { id: "man-united-0708-home-ss", name: "Man United 07/08 UCL Home Kit", image: manUnited0708HomeSS, price: 4300, originalPrice: 8600 },
  { id: "real-madrid-1314-home-ls", name: "Real Madrid 13/14 Home L/S UCL Kit", image: realMadrid1314HomeLS, price: 4300, originalPrice: 8600 },
  { id: "real-madrid-2122-home", name: "Real Madrid 21/22 Home Kit", image: realMadrid2122Home, price: 4300, originalPrice: 8600 },
  { id: "france-1819-home", name: "France 18/19 Home Kit", image: france1819Home, price: 4300, originalPrice: 8600 },
  { id: "ac-milan-0910-home-ls", name: "AC Milan 09/10 L/S Home Kit", image: acMilan0910HomeLS, price: 4300, originalPrice: 8600 },
  { id: "barcelona-1011-home", name: "Barcelona 10/11 Home Kit", image: barcelona1011Home, price: 4300, originalPrice: 8600 },
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
          {jerseys.map((jersey) => (
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
