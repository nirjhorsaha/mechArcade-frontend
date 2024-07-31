import { Product } from '@/types';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface UpdateProductModalProps {
  product: Product;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  product,
  onClose,
  onSave,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>({ ...product });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Convert numeric fields to numbers
    const parsedValue =
      name === 'price' || name === 'quantity' || name === 'rating'
        ? parseFloat(value)
        : value;

    setUpdatedProduct((prev) => ({ ...prev, [name]: parsedValue }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(updatedProduct);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Update Product</h2>
          <button onClick={onClose}>
            <FiX className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="brand"
            value={updatedProduct.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-md"
            rows={3}
            required
          />
          <input
            type="number"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="rating"
            value={updatedProduct.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full px-4 py-2 border rounded-md"
            step="0.1"
            required
          />
          <input
            type="text"
            name="imageUrl"
            value={updatedProduct.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
