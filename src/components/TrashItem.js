import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrashItem = ({ trash, onDelete, onEdit }) => {
  const { id, category, type, description, recycle } = trash;
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
    navigate(`/edit/${id}`);
  };

  return (
    <tr>
      <td>{category}</td>
      <td>{type}</td>
      <td>{description}</td>
      <td>{recycle}</td>
      <td>
      <div className="TrashItem">
        <span>{trash.name}</span>
        <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
    </div>
      </td>
    </tr>
  );
};

export default TrashItem;