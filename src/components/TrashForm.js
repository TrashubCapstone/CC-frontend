import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const TrashForm = ({ onAdd, onEdit, editingTrash }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (editingTrash) {
      setName(editingTrash.name);
      setCategory(editingTrash.category);
      setType(editingTrash.type);
      setDescription(editingTrash.description);
      setImage(editingTrash.image);
    }
  }, [editingTrash]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !category || !type || !description) return;

    const newTrash = { id: editingTrash?.id || Date.now(), name, category, type, description, image };

    if (editingTrash) {
      onEdit(newTrash);
    } else {
      onAdd(newTrash);
    }

    setName('');
    setCategory('');
    setType('');
    setDescription('');
    setImage(null);

    navigate('/trashlist'); 
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="mt-4">
      <div className="card bg-light" style={{ width: '100vw', maxWidth: '800px', padding: '1.5rem', boxSizing: 'border-box', margin: 'auto', fontFamily: 'Georgia'}}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">{editingTrash ? 'Perbarui Data' : 'Tambah Data Baru'}</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama Sampah</label>
              <input
                className="form-control"
                id="name"
                placeholder="Masukkan Nama Sampah"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Jenis</label>
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
              <label htmlFor="type" className="form-label">Kategori</label>
              <select
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>Pilih Kategori</option>
                <option value="Recycle">Recycle</option>
                <option value="Unrecycle">Unrecycle</option>
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
              <label htmlFor="image" className="form-label">Gambar</label>
              <input
                className="form-control"
                id="image"
                type="file"
                onChange={handleImageChange}
              />
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