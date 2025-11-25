import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  LogOut,
  X,
  ShoppingCart,
  Heart,
  Star,
  Search,
  Menu,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
}

const categories = [
  "All",
  "Living Room",
  "Dining",
  "Bedroom",
  "Storage",
  "Office",
  "Kids",
  "Outdoor",
  "Lighting",
];

const furnitureProducts = [
  // Living Room
  {
    id: 1,
    name: "Modern Sofa Set",
    description: "3-seater luxury sofa with premium fabric",
    price: 1299.99,
    rating: 4.8,
    reviews: 124,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 2,
    name: "Leather Recliner",
    description: "Premium leather recliner chair with footrest",
    price: 599.99,
    rating: 4.6,
    reviews: 89,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80",
  },
  {
    id: 3,
    name: "Glass Coffee Table",
    description: "Modern glass top coffee table with wooden legs",
    price: 299.99,
    rating: 4.4,
    reviews: 67,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 4,
    name: "Entertainment Center",
    description: "Wall-mounted TV stand with storage",
    price: 449.99,
    rating: 4.7,
    reviews: 92,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 5,
    name: "Velvet Accent Chair",
    description: "Velvet upholstered accent chair with gold legs",
    price: 349.99,
    rating: 4.5,
    reviews: 78,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80",
  },
  {
    id: 6,
    name: "Sectional Sofa",
    description: "L-shaped modular sectional with chaise",
    price: 1899.99,
    rating: 4.9,
    reviews: 156,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80",
  },
  {
    id: 7,
    name: "Console Table",
    description: "Slim console table for hallway decor",
    price: 199.99,
    rating: 4.3,
    reviews: 54,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80",
  },
  {
    id: 8,
    name: "Loveseat Sofa",
    description: "Compact two-seater sofa for small spaces",
    price: 799.99,
    rating: 4.6,
    reviews: 87,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80",
  },

  // Dining
  {
    id: 9,
    name: "Wooden Dining Table",
    description: "6-seater wooden dining table with chairs",
    price: 899.99,
    rating: 4.7,
    reviews: 112,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 10,
    name: "Modern Bar Stools",
    description: "Set of 2 modern counter height bar stools",
    price: 199.99,
    rating: 4.3,
    reviews: 45,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 11,
    name: "Buffet Sideboard",
    description: "Solid wood sideboard with glass doors",
    price: 649.99,
    rating: 4.6,
    reviews: 78,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 12,
    name: "Upholstered Dining Chairs",
    description: "Set of 4 ergonomic dining chairs",
    price: 399.99,
    rating: 4.5,
    reviews: 63,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1505692794403-35c9f4a92a3a?w=500&q=80",
  },
  {
    id: 13,
    name: "Extendable Dining Table",
    description: "Oak table extending to seat 8 people",
    price: 1199.99,
    rating: 4.8,
    reviews: 94,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 14,
    name: "Dining Bench",
    description: "Modern dining bench for table seating",
    price: 249.99,
    rating: 4.4,
    reviews: 67,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80",
  },
  {
    id: 15,
    name: "China Cabinet",
    description: "Glass front china display cabinet",
    price: 799.99,
    rating: 4.7,
    reviews: 89,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=500&q=80",
  },

  // Bedroom
  {
    id: 16,
    name: "Upholstered King Bed",
    description: "King size bed with storage headboard",
    price: 799.99,
    rating: 4.8,
    reviews: 134,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80",
  },
  {
    id: 17,
    name: "Nightstand Tables",
    description: "Pair of modern bedside tables with drawers",
    price: 249.99,
    rating: 4.4,
    reviews: 89,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 18,
    name: "Dressing Mirror",
    description: "Full-length standing mirror with frame",
    price: 179.99,
    rating: 4.3,
    reviews: 56,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 19,
    name: "Sliding Wardrobe",
    description: "Sliding door wardrobe with interior organization",
    price: 899.99,
    rating: 4.7,
    reviews: 102,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 20,
    name: "Vanity Dresser",
    description: "Dressing table with stool and mirror",
    price: 349.99,
    rating: 4.5,
    reviews: 71,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 21,
    name: "Queen Bed Frame",
    description: "Modern queen bed with wooden headboard",
    price: 599.99,
    rating: 4.6,
    reviews: 98,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80",
  },
  {
    id: 22,
    name: "Bedroom Dresser",
    description: "6-drawer bedroom dresser with mirror",
    price: 499.99,
    rating: 4.5,
    reviews: 76,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",
  },

  // Storage
  {
    id: 23,
    name: "Wooden Bookshelf",
    description: "5-tier wooden bookshelf for home office",
    price: 199.99,
    rating: 4.4,
    reviews: 67,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",
  },
  {
    id: 24,
    name: "Storage Ottoman",
    description: "Multi-functional storage bench with lid",
    price: 129.99,
    rating: 4.2,
    reviews: 45,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 25,
    name: "Wall Shelves",
    description: "Set of 3 wall-mounted floating shelves",
    price: 79.99,
    rating: 4.6,
    reviews: 89,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 26,
    name: "Chest Drawers",
    description: "6-drawer storage chest in white finish",
    price: 299.99,
    rating: 4.5,
    reviews: 78,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 27,
    name: "Cube Organizer",
    description: "Modular 9-cube organizer with baskets",
    price: 159.99,
    rating: 4.3,
    reviews: 62,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 28,
    name: "Storage Cabinet",
    description: "Multi-purpose storage cabinet with doors",
    price: 349.99,
    rating: 4.5,
    reviews: 83,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=500&q=80",
  },
  {
    id: 29,
    name: "Bookcase Unit",
    description: "Tall bookcase with adjustable shelves",
    price: 229.99,
    rating: 4.4,
    reviews: 71,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",
  },

  // Office
  {
    id: 30,
    name: "L-Shaped Desk",
    description: "Executive L-shaped office desk with cable management",
    price: 499.99,
    rating: 4.7,
    reviews: 98,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
  },
  {
    id: 31,
    name: "Office Chair",
    description: "High-back ergonomic chair with lumbar support",
    price: 349.99,
    rating: 4.8,
    reviews: 156,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 32,
    name: "Filing Cabinet",
    description: "2-drawer legal size filing cabinet",
    price: 189.99,
    rating: 4.3,
    reviews: 45,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 33,
    name: "Office Bookshelf",
    description: "Office bookshelf with adjustable shelves",
    price: 229.99,
    rating: 4.5,
    reviews: 67,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 34,
    name: "Standing Desk",
    description: "Electric height adjustable standing desk",
    price: 599.99,
    rating: 4.9,
    reviews: 123,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 35,
    name: "Office Credenza",
    description: "Executive office credenza with storage",
    price: 699.99,
    rating: 4.6,
    reviews: 89,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=500&q=80",
  },
  {
    id: 36,
    name: "Conference Table",
    description: "Large conference table for meetings",
    price: 1299.99,
    rating: 4.7,
    reviews: 67,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
  },

  // Kids
  {
    id: 37,
    name: "Kids Bunk Bed",
    description: "Safe bunk bed with guard rails and ladder",
    price: 449.99,
    rating: 4.7,
    reviews: 89,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80",
  },
  {
    id: 38,
    name: "Children's Desk",
    description: "Study desk with storage for kids",
    price: 179.99,
    rating: 4.4,
    reviews: 56,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 39,
    name: "Toy Storage Unit",
    description: "Colorful toy storage bins and shelves",
    price: 99.99,
    rating: 4.3,
    reviews: 45,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 40,
    name: "Kids Play Table",
    description: "Adjustable activity table for children",
    price: 129.99,
    rating: 4.5,
    reviews: 67,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 41,
    name: "Children's Bookcase",
    description: "Child-friendly bookcase with safety features",
    price: 149.99,
    rating: 4.6,
    reviews: 78,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 42,
    name: "Kids Wardrobe",
    description: "Colorful wardrobe for children's room",
    price: 299.99,
    rating: 4.4,
    reviews: 62,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",
  },
  {
    id: 43,
    name: "Toddler Bed",
    description: "Safe toddler bed with guard rails",
    price: 199.99,
    rating: 4.5,
    reviews: 73,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80",
  },

  // Outdoor
  {
    id: 44,
    name: "Patio Dining Set",
    description: "6-piece outdoor dining table and chairs",
    price: 699.99,
    rating: 4.6,
    reviews: 112,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80",
  },
  {
    id: 45,
    name: "Outdoor Sofa Set",
    description: "Weather-resistant outdoor sofa set",
    price: 899.99,
    rating: 4.7,
    reviews: 89,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 46,
    name: "Garden Bench",
    description: "Teak wood garden bench for outdoor spaces",
    price: 299.99,
    rating: 4.5,
    reviews: 67,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 47,
    name: "Sun Lounger",
    description: "Adjustable outdoor sun lounger with wheels",
    price: 199.99,
    rating: 4.4,
    reviews: 56,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 48,
    name: "Outdoor Bar Set",
    description: "Bar table with 4 stools for patio",
    price: 449.99,
    rating: 4.8,
    reviews: 94,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 49,
    name: "Porch Swing",
    description: "Comfortable porch swing for outdoor relaxation",
    price: 349.99,
    rating: 4.6,
    reviews: 78,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80",
  },
  {
    id: 50,
    name: "Outdoor Coffee Table",
    description: "Weatherproof outdoor coffee table",
    price: 179.99,
    rating: 4.4,
    reviews: 65,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80",
  },

  // Lighting
  {
    id: 51,
    name: "Arc Floor Lamp",
    description: "Modern arc floor lamp with dimmer",
    price: 149.99,
    rating: 4.5,
    reviews: 78,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },
  {
    id: 52,
    name: "Glass Pendant Light",
    description: "Glass pendant light for dining area",
    price: 89.99,
    rating: 4.4,
    reviews: 45,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
  {
    id: 53,
    name: "Table Lamp Set",
    description: "Pair of ceramic table lamps with shades",
    price: 129.99,
    rating: 4.6,
    reviews: 89,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
  {
    id: 54,
    name: "LED Strip Lights",
    description: "Smart RGB LED strips with remote",
    price: 49.99,
    rating: 4.3,
    reviews: 156,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 55,
    name: "Crystal Chandelier",
    description: "Crystal chandelier for entryway",
    price: 399.99,
    rating: 4.7,
    reviews: 67,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
  },
  {
    id: 56,
    name: "Track Lighting",
    description: "Modern track lighting system",
    price: 199.99,
    rating: 4.5,
    reviews: 83,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },
  {
    id: 57,
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp",
    price: 59.99,
    rating: 4.4,
    reviews: 94,
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
  },
];

const HomePage = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, getCartItemsCount } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    window.location.href = "/login";
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredProducts = furnitureProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* TOP BAR - Matching DXBRUNNERS layout exactly */}
      <div className="w-full bg-blue-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-bold text-lg">FURNITUREHUB</span>
            <span className="text-blue-200">Smart Search.</span>
            <span className="bg-white text-blue-800 px-2 py-1 rounded">+</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>SPRING SALE CATALOG |</span>
            <span>LOGIN/REGISTER |</span>
            <span>CART/4 _</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER - Matching DXBRUNNERS layout exactly */}
      <header className="w-full bg-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left side navigation */}
            <nav className="flex items-center space-x-6 text-sm">
              <span className="font-semibold">HOME)</span>
              <span>NEW ARRIVAL</span>
              <span>LIVING ROOM "|</span>
              <span>BEDROOM</span>
              <span>DINING</span>
              <span>OFFICE |</span>
              <span>OUTDOOR</span>
            </nav>

            {/* Right side navigation */}
            <nav className="flex items-center space-x-6 text-sm">
              <span>LIGHTING</span>
              <span>STORAGE |</span>
              <span>CART CHECKOUT)</span>
              <span>PREMIUM DEALS)</span>
              <span>CLEARANCE|</span>
              <span className="text-blue-200">NEW COLLECTION</span>
            </nav>
          </div>
        </div>
      </header>

      {/* STICKY SEARCH & FILTER SECTION */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Brand Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                Furniture Store
              </h1>
              <p className="text-gray-600">Premium Quality Furniture</p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              {/* Category Dropdown */}
              <div className="w-full sm:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-blue-600 text-white px-4 py-3 text-sm rounded-lg font-semibold outline-none cursor-pointer border-2 border-blue-600"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="flex-1 relative w-full sm:w-96">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  className="w-full bg-white border border-gray-300 pl-10 pr-4 py-3 text-sm rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Cart ({getCartItemsCount()})
                </button>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* PRODUCT GRID */}
      <main className="flex-1 p-4 lg:p-8 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All"
                ? "Discover Products"
                : selectedCategory + " Furniture"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {selectedCategory === "All"
                ? "Premium quality furniture for every room"
                : `Explore our ${selectedCategory.toLowerCase()} collection`}
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setIsProductModalOpen(true);
                }}
              >
                <div className="relative h-48 sm:h-40 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening product modal when clicking favorite
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {product.category}
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2 sm:mb-3">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs mb-2 sm:mb-3">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-400">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent opening product modal when clicking add to cart
                        addToCart({
                          id: product.id,
                          name: product.name,
                          description: product.description,
                          price: product.price,
                          rating: product.rating,
                          image: product.image,
                          category: product.category,
                          variant: "Default"
                        });
                      }}
                      className="px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-1 transition-colors"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span className="hidden xs:inline">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-gray-500 text-lg mb-2">No products found</p>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Cart Modal */}
        <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true); // Open checkout instead of alert
        }}
      />

       {/* Product Details Modal */}
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
      />

         {/* Checkout Modal */}
      <Checkout 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderComplete={() => {
          setIsCheckoutOpen(false);
          // Optionally show success message or redirect
        }}
      />

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                Confirm Logout
              </h3>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <LogOut className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-700 font-medium mb-2">
                Are you sure you want to logout?
              </p>
              <p className="text-gray-500 text-sm">
                You will be redirected to the login page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 p-6 bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;