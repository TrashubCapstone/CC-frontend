import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrashItem from './TrashItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import './styles.css';

const TrashList = ({ trashData, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredTrash = trashData.filter(trash =>
      trash.category.toLowerCase().includes(searchTerm) ||
      trash.type.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredTrash);
  };

  const handleAdd = () => {
    navigate('/form');
  };

  const filteredTrash = searchTerm.length > 0 ? searchResults : trashData;

  return (
    <div className="container-fluid mt-4" style={{fontFamily: 'Georgia'}}>
      <Navbar activeItem="dashboard" />
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control"
          placeholder="Cari"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="btn btn-primary ms-3" onClick={handleAdd}>Add</button>
      </div>
      {filteredTrash.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-center align-middle">Kategori</th>
              <th scope="col" className="text-center align-middle">Jenis</th>
              <th scope="col" className="text-center align-middle">Penjelasan</th>
              <th scope="col" className="text-center align-middle">Cara Daur Ulang</th>
              <th scope="col" className="text-center align-middle">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrash.map(trash => (
              <TrashItem key={trash.id} trash={trash} onDelete={onDelete} onEdit={onEdit} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-info mt-3" role="alert">
          Data tidak ditemukan.
        </div>
      )}
    </div>
  );
};

export default TrashList;