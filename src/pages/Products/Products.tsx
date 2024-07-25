// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
// import UpdateProductModal from './UpdateProductModal';
// import { Product } from '@/types';
// import DeleteProductModal from './DeleteProductModal';
// import AddProductModal from './AddProductModal';

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([
//     {
//       _id: 1,
//       name: 'Mechanical Keyboard',
//       price: 99.99,
//       brand: 'Brand A',
//       description: 'High-quality mechanical keyboard',
//       quantity: 10,
//       rating: 4.5,
//       imageUrl: 'link_to_image_1',
//       isDeleted: false,
//       inStock: true
//     },
//   ]);

//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   const openUpdateModal = (product: Product) => {
//     setSelectedProduct(product);
//     setIsUpdateModalOpen(true);
//   };

//   const openDeleteModal = (product: Product) => {
//     setSelectedProduct(product);
//     setIsDeleteModalOpen(true);
//   };

//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <Helmet>
//         <title>Product List - Mech Arcade</title>
//       </Helmet>
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-3xl font-bold">Product List</h1>
//         <button
//           onClick={openAddModal}
//           className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//         >
//           <FiPlus className="mr-2" /> Add Product
//         </button>
//       </div>
//       <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="py-2 px-4 text-left">Name</th>
//             <th className="py-2 px-4 text-left">Price</th>
//             <th className="py-2 px-4 text-left">Brand</th>
//             <th className="py-2 px-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product?._id} className="border-b">
//               <td className="py-2 px-4">{product.name}</td>
//               <td className="py-2 px-4">${product.price.toFixed(2)}</td>
//               <td className="py-2 px-4">{product.brand}</td>
//               <td className="py-2 px-4 flex items-center space-x-2">
//                 <button
//                   onClick={() => openUpdateModal(product)}
//                   className="text-blue-500 hover:text-blue-600"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => openDeleteModal(product)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isUpdateModalOpen && selectedProduct && (
//         <UpdateProductModal
//           product={selectedProduct}
//           onClose={() => setIsUpdateModalOpen(false)}
//           onSave={(updatedProduct) => {
//             setProducts((prev) =>
//               prev.map((p) => (p._id === updatedProduct?._id ? updatedProduct : p))
//             );
//             setIsUpdateModalOpen(false);
//           }}
//         />
//       )}
//       {isDeleteModalOpen && selectedProduct && (
//         <DeleteProductModal
//           product={selectedProduct}
//           onClose={() => setIsDeleteModalOpen(false)}
//           onDelete={() => {
//             setProducts((prev) => prev.filter((p) => p._id !== selectedProduct._id));
//             setIsDeleteModalOpen(false);
//           }}
//         />
//       )}
//       {isAddModalOpen && (
//         <AddProductModal
//           onClose={() => setIsAddModalOpen(false)}
//           onAdd={(newProduct: Product) => {
//             setProducts((prev) => [...prev, newProduct]);
//             setIsAddModalOpen(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Products;

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';
import { useGetProductsQuery } from '@/redux/api/baseApi';
import { Product } from '@/types';
import ProductCard from '@/components/Featured-Product/ProductCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range
  const [sortOption, setSortOption] = useState<'asc' | 'desc'>('asc');

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

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  // Filter products based on searchTerm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Further filter products based on price range
  const priceFilteredProducts = filteredProducts.filter(product =>
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  const sortedProducts = priceFilteredProducts.sort((a, b) =>
    sortOption === 'asc' ? a.price - b.price : b.price - a.price
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as 'asc' | 'desc');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 1000]);
    setSortOption('asc');
  };

  return (
    <div className="bg-white py-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-semibold text-blue-600 mb-1">All Products</h2>
          <h3 className="text-lg font-medium text-gray-600">Find the perfect mechanical keyboard for you!</h3>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or brand"
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-md px-4 py-2 w-full mb-4"
          />
          <div className="flex gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-1">Price Range:</label>
              <input
                type="number"
                name="min"
                value={priceRange[0]}
                onChange={handlePriceRangeChange}
                className="border rounded-md px-4 py-2"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="max"
                value={priceRange[1]}
                onChange={handlePriceRangeChange}
                className="border rounded-md px-4 py-2 ml-2"
                placeholder="Max Price"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Sort By Price:</label>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Clear Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
