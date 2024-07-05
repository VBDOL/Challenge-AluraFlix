import React from 'react';
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import './card.css';

const Card = ({ image, category, onEdit, onDelete }) => {
  return (
    <div className={`card-${category}`}>
      <img src={image} alt={category} /> {/* 'image' agora representa a URL da imagem */}
      <div className={`card-content-${category}`}>
        <div className={`actions-${category}`}>
          <button onClick={onDelete} className="delete">
            <GoTrash />
            Excluir
          </button>
          <button onClick={onEdit} className="edit">
            <CiEdit />
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;