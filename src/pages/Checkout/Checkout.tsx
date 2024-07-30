import React, { useState } from 'react';
import { FaCreditCard, FaShippingFast } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useUpdateProductMutation } from '@/redux/api/baseApi';
import { clearCart } from '@/redux/feature/CartSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import OrderSummary from '../Shared/OrderSummary';


const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items); // Select cart items from the state
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash On Delivery',
  });

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
    const shipping = 40; // Static shipping cost 
    const taxes = shipping * 0.3; // 10% tax
    return {
      subtotal,
      shipping,
      taxes,
      total: subtotal + shipping + taxes,
    };
  };

  const { subtotal, shipping, taxes, total } = calculateTotals();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.paymentMethod === 'Stripe') {
      // Prevent Stripe payment and show a message
      toast.error('Stripe payment are currently not accepted.! Please select Cash On Delivery.');
      return; // Stop further execution
    }
    try {
      // Update stock for each product in the cart
      await Promise.all(
        cartItems.map((item) =>
          updateProduct({
            id: item?._id,
            product: { quantity: item.quantity - item.cartQuantity }, // Deduct quantity from stock
          }).unwrap()
        )
      );

      // Clear cart after successful order
      dispatch(clearCart());

      // Redirect to success page
      navigate('/success');
    } catch (error) {
      console.error('Failed to place order:', error);
      toast.error('Failed to place order')
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <form onSubmit={handlePlaceOrder} className="flex flex-col md:flex-row gap-6">
        {/* Shipping Address Box */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 flex-1">
          <div className="flex items-center mb-4">
            <FaShippingFast className="text-3xl text-blue-600 mr-2" />
            <h1 className="text-2xl font-extrabold text-gray-800">Shipping Address</h1>
          </div>
          <p className="text-gray-600 mb-4">Fill in the form below to complete your purchase</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block text-gray-700">
              <span className="text-lg font-medium">First Name:</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
            <label className="block text-gray-700">
              <span className="text-lg font-medium">Last Name:</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
            <label className="block text-gray-700">
              <span className="text-lg font-medium">Email:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
            <label className="block text-gray-700">
              <span className="text-lg font-medium">Phone:</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
            <label className="block text-gray-700">
              <span className="text-lg font-medium">Address:</span>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={4}
                required
              />
            </label>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
            <div className="flex items-center mb-4">
              <FaCreditCard className="text-3xl text-blue-600 mr-2" />
              <h1 className="text-2xl font-extrabold text-gray-800">Payment Information</h1>
            </div>
            <label className="block text-gray-700">
              <span className="text-lg font-medium">Payment Method:</span>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="Stripe">Stripe</option>
              </select>
            </label>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 w-full md:w-80 self-start">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Subtotal:</span>
              <span className="text-lg font-medium text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Shipping:</span>
              <span className="text-lg font-medium text-gray-800">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Tax:</span>
              <span className="text-lg font-medium text-gray-800">${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-gray-800">${total.toFixed(2)}</span>
            </div>
          </div> */}
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            taxes={taxes}
            total={total}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
