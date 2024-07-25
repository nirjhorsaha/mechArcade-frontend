// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import { GridLoader } from 'react-spinners';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
// import { Product } from '@/types';
// import { useGetProductsQuery } from '@/redux/api/baseApi';

// const FeaturedProduct = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const { data, error, isLoading } = useGetProductsQuery({});

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <GridLoader color="#2563eb" />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error fetching products</div>;
//   }

//   const products = data?.data?.result;
//   console.log(products);

//   if (!products || products.length === 0) {
//     return <div>No products available</div>;
//   }

//   return (
//     <div className="bg-white py-12 max-w-7xl mx-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-left mb-6">
//           <h2 className="text-4xl font-semibold text-blue-600 mb-1">Featured Product</h2>
//           <h3 className="text-lg font-medium text-gray-600">Explore our top picks and bestsellers!</h3>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.slice(0, 6).map((product: Product) => (
//             <div key={product?._id} className="group bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition" data-aos="zoom-in">
//               <figure className="relative max-h-72 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
//                   src={product?.imageUrl}
//                   alt={product?.name}
//                 />
//               </figure>
//               <div className="p-4">
//                 <h3 className="text-xl font-bold text-blue-600">{product?.name}</h3>
//                 <p className="text-sm text-gray-600 font-">{product?.brand}</p>
//                 <p className="font-mono mt-2">Available Quantity: {product?.quantity}</p>
//                 <p className="font-mono">Price: ${product.price}</p>
//                 <div className="flex items-center mt-2">
//                   <span className="flex">
//                     {[...Array(5)].map((_, index) => {
//                       if (index < Math.floor(product.rating)) {
//                         return <FaStar key={index} className="h-4 w-4 text-yellow-400" />;
//                       } else if (index < Math.ceil(product.rating)) {
//                         return <FaStarHalfAlt key={index} className="h-4 w-4 text-yellow-400" />;
//                       } else {
//                         return <FaRegStar key={index} className="h-4 w-4 text-gray-400" />;
//                       }
//                     })}
//                   </span>
//                   <span className="ml-1 text-black">{product.rating.toFixed(1)}</span>
//                 </div>
//                 <Link
//                   to={`/product/${product?._id}`}
//                   className="block mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   See Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//           <Link
//             to="/products"
//             className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             See More Products
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GridLoader } from 'react-spinners';
import { useGetProductsQuery } from '@/redux/api/baseApi';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import ProductCard from './ProductCard';

const FeaturedProduct = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader color="#2563eb" />
      </div>
    );
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
