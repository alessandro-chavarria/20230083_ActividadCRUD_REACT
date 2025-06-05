import React, { useState } from 'react';
import { useDataRecetas } from '../components/Recetas/Hooks/useDataRecetas.jsx';
import FormularioReceta from '../components/Recetas/RegisterRecetas.jsx';
import ListRecetas from '../components/Recetas/ListRecetas.jsx';

const Dashboard = () => {
  const {
    recetas,
    loading,
    error,
    addReceta,
    updateReceta,
    deleteReceta,
  } = useDataRecetas();

  const [recetaActual, setRecetaActual] = useState(null);

  const manejarGuardar = (datos) => {
    if (recetaActual) {
      updateReceta(recetaActual.id, datos);
      setRecetaActual(null);
    } else {
      addReceta(datos);
    }
  };

  const manejarEditar = (receta) => {
    setRecetaActual(receta);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="w-100 min-vh-100 p-4"
      style={{
        background: 'linear-gradient(135deg, #f3e5f5 0%, #d1c4e9 100%)',
        animation: 'fadeIn 0.8s ease-out'
      }}
    >
      <div className="container">
        {/* Header con animación */}
        <div className="animate__animated animate__fadeInDown">
          <h1 
            className="text-center fw-bold mb-5 py-3"
            style={{
              color: '#4a148c',
              borderBottom: '2px solid #7e57c2',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              letterSpacing: '-0.5px'
            }}
          >
            Administrador de Recetas
          </h1>
        </div>

        {/* Formulario con card animada */}
        <div 
          className="card shadow-sm mb-5 border-0 animate__animated animate__fadeIn"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            animationDelay: '0.2s'
          }}
        >
          <div className="card-body p-4">
            <FormularioReceta
              onSubmit={manejarGuardar}
              recetaEditando={recetaActual}
              onCancel={() => setRecetaActual(null)}
            />
          </div>
        </div>

        {/* Separador decorativo */}
        <div 
          className="my-5 position-relative"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, #7e57c2, transparent)',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.3s'
          }}
        />

        {/* Listado de recetas */}
        <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
          <h2 
            className="text-center fw-semibold mb-4"
            style={{
              color: '#6a1b9a',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.5s'
            }}
          >
            Listado de Recetas
          </h2>

          <div 
            className="card shadow-sm border-0"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.6s'
            }}
          >
            <div className="card-body p-3">
              <ListRecetas
                recetas={recetas}
                loading={loading}
                error={error}
                onEdit={manejarEditar}
                onDelete={deleteReceta}
              />
            </div>
          </div>
        </div>
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
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(106, 27, 154, 0.15) !important;
        }
        
        .btn-primary {
          background-color: #7e57c2;
          border-color: #7e57c2;
        }
        
        .btn-primary:hover {
          background-color: #6a1b9a;
          border-color: #6a1b9a;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;