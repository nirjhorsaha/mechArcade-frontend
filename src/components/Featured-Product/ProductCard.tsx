import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div key={product?._id} className="group bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition" data-aos="zoom-in">
      <figure className="relative w-full md:h-64 aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={product?.imageUrl}
          alt={product?.name}
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-600">{product?.name}</h3>
        <p className="text-sm text-gray-600 font-">{product?.brand}</p>
        <p className="font-mono mt-2">Available Quantity: {product?.quantity}</p>
        <p className="font-mono">Price: ${product?.price}</p>
        <div className="flex items-center mt-2">
          <span className="flex">
            {[...Array(5)].map((_, index) => {
              if (index < Math.floor(product?.rating)) {
                return <FaStar key={index} className="h-4 w-4 text-yellow-400" />;
              } else if (index < Math.ceil(product?.rating)) {
                return <FaStarHalfAlt key={index} className="h-4 w-4 text-yellow-400" />;
              } else {
                return <FaRegStar key={index} className="h-4 w-4 text-gray-400" />;
              }
            })}
          </span>
          <span className="ml-2 text-black font-mono">{product?.rating.toFixed(1)}</span>
        </div>
        <Link
          to={`/product/${product?._id}`}
          className="block mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
