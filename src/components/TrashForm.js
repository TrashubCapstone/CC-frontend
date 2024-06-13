import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const TrashForm = ({ onAdd, onEdit, editingTrash }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [recycle, setRecycle] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    if (editingTrash) {
      setCategory(editingTrash.category);
      setType(editingTrash.type);
      setDescription(editingTrash.description);
      setRecycle(editingTrash.recycle); 
    }
  }, [editingTrash]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!category || !type || !description || !recycle) return;

    if (editingTrash) {
      onEdit({ id: editingTrash.id, category, type, description, recycle });
    } else {
      onAdd({ category, type, description, recycle });
    }

    
    setCategory('');
    setType('');
    setDescription('');
    setRecycle('');

    navigate('/trashlist'); 
  };

  return (
    <div className="mt-4">
      <div className="card bg-light" style={{ width: '100vw', 
        maxWidth: '800px', 
        padding: '1.5rem', 
        boxSizing: 'border-box', 
        margin: 'auto',
        fontFamily: 'Georgia'}}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">{editingTrash ? 'Perbarui Data' : 'Tambah Data Baru'}</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Kategori</label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Masukkan Kategori"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">Jenis</label>
              <select
                className="form-control"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled>Pilih Jenis</option>
                <option value="Organik">Organik</option>
                <option value="Anorganik">Anorganik</option>
                <option value="B3">B3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Penjelasan</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Masukkan Penjelasan"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="recycle" className="form-label">Daur Ulang</label>
              <textarea
                className="form-control"
                id="recycle"
                rows="3"
                placeholder="Cara Daur Ulang"
                value={recycle}
                onChange={(e) => setRecycle(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              {editingTrash ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrashForm;