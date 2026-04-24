import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import products from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  if (!product) {
    return (
      <div className="loading">
        <h2>Товар не найден</h2>
        <button onClick={() => navigate('/products')} className="back-button">
          Вернуться к товарам
        </button>
      </div>
    );
  }

  return (
    <div className="product-container">
      <button onClick={goBack} className="back-button">
        Назад
      </button>
      
      <div className="product-content">
        <div className="product-image-wrapper">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-info">
          <h1 className="product-title-detail">{product.title}</h1>
          
          <div className="product-price-detail">
            {formatPrice(product.price)} ₽
          </div>
          
          <div className="product-rating-detail">
            <StarRating rating={product.rating.rate} />
          </div>
          
          <div className="product-description">
            <h3>Описание:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;