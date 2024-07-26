import { Product } from '@/types';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface AddProductModalProps {
  onClose: () => void;
  onAdd: (product: Product) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onAdd }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: Math.random(), // Generate a random id for demo purposes
    name: '',
    price: 0,
    brand: '',
    description: '',
    quantity: 0,
    rating: 0,
    imageUrl: '',
    isDeleted: false,
    inStock: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newProduct);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Product</h2>
          <button onClick={onClose}>
            <FiX className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-md"
            rows={3}
            required
          />
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="rating"
            value={newProduct.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full px-4 py-2 border rounded-md"
            step="0.1"
            required
          />
          <input
            type="text"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="inStock"
              checked={newProduct.inStock}
              onChange={(e) => setNewProduct((prev) => ({ ...prev, inStock: e.target.checked }))}
              className="form-checkbox"
            />
            <span>In Stock</span>
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
