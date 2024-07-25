import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

interface Product {
  _id: string;
  name: string;
  price: number;
  brand: string;
  description: string;
  quantity: number;
  rating: number;
  isDeleted: boolean;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: {
        _id: '1',
        name: 'Mechanical Keyboard',
        price: 99.99,
        brand: 'Brand A',
        description: 'High-quality mechanical keyboard',
        quantity: 10,
        rating: 4.5,
        isDeleted: false,
        inStock: true
      },
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, increment: boolean) => {
    setCart(cart.map(item => {
      if (item.product._id === id) {
        const newQuantity = increment
          ? Math.min(item.quantity + 1, item.product.quantity)
          : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.product._id !== id));
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = 40;
    const taxes = subtotal * 0.1;
    return {
      subtotal,
      shipping,
      taxes,
      total: subtotal + shipping + taxes
    };
  };

  const { subtotal, shipping, taxes, total } = calculateTotals();

  const isStockAvailable = () => cart.every(item => item.quantity <= item.product.quantity);

  return (
    <div className="container mx-auto p-4 md:p-6 flex flex-col gap-6">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col">
        <div className="flex items-center mb-4 md:mb-6">
          <FaShoppingCart className="text-3xl md:text-4xl text-blue-600 mr-2" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">Your Cart</h1>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">No items added yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="hidden md:table w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-4 text-left">Item #</th>
                  <th className="p-4 text-left">Product Name</th>
                  <th className="p-4 text-left">Brand</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Quantity</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.product._id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-700">{index + 1}</td>
                    <td className="p-4 text-gray-800">{item.product.name}</td>
                    <td className="p-4 text-gray-600">{item.product.brand}</td>
                    <td className="p-4 text-gray-600">${item.product.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product._id, false)}
                          className="p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product._id, true)}
                          className="p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                          disabled={item.quantity >= item.product.quantity}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-gray-800">${(item.product.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => removeItem(item.product._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden flex flex-col gap-4">
              {cart.map(item => (
                <div key={item.product._id} className="bg-gray-100 p-4 rounded-lg border border-gray-200 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">{item.product.name}</h2>
                    <button
                      onClick={() => removeItem(item.product._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <p className="text-gray-600">Brand: {item.product.brand}</p>
                  <p className="text-gray-600">Price: ${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product._id, false)}
                      className="p-2 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400"
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product._id, true)}
                      className="p-2 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400"
                      disabled={item.quantity >= item.product.quantity}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-lg font-bold text-gray-800">Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 w-full md:w-80 self-end">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-base md:text-lg font-medium text-gray-700">Subtotal:</span>
            <span className="text-base md:text-lg font-medium text-gray-800">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base md:text-lg font-medium text-gray-700">Shipping:</span>
            <span className="text-base md:text-lg font-medium text-gray-800">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base md:text-lg font-medium text-gray-700">Tax:</span>
            <span className="text-base md:text-lg font-medium text-gray-800">${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg md:text-xl font-bold text-gray-800">Total:</span>
            <span className="text-lg md:text-xl font-bold text-gray-800">${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          disabled={!isStockAvailable()}
          className={`w-full px-6 py-3 text-white font-bold rounded-full ${isStockAvailable() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          <Link to="/checkout">Proceed to Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
