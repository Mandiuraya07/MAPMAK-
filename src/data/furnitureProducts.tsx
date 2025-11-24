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
export default furnitureProducts;