// Branches.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branches.css';

const Branches = () => {
  const navigate = useNavigate();

  const branches = [
    {
      id: 1,
      name: 'Mumbai Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNdjFqZ9H7_shDCG6ithwhVaggmX4bxM7Hw&s',
      address: '123 Marine Drive, Mumbai, India',
      employees: [
        { name: 'John Doe', position: 'Manager', email: 'john@mumbai.com' },
        { name: 'Alice Brown', position: 'Sales', email: 'alice@mumbai.com' },
      ],
    },
    {
      id: 2,
      name: 'Delhi Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3cu4Q0UdXiRTKpwOAQMz0Sejylq1ipPoiA&s',
      address: '456 Connaught Place, Delhi, India',
      employees: [
        { name: 'Jane Smith', position: 'Manager', email: 'jane@delhi.com' },
        { name: 'Sam Wilson', position: 'Support', email: 'sam@delhi.com' },
      ],
    },
    {
      id: 3,
      name: 'Bangalore Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXUpXLxLPDV8xxzJtxNiju3nKE-U7QQNYMA&s',
      address: '789 MG Road, Bangalore, India',
      employees: [
        { name: 'Mark Taylor', position: 'Manager', email: 'mark@bangalore.com' },
        { name: 'Lucy Green', position: 'Tech Lead', email: 'lucy@bangalore.com' },
      ],
    },
    {
      id: 4,
      name: 'Hyderabad Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ7I4Nz7zluNuFYxzz6tlrZATyYN7GUWlxQ&s',
      address: '101 Charminar Road, Hyderabad, India',
      employees: [
        { name: 'Peter Parker', position: 'Manager', email: 'peter@hyderabad.com' },
        { name: 'Nina Rao', position: 'HR', email: 'nina@hyderabad.com' },
      ],
    },
  ];

  return (
    <div className="branches-page">
      <h1>Our Branches</h1>
      <p>We have multiple branches across major cities in India.</p>

      <div className="branches-grid">
        {branches.map((branch) => (
          <div key={branch.id} className="branch-card">
            <img src={branch.image} alt={`${branch.name}`} className="branch-image" />
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
            <button
              onClick={() => navigate(`/branch/${branch.id}`, { state: { branch } })}
              className="view-details-button"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
