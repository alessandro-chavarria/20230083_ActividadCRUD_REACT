import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BienvenidaPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Redirección después de 30 segundos
    const redirectTimer = setTimeout(() => {
      navigate('/dashboard');
    }, 30000);

    // Contador regresivo
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        background: 'linear-gradient(135deg, #f3e5f5 0%, #7e57c2 100%)',
        padding: '0 1rem',
        margin: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Elementos decorativos minimalistas */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(126, 87, 194, 0.15)',
      }} />

      <div 
        className="animate__animated animate__fadeIn"
        style={{
          maxWidth: '600px',
          zIndex: 1,
          animation: 'fadeIn 1s ease-out',
        }}
      >
        <h1 
          className="display-4 fw-bold mb-4"
          style={{
            color: '#4a148c',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: '1.2',
            marginBottom: '2rem',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.2s'
          }}
        >
          Administrador de Recetas
        </h1>

        <p 
          className="lead mb-5"
          style={{
            color: '#9c27b0',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out forwards',
            animationDelay: '0.4s'
          }}
        >
          Organiza, crea y comparte tus recetas favoritas
        </p>

        <button
          onClick={() => navigate('/dashboard')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn btn-lg shadow-sm"
          style={{
            backgroundColor: '#6a1b9a',
            color: 'white',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '50px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: isHovered ? '0 10px 20px rgba(106, 27, 154, 0.3)' : '0 5px 15px rgba(106, 27, 154, 0.2)',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.6s'
          }}
        >
          Comenzar
        </button>

        <p 
          className="mt-4"
          style={{
            color: '#5e35b1',
            fontSize: '0.9rem',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.8s'
          }}
        >
          Redirección automática en {countdown} segundos...
        </p>
      </div>

      {/* Estilos de animación inline */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default BienvenidaPage;