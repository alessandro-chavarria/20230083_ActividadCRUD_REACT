import React from 'react';
import CardRecetas from "../Recetas/CardRecetas.jsx";

const ListRecetas = ({ recetas, loading, error, onEdit, onDelete }) => {
  if (loading) return <p>Cargando recetas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recetas?.map((receta) => (
        <CardRecetas
          key={receta.id}
          receta={receta}
          onEdit={onEdit}      
          onDelete={onDelete}  
        />
      ))}
    </div>
  );
};

export default ListRecetas;
