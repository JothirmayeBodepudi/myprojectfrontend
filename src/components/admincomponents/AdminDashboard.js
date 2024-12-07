import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Analytics from '../admincomponents/Analytics';
import Overview from '../admincomponents/Overview';
import '../admincomponents/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [users, setUsers] = useState([]); // List of users
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal visibility
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
  }); // Track the selected user

  // Fetch users on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleSettingsDropdown = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/api/${selectedUser.id}`, {
        name: selectedUser.name,
        email: selectedUser.email,
        role: selectedUser.role,
      });
      fetchUsers();
      closeEditModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8081/api/users/${userId}`);
      alert('User deleted successfully');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul className="sidebar-nav">
            <li
              className={activeSection === 'overview' ? 'active' : ''}
              onClick={() => handleSectionChange('overview')}
            >
              Overview
            </li>
            <li
              className={activeSection === 'users' ? 'active' : ''}
              onClick={() => handleSectionChange('users')}
            >
              Manage Users
            </li>
            <li
              className={activeSection === 'analytics' ? 'active' : ''}
              onClick={() => handleSectionChange('analytics')}
            >
              Analytics
            </li>
            <li onClick={toggleSettingsDropdown} className="dropdown">
              <div className="dropdown-header">
                Settings
                <span className="dropdown-icon">
                  {isSettingsOpen ? '▲' : '▼'}
                </span>
              </div>
            </li>
            {isSettingsOpen && (
              <ul className="dropdown-menu">
                <li
                  className={activeSection === 'update-profile' ? 'active' : ''}
                  onClick={() => handleSectionChange('update-profile')}
                >
                  Update Profile
                </li>
                <li
                  className={activeSection === 'change-password' ? 'active' : ''}
                  onClick={() => handleSectionChange('change-password')}
                >
                  Change Password
                </li>
                <li
                  className={activeSection === 'preferences' ? 'active' : ''}
                  onClick={() => handleSectionChange('preferences')}
                >
                  System Preferences
                </li>
              </ul>
            )}
            <li onClick={() => alert('Logged Out Successfully!')}>Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */ }
      <main className="dashboard-main">
        {activeSection === 'overview' && (
          <Overview />
        )}

        {activeSection === 'analytics' && (
          <Analytics />
        )}

        {activeSection === 'users' && (
          <section id="users" className="dashboard-section">
            <h2>Manage Users</h2>
            <p>View, edit, or remove users from the system.</p>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => openEditModal(user)}>Edit</button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
