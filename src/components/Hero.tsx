import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
            Premium Football Jerseys
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            <span className="text-gradient-orange">JERSEY</span>
            <br />
            <span className="text-foreground">THEORY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Your ultimate destination for authentic retro football jerseys. 
            Relive the glory days with legendary kits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 font-semibold glow-orange">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
