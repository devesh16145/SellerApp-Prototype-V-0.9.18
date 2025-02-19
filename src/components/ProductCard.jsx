import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  const isHighPrice = product.price > product.expectedPrice;
  const isOutOfStock = product.stockQuantity === 0;
  const isNotListed = !product.isListed;

  return (
    <motion.div className="flex items-start space-x-4">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-24 h-24 rounded-md object-cover border border-gray-300"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-sm truncate">{product.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-agri-green font-bold text-sm">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.expectedPrice}</span>
        </div>
        <div className="mt-1 flex items-center space-x-2">
          {isHighPrice ? (
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">High Price</span>
          ) : (
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Best Price</span>
          )}
          {!isOutOfStock && (
            <span className="text-xs text-gray-500">Stock: {product.stockQuantity}</span>
          )}
          {isOutOfStock && (
            <span className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Out of Stock</span>
          )}
          {isNotListed && (
            <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">Not Listed</span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <motion.button
          className="p-1 hover:bg-gray-100 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiEdit className="text-agri-green text-base" />
        </motion.button>
      </div>
    </motion.div>
  )
}
