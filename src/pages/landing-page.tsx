import React, { useState } from 'react';
import { ShoppingCart, Star, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const FurnitureLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const categories = [
    { 
      name: 'Living Room', 
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      color: 'bg-blue-50' 
    },
    { 
      name: 'Bedroom', 
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop',
      color: 'bg-blue-100' 
    },
    { 
      name: 'Dining', 
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop',
      color: 'bg-blue-50' 
    },
    { 
      name: 'Office', 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      color: 'bg-blue-100' 
    }
  ];

  const featuredProducts = [
    { 
      name: 'Modern Sofa', 
      price: '$899', 
      rating: 4.8, 
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'
    },
    { 
      name: 'Oak Dining Table', 
      price: '$1,299', 
      rating: 4.9, 
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop'
    },
    { 
      name: 'King Bed Frame', 
      price: '$749', 
      rating: 4.7, 
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop'
    },
    { 
      name: 'Office Chair', 
      price: '$349', 
      rating: 4.6, 
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop'
    }
  ];

  const trendingProducts = [
    { 
      name: 'Velvet Armchair', 
      price: '$499', 
      discount: '20% OFF', 
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop'
    },
    { 
      name: 'Glass Coffee Table', 
      price: '$399', 
      discount: '15% OFF', 
      image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400&h=400&fit=crop'
    },
    { 
      name: 'Bookshelf', 
      price: '$279', 
      discount: '25% OFF', 
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=400&fit=crop'
    },
    { 
      name: 'Floor Lamp', 
      price: '$159', 
      discount: '10% OFF', 
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop'
    }
  ];

  const testimonials = [
    { 
      name: 'Sarah Johnson', 
      text: 'Absolutely love the quality! The sofa is incredibly comfortable and looks stunning in our living room.', 
      rating: 5 
    },
    { 
      name: 'Michael Chen', 
      text: 'Fast delivery and excellent customer service. The dining set exceeded our expectations!', 
      rating: 5 
    },
    { 
      name: 'Emma Williams', 
      text: 'Best furniture shopping experience ever. Highly recommend for anyone looking for modern pieces.', 
      rating: 5 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
            >
              FurniSpace
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => (window.location.href = "/login")}
                className="hidden sm:block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </button>
              <button className="relative">
                <ShoppingCart className="text-gray-700 hover:text-blue-600 transition" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
              >
                Get Started
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                New Collection 2024
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with Modern{" "}
                <span className="text-blue-600">Furniture</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover premium quality furniture that combines style, comfort,
                and durability. Up to 30% off on selected items.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 flex items-center"
                >
                  Shop Now <ArrowRight className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("categories")}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  View Collection
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
                alt="Modern Living Room"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-xl shadow-lg transform rotate-3">
                30% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect furniture for every room
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition duration-300 hover:shadow-xl h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked bestsellers just for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trending Now
            </h2>
            <p className="text-gray-600 text-lg">
              Hot deals you don't want to miss
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {product.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                      Shop <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-blue-100 text-lg">
              Join thousands of happy customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-blue-600">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our full collection and enjoy free shipping on orders over
            $500
          </p>
          <button
            onClick={() => scrollToSection("products")}
            className="bg-blue-600 text-white px-12 py-5 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 text-lg inline-flex items-center"
          >
            Shop Now <ArrowRight className="ml-2" size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                FurniSpace
              </h3>
              <p className="text-gray-400">
                Your destination for premium modern furniture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-blue-400 transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("categories")}
                    className="hover:text-blue-400 transition"
                  >
                    Categories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="hover:text-blue-400 transition"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-blue-400 transition"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button className="hover:text-blue-400 transition">
                    Shipping Info
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition">
                    Returns
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition">
                    FAQ
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition">
                    Warranty
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" /> info@furnispace.com
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> 123 Furniture Ave, NY
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <button className="hover:text-blue-400 transition">
                  <Facebook />
                </button>
                <button className="hover:text-blue-400 transition">
                  <Instagram />
                </button>
                <button className="hover:text-blue-400 transition">
                  <Twitter />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FurniSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FurnitureLanding;