import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shawarma.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Delicious shawarma" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Authentic
            </span>
            <br />
            <span className="text-foreground">
              Shawarma Experience
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Savor the rich flavors of the Mediterranean with our freshly prepared shawarmas, 
            made with premium ingredients and traditional spices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Order Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;