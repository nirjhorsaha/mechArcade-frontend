// components/Cart.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { RootState } from '@/redux/store';
import { removeFromCart, updateQuantity } from '@/redux/feature/CartSlice';
import QuantityAdjuster from '../Shared/QuantityAdjuster';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (id: string, increase: boolean, value: number) => {
    if (increase) {
      dispatch(updateQuantity({ id: id, quantity: value + 1 }));
    } else {
      dispatch(updateQuantity({ id: id, quantity: value - 1 }));
    }
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
    const shipping = cart.length > 0 ? 40 : 0;
    const taxes = shipping * 0.3; 
    return {
      subtotal,
      shipping,
      taxes,
      total: subtotal + shipping + taxes,
    };
  };

  const { subtotal, shipping, taxes, total } = calculateTotals();

  return (
    <div className="container mx-auto p-4 md:p-6 flex flex-col gap-6">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col">
        <div className="flex items-center mb-4 md:mb-6">
          <FaShoppingCart className="text-3xl md:text-4xl text-blue-600 mr-2" aria-hidden="true" />
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
                  <th className="p-4 text-left">Total</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-700">{index + 1}</td>
                    <td className="p-4 text-gray-800">{item.name}</td>
                    <td className="p-4 text-gray-600">{item.brand}</td>
                    <td className="p-4 text-gray-600">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <QuantityAdjuster
                        quantity={item.cartQuantity}
                        stock={item.stock}
                        onIncrease={() => handleQuantityChange(item._id, true, item.cartQuantity)}
                        onDecrease={() => handleQuantityChange(item._id, false, item.cartQuantity)}
                      />
                    </td>
                    <td className="p-4 text-gray-800">${(item.price * item.cartQuantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FaTrash aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden flex flex-col gap-4">
              {cart.map((item, index) => (
                <div key={item._id} className=" p-4 rounded-lg border border-gray-200 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">{`${index + 1}. ${item.name}`}</h2>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-600 hover:text-red-800"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FaTrash aria-hidden="true" />
                    </button>
                  </div>
                  <p className="text-gray-600">Brand: {item.brand}</p>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <QuantityAdjuster
                    quantity={item.cartQuantity}
                    stock={item.stock}
                    onIncrease={() => handleQuantityChange(item._id, true, item.cartQuantity)}
                    onDecrease={() => handleQuantityChange(item._id, false, item.cartQuantity)}
                  />
                  <p className="text-lg font-bold text-gray-800">Total: ${(item.price * item.cartQuantity).toFixed(2)}</p>
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
        <Link to="/checkout">
          <button
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
