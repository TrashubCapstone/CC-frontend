import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrashItem = ({ trash, onDelete, onEdit }) => {
  const { id, name, image, category, type, description } = trash;
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
      <td>{name}</td>
      <td className="text-center align-middle">
        {image && (
          <img src={image} alt="Trash" style={{ width: '100px', height: 'auto' }} />
        )}
      </td>
      <td>{category}</td>
      <td>{type}</td>
      <td>{description}</td>
      <td>
        <div className="TrashItem">
          <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default TrashItem;