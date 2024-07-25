import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import Breadcrumbs from '../Shared/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '@/redux/api/baseApi';
import { GridLoader } from 'react-spinners';
import ErrorComponent from '../Shared/ErrorComponent';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleProductQuery(id as string);

  const product = data?.data;
  const rating = product?.rating || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader color="#2563eb" />
      </div>
    );
  }
  
  if (error) {
    return <ErrorComponent message="Error fetching products. Please try again later." />;
  }
  
  const handleAddToCart = () => {
    console.log('item added to cart');
  };

 
  
  // Define breadcrumbs
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product?.name || 'Product Details', path: `/products/${id}` },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white border rounded-lg">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-shrink-0 lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src={product?.imageUrl}
            alt={product?.name || 'Product Image'}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:ml-6 flex-1">
          <h1 className="text-3xl font-bold mb-2">{product?.name || 'Product Name'}</h1>
          <h2 className="text-xl text-gray-600 mb-2 font-mono">{`Brand: ${product?.brand || 'Brand Name'}`}</h2>
          <p className="bg-zinc-200 inline-block p-1 rounded-lg text-lg my-2 font-mono">{`Available Quantity: ${product?.quantity || 0}`}</p>
          {/* <p className="bg-zinc-200 inline-block p-1 rounded-lg text-lg mb-4 font-mono">{`Price: $${product?.price || '0.00'}`}</p> */}
          <p className="text-lg mb-4 font-mono">{`Price: $${product?.price || '0.00'}`}</p>
          <div className="flex mb-4">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < fullStars) {
                return <FaStar key={index} color="gold" className="text-lg transition-transform duration-300 hover:scale-110" />;
              } else if (index === fullStars && hasHalfStar) {
                return <FaStarHalfAlt key={index} color="gold" className="text-lg transition-transform duration-300 hover:scale-110" />;
              } else {
                return <FaRegStar key={index} color="gray" className="text-lg transition-transform duration-300 hover:scale-110" />;
              }
            })}
          </div>
          <p className="text-base text-gray-700 mb-4">{product?.description || 'Product Description'}</p>
          <button
            onClick={handleAddToCart}
            className={`border px-6 py-3 rounded-lg shadow-md flex items-center transition-colors duration-300 ease-in-out 
              ${product?.quantity === 0
                ? 'bg-red-600 text-white border-red-600 cursor-not-allowed'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
            disabled={product?.quantity === 0}
          >
            <FaShoppingCart className="mr-2 text-xl" />
            {product?.quantity && product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
