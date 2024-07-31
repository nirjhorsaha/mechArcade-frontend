import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { Product } from '@/types';
import DeleteProductModal from '../../components/Modal/DeleteProductModal';
import AddProductModal from '../../components/Modal/AddProductModal';
import UpdateProductModal from '../../components/Modal/UpdateProductModal';
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  
  const products = data?.data.result ?? [];

  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openUpdateModal = (product: Product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const openDeleteModal = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      await addProduct(newProduct).unwrap();
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Error adding product!");
    } finally {
      setIsAddModalOpen(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div className="p-4">
      <Helmet>
        <title>Dashboard - Mech Arcade</title>
      </Helmet>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Dashboard</h1>
        <button
          onClick={openAddModal}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm sm:text-base"
        >
          <FiPlus className="mr-2" /> Add Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Item</th>
              <th className="py-2 px-4 text-left">Product Name</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product: Product, index: number) => (
              <tr key={product?._id} className="border-b hover:bg-gray-100 transition-colors duration-200">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product?.name}</td>
                <td className="py-2 px-4">${product?.price.toFixed(2)}</td>
                <td className="py-2 px-4">{product?.brand}</td>
                <td className="py-2 px-4 flex items-center space-x-2">
                  <button
                    onClick={() => openUpdateModal(product)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => openDeleteModal(product)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={() => setIsUpdateModalOpen(false)}
          onSave={(updatedProduct: Product) => {
            updateProduct({ id: updatedProduct?._id, product: updatedProduct });
            setIsUpdateModalOpen(false);
          }}
        />
      )}
      {isDeleteModalOpen && selectedProduct && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => {
            deleteProduct(selectedProduct?._id);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddProduct}
        />
      )}
    </div>
  );
};

export default Dashboard;




/*  
import { Helmet } from 'react-helmet';
import React, { useState, useMemo } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiFilter, FiSort } from 'react-icons/fi';
import { Product } from '@/types';
import DeleteProductModal from '../../components/Modal/DeleteProductModal';
import AddProductModal from '../../components/Modal/AddProductModal';
import UpdateProductModal from '../../components/Modal/UpdateProductModal';
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  
  const products = data?.data.result ?? [];

  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // State for sorting and filtering
  const [sortCriteria, setSortCriteria] = useState<string>('name');
  const [filterBrand, setFilterBrand] = useState<string>('');
  const [filterPriceRange, setFilterPriceRange] = useState<number[]>([0, 1000]);

  // Sorting and filtering logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by brand
    if (filterBrand) {
      result = result.filter(product => product.brand.toLowerCase().includes(filterBrand.toLowerCase()));
    }

    // Filter by price range
    result = result.filter(product => product.price >= filterPriceRange[0] && product.price <= filterPriceRange[1]);

    // Sort by selected criteria
    result.sort((a, b) => {
      if (sortCriteria === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [products, sortCriteria, filterBrand, filterPriceRange]);

  const openUpdateModal = (product: Product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const openDeleteModal = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      await addProduct(newProduct).unwrap();
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Error adding product!");
    } finally {
      setIsAddModalOpen(false);
    }
  };

  if (isLoading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error loading products!</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Dashboard - Mech Arcade</title>
      </Helmet>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold mb-4 sm:mb-0 text-gray-900">Dashboard</h1>
        <button
          onClick={openAddModal}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base transition-transform transform hover:scale-105"
        >
          <FiPlus className="mr-2" /> Add Product
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <label htmlFor="brandFilter" className="mr-2 text-gray-700">Filter by Brand:</label>
          <input
            id="brandFilter"
            type="text"
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
            className="border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center mb-4 sm:mb-0">
          <label htmlFor="priceRange" className="mr-2 text-gray-700">Price Range:</label>
          <input
            id="priceRange"
            type="number"
            value={filterPriceRange[0]}
            onChange={(e) => setFilterPriceRange([Number(e.target.value), filterPriceRange[1]])}
            className="border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="mx-2">to</span>
          <input
            id="priceRange"
            type="number"
            value={filterPriceRange[1]}
            onChange={(e) => setFilterPriceRange([filterPriceRange[0], Number(e.target.value)])}
            className="border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="sortBy" className="mr-2 text-gray-700">Sort by:</label>
          <select
            id="sortBy"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className="border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        {filteredAndSortedProducts.length === 0 ? (
          <p className="text-center py-4 text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product: Product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                  <p className="text-gray-500">Brand: {product.brand}</p>
                </div>
                <div className="bg-gray-100 p-3 flex justify-around">
                  <button
                    onClick={() => openUpdateModal(product)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => openDeleteModal(product)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isUpdateModalOpen && selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={() => setIsUpdateModalOpen(false)}
          onSave={(updatedProduct: Product) => {
            updateProduct({ id: updatedProduct._id, product: updatedProduct });
            setIsUpdateModalOpen(false);
          }}
        />
      )}
      {isDeleteModalOpen && selectedProduct && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => {
            deleteProduct(selectedProduct?._id);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddProduct}
        />
      )}
    </div>
  );
};

export default Dashboard;

*/