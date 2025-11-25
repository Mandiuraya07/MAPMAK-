import { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  variant?: string;
  quantity: number;
  description?: string;
  rating?: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number; variant?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; variant?: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number, variant?: string) => void;
  updateQuantity: (id: number, variant: string | undefined, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.variant === action.payload.variant
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.variant === action.payload.variant)
        )
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

const initialCartState: CartState = {
  items: []
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const savedCart = localStorage.getItem('furnitureCart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        if (cartData && cartData.items) {
          cartData.items.forEach((item: CartItem) => {
            dispatch({ type: 'ADD_TO_CART', payload: item });
          });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('furnitureCart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id: number, variant?: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, variant } });
  };

  const updateQuantity = (id: number, variant: string | undefined, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = (): number => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = (): number => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    cartItems: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};