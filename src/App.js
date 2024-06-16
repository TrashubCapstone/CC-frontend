import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TrashList from './components/TrashList';
import TrashForm from './components/TrashForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import TracedImage from './assets/Traced Image (rev).png';
import TracedImage2 from './assets/Traced_Image.png';

const App = () => {
  const [trashData, setTrashData] = useState([
    {
      id: 1,
      name: 'Sampah Makanan',
      type: 'Organik',
      category: 'Recycle',
      description: 'Sampah makanan adalah sisa-sisa makanan yang tidak dikonsumsi dan akhirnya dibuang. Ini termasuk kulit buah dan sayur, sisa makanan yang tidak habis, makanan yang kadaluarsa, serta bahan makanan yang rusak. Sampah makanan merupakan salah satu komponen terbesar dari limbah rumah tangga dan restoran. Di banyak tempat, sampah makanan juga berasal dari proses produksi, distribusi, dan penyimpanan makanan',
      image: TracedImage,
    },
    {
      id: 2,
      name: 'Kaca',
      type: 'Anorganik',
      category: 'Recycle',
      description: 'Sampah kaca meliputi berbagai produk yang terbuat dari kaca seperti botol, gelas, jendela, dan peralatan rumah tangga lainnya. Kaca adalah bahan anorganik yang dibuat dari silika (pasir), soda, dan kapur yang dipanaskan hingga meleleh dan kemudian dibentuk sesuai kebutuhan. Kaca adalah bahan yang dapat didaur ulang berkali-kali tanpa kehilangan kualitas atau kemurniannya.',
      image: TracedImage2,
    },
  ]);

  const [editingTrash, setEditingTrash] = useState(null);

  const handleAdd = (newTrash) => {
    setTrashData([...trashData, { id: Date.now(), ...newTrash }]);
  };

  const handleDelete = (id) => {
    setTrashData(trashData.filter(trash => trash.id !== id));
  };

  const handleEdit = (updatedTrash) => {
    setTrashData(trashData.map(trash => (trash.id === updatedTrash.id ? updatedTrash : trash)));
  };

  const startEdit = (id) => {
    const trash = trashData.find(trash => trash.id === id);
    setEditingTrash(trash);
  };

  return (
    <Router>
      <div className="App container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/trashlist" element={<TrashList trashData={trashData} onDelete={handleDelete} onEdit={startEdit} />} />
          <Route path="/form" element={<TrashForm onAdd={handleAdd} />} />
          <Route path="/edit/:id" element={<TrashForm onAdd={handleAdd} onEdit={handleEdit} editingTrash={editingTrash} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;