import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px',
      background: 'rgba(10, 0, 0, 0.9)',
      color: '#ffffff'
    }}>
      <h1 style={{ fontSize: '72px', margin: 0, color: '#ff1a1a', textShadow: '0 0 10px rgba(255,0,0,0.5)' }}>404</h1>
      <h2 style={{ margin: '10px 0' }}>Страница не найдена</h2>
      <p style={{ color: '#999999' }}>Извините, такой страницы не существует</p>
      <Link to="/products" style={{
        marginTop: '20px',
        padding: '12px 24px',
        backgroundColor: '#cc0000',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        transition: 'all 0.3s',
        fontWeight: 'bold'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#ff1a1a'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#cc0000'}>
        Перейти к товарам
      </Link>
    </div>
  );
};

export default NotFoundPage;