// BranchDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Chatbot from './Chatbot';
import './BranchDetails.css';

const BranchDetails = () => {
  const location = useLocation();
  const branch = location.state?.branch;

  if (!branch) {
    return <p>Branch data not found. Please return to the branches page.</p>;
  }

  return (
    <div className="branch-details-page">
      <h1>{branch.name}</h1>
      <p>{branch.address}</p>

      <h2>Employees</h2>
      <div className="employee-list">
        {branch.employees.map((employee, index) => (
          <div key={index} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <p>Email: {employee.email}</p>
          </div>
        ))}
      </div>

      <div className="chatbot">
        <h2>Chatbot</h2>
        <Chatbot />
      </div>
    </div>
  );
};

export default BranchDetails;
