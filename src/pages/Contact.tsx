import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-orange-500 font-semibold">
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
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to place a large order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Mediterranean Avenue</p>
                    <p className="text-gray-600">Grambling, LA 71245</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(318) 555-WRAP</p>
                    <p className="text-gray-600">(318) 555-9727</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@shawarmaplaza.com</p>
                    <p className="text-gray-600">catering@shawarmaplaza.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Mon-Thu: 11am - 9pm</p>
                    <p className="text-gray-600">Fri-Sat: 11am - 10pm</p>
                    <p className="text-gray-600">Sunday: 12pm - 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Catering Services</h3>
              <p className="mb-4">
                Planning an event? We offer catering services for parties, corporate events, 
                and special occasions!
              </p>
              <p className="font-semibold">Call us at (318) 555-9727 for details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;