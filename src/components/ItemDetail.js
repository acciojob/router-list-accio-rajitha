import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

const ItemDetail = () => {
  const { id } = useParams();  // Get the item ID from the URL
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default ItemDetail;
