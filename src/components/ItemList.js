import React from 'react';
import { Link } from 'react-router-dom';

// List of items
const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link> {/* Navigate to item details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

/*
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
*/