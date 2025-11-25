import { useState } from 'react';
import { X, Minus, Plus, AlertTriangle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { CartItem } from '../contexts/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: () => void;
}

const CartModal = ({ isOpen, onClose, onProceedToCheckout }: CartModalProps) => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [warnings, setWarnings] = useState<string[]>([]);

  const validateCart = (): boolean => {
    const newWarnings: string[] = [];
    
    cartItems.forEach(item => {
      if (item.quantity > 10) {
        newWarnings.push(`${item.name} - Only 10 items available in stock`);
      }
    });

    setWarnings(newWarnings);
    return newWarnings.length === 0;
  };

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id, item.variant);
    } else {
      updateQuantity(item.id, item.variant, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    if (validateCart()) {
      onProceedToCheckout();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 mt-4">
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-400 mr-2" size={20} />
              <h4 className="font-semibold">Please review the following issues:</h4>
            </div>
            <div className="mt-2">
              {warnings.map((warning, index) => (
                <div key={index} className="text-yellow-700 text-sm ml-6">
                  • {warning}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      {item.variant && (
                        <p className="text-gray-600 text-sm">Variant: {item.variant}</p>
                      )}
                      <p className="text-lg font-bold text-blue-600">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <p className="font-bold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-red-600 hover:text-red-800 text-sm mt-1 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
                  <span>Total:</span>
                  <span className="text-blue-600">${getCartTotal().toFixed(2)}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={clearCart}
                    className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button 
                    onClick={handleProceedToCheckout}
                    disabled={warnings.length > 0}
                    className={`flex-1 py-3 rounded-lg transition-colors ${
                      warnings.length > 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;