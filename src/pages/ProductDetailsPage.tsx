import React from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star, ArrowLeft } from "lucide-react";
import furnitureProducts from "../data/furnitureProducts"; // adjust path if needed

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const product = furnitureProducts.find((p: { id: number; }) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back to Home */}
      <Link
        to="/"
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* PRODUCT IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-96 object-cover shadow"
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <div className="flex items-center gap-3 mt-4">
            <Star className="text-yellow-500" />
            <span className="text-gray-700 text-lg">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-4xl font-bold text-blue-600 mt-5">
            ${product.price}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>

            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center gap-2">
              <Heart className="text-red-500" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* EXTRA DETAILS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Product Details</h2>
        <p className="text-gray-700 leading-relaxed">
          This furniture piece is crafted with premium materials to ensure
          long-lasting durability, comfort, and style. A great fit for modern,
          classic, or minimalist homes.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
