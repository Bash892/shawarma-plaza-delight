const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SP</span>
              </div>
              <h3 className="text-2xl font-bold">Shawarma Plaza</h3>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Bringing you the authentic taste of Mediterranean cuisine with fresh ingredients 
              and traditional recipes passed down through generations.
            </p>
            <div className="flex space-x-4">
              <span className="text-background/60">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-background/80 hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-background/80">
              <p>📍 123 Mediterranean Ave<br />Food Plaza, FP 12345</p>
              <p>📞 (555) 123-WRAP</p>
              <p>✉️ info@shawarma-plaza.com</p>
              <p>🕒 Mon-Sun: 11AM - 10PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Shawarma Plaza. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;