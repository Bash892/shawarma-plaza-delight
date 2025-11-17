import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signin";
  const [isSignIn, setIsSignIn] = useState(mode === "signin");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (isSignIn) {
      alert("Sign in successful! (Demo)");
    } else {
      alert("Account created successfully! (Demo)");
    }
    
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
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
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Form */}
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignIn ? "Welcome Back!" : "Join Us Today!"}
            </h1>
            <p className="text-gray-600">
              {isSignIn 
                ? "Sign in to access your account and order history" 
                : "Create an account to start ordering your favorites"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isSignIn}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            )}

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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            {!isSignIn && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isSignIn}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            )}

            {isSignIn && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-orange-500 mr-2" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-semibold hover:text-orange-600"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-4">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="mr-2">🔵</span>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="mr-2">📱</span>
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Auth;