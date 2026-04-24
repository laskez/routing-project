import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка:', error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const formatPrice = (price) => {
    return Math.round(price * 92.5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="products-container">
      <h1>⚚ WEAR ⚚</h1>
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