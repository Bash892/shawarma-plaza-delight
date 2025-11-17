import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Shawarma Plaza</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                Menu
              </Link>
              <Link to="/about" className="text-orange-500 font-semibold">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Shawarma Plaza</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing authentic Mediterranean flavors to your neighborhood since 2020
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Shawarma Plaza was born from a passion for authentic Mediterranean cuisine and a 
              desire to share the rich flavors of traditional shawarma with our community.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, inspired by family recipes passed down through generations, opened 
              the first Shawarma Plaza with a simple mission: to serve fresh, flavorful, and 
              affordable Mediterranean food that brings people together.
            </p>
            <p className="text-gray-700">
              Today, we're proud to be a local favorite, known for our commitment to quality 
              ingredients, traditional preparation methods, and exceptional customer service.
            </p>
          </div>
          <div className="bg-orange-100 rounded-lg p-8">
            <div className="aspect-square bg-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🥙</span>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and premium meats, prepared daily with 
                authentic spices and traditional methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We're more than just a restaurant - we're a gathering place where friends 
                and families come together over delicious food.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Experience</h3>
              <p className="text-gray-600">
                Every dish is crafted to transport you to the Mediterranean, with flavors 
                that honor centuries of culinary tradition.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-500 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-xl mb-8">
            Experience the authentic taste of Mediterranean cuisine
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;