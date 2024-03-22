import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Sidebar onSelect={handleCategorySelect} />
      <Content category={selectedCategory} />
    </div>
  );
}

export default App;

// Sidebar.js
import React from 'react';

function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onSelect('users')}>Users</li>
        <li onClick={() => onSelect('workers')}>Workers</li>
        <li onClick={() => onSelect('brokers')}>Brokers</li>
      </ul>
    </div>
  );
}

export default Sidebar;
// Content.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category) {
      axios.get(/api/${category})
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [category]);

  return (
    <div className="content">
      <h2>{category}</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Dummy data for demonstration
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com', role: 'user' },
  { id: 2, name: 'User 2', email: 'user2@example.com', role: 'user' },
  // Add more dummy data for workers and brokers
];

app.get('/api/:category', (req, res) => {
  const { category } = req.params;
  let categoryData;

  switch (category) {
    case 'users':
      categoryData = users;
      break;
    // Add cases for workers and brokers
    default:
      categoryData = [];
  }

  res.json(categoryData);
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});