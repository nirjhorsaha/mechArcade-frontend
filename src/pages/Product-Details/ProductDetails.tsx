import { Product } from '@/types';
// import React, { useState } from 'react';
import mKeyboard1 from '../../assets/keyboard-1.jpg';

import { FaStar } from 'react-icons/fa';
import Breadcrumbs from '../Shared/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [productId]);
  // const [cart, setCart] = useState<{ [key: number]: number }>({});

  // const handleAddToCart = () => {
  //   if (product?.quantity > 0) {
  //     setCart(prevCart => {
  //       const currentQuantity = prevCart[product.id] || 0;
  //       const newQuantity = Math.min(currentQuantity + 1, product?.quantity);
  //       return { ...prevCart, [product.id]: newQuantity };
  //     });
  //   } else {
  //     alert('Product is out of stock');
  //   }
  // };

  // const cartQuantity = cart[product.id] || 0;

  // Define breadcrumbs
  // Define breadcrumbs
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product?.name || 'Product Details', path: `/products/${productId}` }
  ]


  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <img
        src={mKeyboard1}
        alt={product?.name || 'Product Image'}
        className="w-full lg:h-64 object-cover mb-4 rounded-xl "
      />
      <h1 className="text-3xl font-bold mb-2">{product?.name || 'Product Name'}</h1>
      <h2 className="text-xl text-gray-600 mb-2">{`Brand: ${product?.brand || 'Brand Name'}`}</h2>
      <p className="text-lg mb-2">{`Available Quantity: ${product?.quantity || 0}`}</p>
      <p className="text-lg mb-4">{`Price: $${product?.price?.toFixed(2) || '0.00'}`}</p>
      <div className="flex mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            color={index < (product?.rating || 0) ? 'gold' : 'gray'}
            className="text-lg transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
      <p className="text-md text-gray-700 mb-4">{product?.description || 'Product Description'}</p>
      <button
        // onClick={handleAddToCart}
        className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out ${product?.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={product?.quantity === 0}
      >
        {product?.quantity && product.quantity > 0 ? `Add to Cart` : 'Out of Stock'}
      </button>
    </div>
  );


};

export default ProductDetails;
