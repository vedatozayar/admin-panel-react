import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Products = () => {
  return (
    <div className='products'>
      <Sidebar />
      <div className='productContainer'>
        <Navbar />
      </div>
    </div>
  );
};

export default Products;
