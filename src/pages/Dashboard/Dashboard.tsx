import { Helmet } from "react-helmet";
import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { Product } from '@/types';
import DeleteProductModal from "../../components/Modal/DeleteProductModal";
import AddProductModal from "../../components/Modal/AddProductModal";
import UpdateProductModal from "../../components/Modal/UpdateProductModal";

const Dashboard : React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
      {
        _id: 1,
        name: 'Mechanical Keyboard',
        price: 99.99,
        brand: 'Brand A',
        description: 'High-quality mechanical keyboard',
        quantity: 10,
        rating: 4.5,
        imageUrl: 'link_to_image_1',
        isDeleted: false,
        inStock: true
      },
    ]);
  
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
  return (
    <div>
      <Helmet>
        <title>Dashboard - Mech Arcade</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Dashborad</h1>
       <button
          onClick={openAddModal}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          <FiPlus className="mr-2" /> Add Product
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Brand</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product?._id} className="border-b">
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
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={() => setIsUpdateModalOpen(false)}
          onSave={(updatedProduct) => {
            setProducts((prev) =>
              prev.map((p) => (p._id === updatedProduct?._id ? updatedProduct : p))
            );
            setIsUpdateModalOpen(false);
          }}
        />
      )}
      {isDeleteModalOpen && selectedProduct && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => {
            setProducts((prev) => prev.filter((p) => p._id !== selectedProduct._id));
            setIsDeleteModalOpen(false);
          }}
        />
      )}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={(newProduct: Product) => {
            setProducts((prev) => [...prev, newProduct]);
            setIsAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;