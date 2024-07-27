import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGetProductsQuery } from '@/redux/api/baseApi';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import Loading from '../ui/loading';

const FeaturedProduct = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  const products = data?.data?.result;
  // console.log(products);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="bg-white py-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-semibold text-blue-600 mb-1">Featured Product</h2>
          <h3 className="text-lg font-medium text-gray-600">Explore our top picks and bestsellers!</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product:Product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            See More Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
