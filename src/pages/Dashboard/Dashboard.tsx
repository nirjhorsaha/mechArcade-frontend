import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { Product } from '@/types';
import DeleteProductModal from '../../components/Modal/DeleteProductModal';
import AddProductModal from '../../components/Modal/AddProductModal';
import UpdateProductModal from '../../components/Modal/UpdateProductModal';
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '@/redux/api/baseApi';

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
              <th className="py-2 px-4 text-left">Product Price</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product: Product, index: number) => (
              <tr key={product._id} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4">{product.brand}</td>
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
          onAdd={(newProduct: Product) => {
            console.log(newProduct)
            addProduct(newProduct);
            setIsAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
