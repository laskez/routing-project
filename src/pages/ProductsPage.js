import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import products from '../data/products';
import './ProductsPage.css';

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="products-container">
      <h1>⚡︎ LEGION PC ⚡︎</h1>
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <img 
              src={product.image} 
              alt={product.title}
              className="product-image"
            />
            <Link to={`/product/${product.id}`} className="product-title" onClick={(e) => e.stopPropagation()}>
              <h3>{product.title}</h3>
            </Link>
            <div className="product-price">
              {formatPrice(product.price)} ₽
            </div>
            <StarRating rating={product.rating.rate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;