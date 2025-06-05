import React from 'react';

const CardRecetas = ({ receta, onEdit, onDelete }) => {
  return (
    <div className="card mb-4 shadow-sm border rounded">
      <div className="card-body">
        <h2 className="card-title h5 fw-semibold mb-3">{receta.platillo}</h2>

        <p className="card-text mb-2">
          <strong>Ingredientes:</strong> {receta.ingredientes}
        </p>

        <p className="card-text mb-2">
          <strong>Instrucciones:</strong> {receta.instrucciones}
        </p>

        <p className="card-text mb-4">
          <strong>Tiempo de preparación:</strong> {receta.tiempoPreparacion} minutos
        </p>

        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onEdit(receta)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(receta.id)
            }
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRecetas;
