import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const MenuCard = ({ title, description, price, image, category }: MenuCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          size="sm"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;