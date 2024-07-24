import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mKeyboard1 from '../../assets/keyboard-1.jpg';
import mKeyboard2 from '../../assets/keyboard-2.jpg';
import mKeyboard3 from '../../assets/keyboard-3.jpg';
import { useEffect } from 'react';

const FeaturedProduct = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  // Sample product data (you can replace this with actual data from your backend)
  const products = [
    {
      id: 1,
      title: 'Mechanical Keyboard 1',
      brand: 'Brand A',
      quantity: 10,
      price: 99.99,
      rating: 4.5,
      image: mKeyboard1,
    },
    {
      id: 2,
      title: 'Mechanical Keyboard 2',
      brand: 'Brand B',
      quantity: 8,
      price: 129.99,
      rating: 4.2,
      image: mKeyboard2,
    },
    {
      id: 3,
      title: 'Mechanical Keyboard 3',
      brand: 'Brand C',
      quantity: 5,
      price: 149.99,
      rating: 4.7,
      image: mKeyboard3,
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Featured Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition" data-aos="zoom-in">
            <figure className="relative max-h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="font-mono mt-2">Available Quantity: {product.quantity}</p>
              <p className="font-mono">Price: ${product.price}</p>
              <div className="flex items-center mt-2">
                <span className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className={`h-4 w-4 fill-current ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 1l2.6 6.3L18 7l-5 4.4L15.4 19 10 15.4 4.6 19l1.4-5.6L2 7l5.4.3L10 1z"/>
                    </svg>
                  ))}
                  {(product.rating % 1 > 0) && (
                    <svg className="h-4 w-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 1l2.6 6.3L18 7l-5 4.4L15.4 19 10 15.4 4.6 19l1.4-5.6L2 7l5.4.3L10 1z"/>
                    </svg>
                  )}
                </span>
                <span className="ml-1 text-gray-600">{product.rating.toFixed(1)}</span>
              </div>
              <Link to={`/products/${product.id}`} className="block mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500">
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/products" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          See More Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
