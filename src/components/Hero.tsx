import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 animate-pulse-glow">
            Premium Football Jerseys
          </span>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
            <span className="text-gradient-orange">JERSEY</span>
            <br />
            <span className="text-foreground">THEORY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Your ultimate destination for authentic football jerseys. 
            Shop the latest kits from top clubs worldwide at unbeatable prices.
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
