import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import '../admincomponents/Analytics.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    newRegistrations: 0,
    userRoles: { Admin: 0, Moderator: 0, General: 0 },
  });

  // Fetch user statistics
  const fetchUserStats = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/user');
      const currentDate = new Date();
      
      const activeUsers = response.data.filter(user => user.isActive).length;
      const inactiveUsers = response.data.filter(user => !user.isActive).length;

      const newRegistrations = response.data.filter(user => {
        const registrationDate = new Date(user.registrationDate);
        const diff = (currentDate - registrationDate) / (1000 * 60 * 60 * 24);
        return diff <= 30; 
      }).length;

      const userRoles = response.data.reduce((roles, user) => {
        roles[user.role] = (roles[user.role] || 0) + 1;
        return roles;
      }, {});

      setUserStats({
        totalUsers: response.data.length,
        activeUsers,
        inactiveUsers,
        newRegistrations,
        userRoles,
      });
    } catch (error) {
      console.error('Error fetching user statistics:', error);
      setUserStats({
        totalUsers: 0,
        activeUsers: 0,
        inactiveUsers: 0,
        newRegistrations: 0,
        userRoles: { Admin: 0, Moderator: 0, General: 0 },
      });
    }
  };

  useEffect(() => {
    fetchUserStats();
  }, []);

  const userActivityChart = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        label: 'User Activity',
        data: [userStats.activeUsers, userStats.inactiveUsers],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const newRegistrationsChart = {
    labels: ['Last 30 Days'],
    datasets: [
      {
        label: 'New Registrations',
        data: [userStats.newRegistrations],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const userRolesChart = {
    labels: Object.keys(userStats.userRoles),
    datasets: [
      {
        label: 'Roles Distribution',
        data: Object.values(userStats.userRoles),
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="analytics-page">
      <h2>User Analytics Dashboard</h2>
      <p>Insights into user trends, engagement, and activity patterns.</p>

      {/* Active vs Inactive Users */}
      <div className="chart-container" style={{ height: '400px', width: '100%' }}>
        <Bar key="userActivityChart" data={userActivityChart} options={chartOptions} />
      </div>

      {/* New Registrations */}
      <div className="chart-container" style={{ height: '400px', width: '100%' }}>
        <Bar key="newRegistrationsChart" data={newRegistrationsChart} options={chartOptions} />
      </div>

      {/* User Roles Distribution */}
      <div className="chart-container" style={{ height: '400px', width: '100%' }}>
        <Bar key="userRolesChart" data={userRolesChart} options={chartOptions} />
      </div>
    </div>
  );
};

export default Analytics;
