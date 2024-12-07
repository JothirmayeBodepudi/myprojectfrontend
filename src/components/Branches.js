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
      contact: '+91 98765 43210',
      description: 'Situated near the iconic Marine Drive, our Mumbai branch focuses on customer relations and sales.',
      employees: [
        { name: 'John Doe', position: 'Manager', email: 'john@mumbai.com', phone: '+91 98765 11111' },
        { name: 'Alice Brown', position: 'Sales', email: 'alice@mumbai.com', phone: '+91 98765 22222' },
      ],
    },
    {
      id: 2,
      name: 'Delhi Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3cu4Q0UdXiRTKpwOAQMz0Sejylq1ipPoiA&s',
      address: '456 Connaught Place, Delhi, India',
      contact: '+91 98765 43211',
      description: 'Located in the heart of Delhi, this branch manages technical support and enterprise solutions.',
      employees: [
        { name: 'Jane Smith', position: 'Manager', email: 'jane@delhi.com', phone: '+91 98765 33333' },
        { name: 'Sam Wilson', position: 'Support', email: 'sam@delhi.com', phone: '+91 98765 44444' },
      ],
    },
    {
      id: 3,
      name: 'Bangalore Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXUpXLxLPDV8xxzJtxNiju3nKE-U7QQNYMA&s',
      address: '789 MG Road, Bangalore, India',
      contact: '+91 98765 43212',
      description: 'Bangalore, known for its IT hubs, hosts our branch specialized in software development and R&D.',
      employees: [
        { name: 'Mark Taylor', position: 'Manager', email: 'mark@bangalore.com', phone: '+91 98765 55555' },
        { name: 'Lucy Green', position: 'Tech Lead', email: 'lucy@bangalore.com', phone: '+91 98765 66666' },
      ],
    },
    {
      id: 4,
      name: 'Hyderabad Branch',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ7I4Nz7zluNuFYxzz6tlrZATyYN7GUWlxQ&s',
      address: '101 Charminar Road, Hyderabad, India',
      contact: '+91 98765 43213',
      description: 'Our Hyderabad branch handles recruitment and human resources, located near Charminar.',
      employees: [
        { name: 'Peter Parker', position: 'Manager', email: 'peter@hyderabad.com', phone: '+91 98765 77777' },
        { name: 'Nina Rao', position: 'HR', email: 'nina@hyderabad.com', phone: '+91 98765 88888' },
      ],
    },
  ];

  return (
    <div className="branches-page">
      <h1>Our Branches</h1>
      <p>We have multiple branches across major cities in India, each specializing in key areas of business.</p>

      <div className="branches-grid">
        {branches.map((branch) => (
          <div key={branch.id} className="branch-card">
            <img src={branch.image} alt={`${branch.name}`} className="branch-image" />
            <h3>{branch.name}</h3>
            <p><strong>Address:</strong> {branch.address}</p>
            <p><strong>Contact:</strong> {branch.contact}</p>
            <p><strong>About:</strong> {branch.description}</p>
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
