import React, { createContext, useState, useEffect } from 'react';

const UIContext = createContext();

export const OperationContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setAllProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, [])

  useEffect(() => {
    let filtered = allProducts;

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== '') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, allProducts]);

  return (
    <UIContext.Provider
      value={{
        allProducts,
        filteredProducts,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default OperationContext;