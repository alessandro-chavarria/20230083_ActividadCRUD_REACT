import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const RegisterRecetas = ({ onSubmit, recetaEditando = null, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recetaEditando) {
      reset({
        platillo: recetaEditando.platillo,
        ingredientes: recetaEditando.ingredientes,
        instrucciones: recetaEditando.instrucciones,
        tiempoPreparacion: recetaEditando.tiempoPreparacion,
      });
    } else {
      reset();
    }
  }, [recetaEditando, reset]);

  const enviarFormulario = (data) => {
    if (data.tiempoPreparacion <= 0) {
      Swal.fire('Error', 'El tiempo de preparación debe ser mayor a cero', 'error');
      return;
    }

    onSubmit(data);
    Swal.fire(
      recetaEditando ? 'Receta actualizada' : 'Receta registrada',
      '',
      'success'
    )
    reset();
  };

  return (
    <form onSubmit={handleSubmit(enviarFormulario)} className="bg-white shadow rounded p-4">
      <h2 className="h4 mb-4">
        {recetaEditando ? 'Editar Receta' : 'Registrar Nueva Receta'}
      </h2>

      <div className="mb-3">
        <label className="form-label">Nombre del Platillo</label>
        <input
          type="text"
          className={`form-control ${errors.platillo ? 'is-invalid' : ''}`}
          {...register('platillo', { required: 'Este campo es obligatorio' })}
        />
        {errors.platillo && <div className="invalid-feedback">{errors.platillo.message}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Ingredientes</label>
        <textarea
          className={`form-control ${errors.ingredientes ? 'is-invalid' : ''}`}
          rows={3}
          {...register('ingredientes', { required: 'Este campo es obligatorio' })}
        />
        {errors.ingredientes && <div className="invalid-feedback">{errors.ingredientes.message}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Instrucciones</label>
        <textarea
          className={`form-control ${errors.instrucciones ? 'is-invalid' : ''}`}
          rows={3}
          {...register('instrucciones', { required: 'Este campo es obligatorio' })}
        />
        {errors.instrucciones && <div className="invalid-feedback">{errors.instrucciones.message}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Tiempo de Preparación (minutos)</label>
        <input
          type="number"
          className={`form-control ${errors.tiempoPreparacion ? 'is-invalid' : ''}`}
          {...register('tiempoPreparacion', {
            required: 'Este campo es obligatorio',
            valueAsNumber: true,
            min: { value: 1, message: 'Debe ser mayor que cero' },
          })}
        />
        {errors.tiempoPreparacion && (
          <div className="invalid-feedback">{errors.tiempoPreparacion.message}</div>
        )}
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="submit" className="btn btn-success">
          {recetaEditando ? 'Actualizar' : 'Guardar'}
        </button>
        {recetaEditando && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterRecetas;
