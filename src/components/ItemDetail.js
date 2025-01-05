import React from 'react';
import { useParams } from 'react-router-dom';

// List of items
const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];

const ItemDetail = () => {
  // Get the item ID from the URL params
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p> {/* Display the item's description */}
        </div>
      ) : (
        <p>Item not found</p> 
      )}
    </div>
  );
};

export default ItemDetail;

/*
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
*/