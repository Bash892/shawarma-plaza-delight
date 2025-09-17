import MenuCard from "./MenuCard";
import chickenShawarma from "@/assets/chicken-shawarma.jpg";
import beefShawarma from "@/assets/beef-shawarma.jpg";
import fries from "@/assets/fries.jpg";
import salad from "@/assets/salad.jpg";

const menuData = {
  shawarmas: [
    {
      title: "Chicken Shawarma",
      description: "Tender grilled chicken with fresh vegetables, pickles, and our signature garlic sauce",
      price: "$12.99",
      image: chickenShawarma,
      category: "Shawarma"
    },
    {
      title: "Beef Shawarma", 
      description: "Succulent beef with onions, tomatoes, and authentic tahini sauce",
      price: "$14.99",
      image: beefShawarma,
      category: "Shawarma"
    },
    {
      title: "Mixed Shawarma",
      description: "Perfect combination of chicken and beef with all the classic toppings",
      price: "$16.99",
      image: chickenShawarma, // Using chicken image as placeholder
      category: "Shawarma"
    }
  ],
  sides: [
    {
      title: "Golden Fries",
      description: "Crispy golden fries seasoned with Mediterranean spices",
      price: "$4.99",
      image: fries,
      category: "Sides"
    },
    {
      title: "Mediterranean Salad",
      description: "Fresh cucumbers, tomatoes, olives, and feta with olive oil dressing",
      price: "$7.99",
      image: salad,
      category: "Sides"
    }
  ],
  drinks: [
    {
      title: "Fresh Lemonade",
      description: "Refreshing homemade lemonade with a hint of mint",
      price: "$3.99",
      image: fries, // Placeholder - would need drink image
      category: "Drinks"
    },
    {
      title: "Iced Tea",
      description: "Cool and refreshing iced tea, perfect with any meal",
      price: "$2.99",
      image: salad, // Placeholder - would need drink image
      category: "Drinks"
    }
  ]
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Menu
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our authentic shawarmas, fresh sides, and refreshing drinks
          </p>
        </div>

        {/* Shawarmas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Shawarmas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.shawarmas.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Sides */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Sides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuData.sides.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Drinks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuData.drinks.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;