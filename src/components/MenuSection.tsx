import MenuCard from "./MenuCard";
import chickenShawarma from "@/assets/chicken-shawarma.jpg";
import beefShawarma from "@/assets/beef-shawarma.jpg";
import lambShawarma from "@/assets/lamb-shawarma.jpg";
import falafelShawarma from "@/assets/falafel-shawarma.jpg";
import fries from "@/assets/fries.jpg";
import salad from "@/assets/salad.jpg";
import hummus from "@/assets/hummus.jpg";
import tabbouleh from "@/assets/tabbouleh.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import coke from "@/assets/coke.jpg";
import fanta from "@/assets/fanta.jpg";
import sprite from "@/assets/sprite.jpg";
import powerade from "@/assets/powerade.jpg";
import milkshake from "@/assets/milkshake.jpg";
import lemonade from "@/assets/lemonade.jpg";
import dragonFruitLemonade from "@/assets/dragon-fruit-lemonade.jpg";
import water from "@/assets/water.jpg";

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
      title: "Lamb Shawarma",
      description: "Premium tender lamb with Mediterranean herbs and traditional spices",
      price: "$17.99",
      image: lambShawarma,
      category: "Shawarma"
    },
    {
      title: "Falafel Shawarma",
      description: "Crispy vegetarian falafel with fresh vegetables and tahini sauce",
      price: "$11.99",
      image: falafelShawarma,
      category: "Shawarma"
    },
    {
      title: "Mixed Shawarma",
      description: "Perfect combination of chicken and beef with all the classic toppings",
      price: "$16.99",
      image: chickenShawarma,
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
    },
    {
      title: "Creamy Hummus",
      description: "Traditional hummus with olive oil, served with warm pita bread",
      price: "$6.99",
      image: hummus,
      category: "Sides"
    },
    {
      title: "Fresh Tabbouleh",
      description: "Authentic Lebanese parsley salad with tomatoes, bulgur, and lemon",
      price: "$8.99",
      image: tabbouleh,
      category: "Sides"
    },
    {
      title: "Crispy Onion Rings",
      description: "Golden fried onion rings with a perfect crunch and seasoning",
      price: "$5.99",
      image: onionRings,
      category: "Sides"
    }
  ],
  drinks: [
    {
      title: "Coca-Cola",
      description: "Classic refreshing Coke, perfectly chilled",
      price: "$2.99",
      image: coke,
      category: "Drinks"
    },
    {
      title: "Fanta Orange",
      description: "Vibrant orange soda with a burst of citrus flavor",
      price: "$2.99",
      image: fanta,
      category: "Drinks"
    },
    {
      title: "Sprite",
      description: "Crisp lemon-lime soda, light and refreshing",
      price: "$2.99",
      image: sprite,
      category: "Drinks"
    },
    {
      title: "Powerade",
      description: "Energizing sports drink to fuel your day",
      price: "$3.49",
      image: powerade,
      category: "Drinks"
    },
    {
      title: "Vanilla Milkshake",
      description: "Creamy vanilla milkshake topped with whipped cream",
      price: "$4.99",
      image: milkshake,
      category: "Drinks"
    },
    {
      title: "Fresh Lemonade",
      description: "Refreshing homemade lemonade with mint and lemon slices",
      price: "$3.99",
      image: lemonade,
      category: "Drinks"
    },
    {
      title: "Dragon Fruit Lemonade",
      description: "Exotic dragon fruit lemonade with a tropical twist",
      price: "$4.49",
      image: dragonFruitLemonade,
      category: "Drinks"
    },
    {
      title: "Bottled Water",
      description: "Pure refreshing water, perfectly chilled",
      price: "$1.99",
      image: water,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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