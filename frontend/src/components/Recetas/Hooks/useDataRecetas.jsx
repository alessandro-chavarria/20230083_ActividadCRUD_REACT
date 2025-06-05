import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const API_URL = 'https://retoolapi.dev/DBFXqn/recetas';

export function useDataRecetas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener todas las recetas
  const fetchRecetas = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setRecetas(data);
    } catch (err) {
      setError('Error al cargar las recetas');
    } finally {
      setLoading(false);
    }
  };

  // Crear una receta
  const addReceta = async (nuevaReceta) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaReceta),
      });
      const data = await res.json();
      setRecetas((prev) => [...prev, data]);
    } catch (err) {
      setError('Error al agregar la receta');
    }
  };

  // Actualizar una receta
  const updateReceta = async (id, recetaActualizada) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recetaActualizada),
      });
      setRecetas((prev) =>
        prev.map((r) => (r.id === id ? { ...r, ...recetaActualizada } : r))
      );
    } catch (err) {
      setError('Error al actualizar la receta');
    }
  };

  // Eliminar una receta
  const deleteReceta = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setRecetas((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      setError('Error al eliminar la receta');
    }
    Swal.fire('Éxito', 'Se eliminó la receta', 'success');
  };

  useEffect(() => {
    fetchRecetas();
  }, []);

  return {
    recetas,
    loading,
    error,
    fetchRecetas,
    addReceta,
    updateReceta,
    deleteReceta,
  };
}
