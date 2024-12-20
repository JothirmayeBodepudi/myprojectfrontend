import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './App.css';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import ModernBathroom from './components/ModernBathroom';
import VirtualTour from './components/VirtualTour';
import Branches from './components/Branches';
import Enimities from './components/Enimities';
import BranchDetails from './components/BranchDetails';
import AdminLoginPage from './components/admincomponents/AdminLoginPage';
import AdminDashboard from './components/admincomponents/AdminDashboard';
import Analytics from './components/admincomponents/Analytics';
import Overview from './components/admincomponents/Overview';
import { DataContext } from './components/context/DataContext';
import MyProfile from './components/MyProfile';
import ModernLivingRoom from './components/ModernLivingRoom';
import ModernHomeTheater from './components/ModernHomeTheater';
import ModernPujaMandiram from './components/ModernPujaMandiram';
import ModernPlayroom from './components/ModernPlayroom';
import Balcony from './components/Balcony';
import Kitchen from './components/Kitchen';
import Lawn from './components/Lawn';
import Bedroom from './components/Bedroom';


// Stripe's publishable key
const stripePromise = loadStripe('pk_test_51P9tR6SDx5VPoKUcoCXAITsGKRrAgVru6fxNg4SOwycDmfS3Eq5zHbzZn6NxbpCEyJOGqUlOrYW5bQDCm1yINM0000Kz92ySLe');

function App() {
  const [submissions, setSubmissions] = useState([]); // Shared state for storing form submissions

  return (
    <DataContext.Provider value={{ submissions, setSubmissions }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/modern-bathroom" element={<ModernBathroom />} />
          <Route path="/virtualtour" element={<VirtualTour />} />
          <Route path="/locations" element={<Branches />} />
          <Route path="/enimities" element={<Enimities />} />
          <Route path="/branch/:branchId" element={<BranchDetails />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Overview />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="living-room" element={<ModernLivingRoom />} />
          <Route path="home-theater" element={<ModernHomeTheater />} />
          <Route path="puja-mandiram" element={<ModernPujaMandiram />} />
          <Route path="playroom" element={<ModernPlayroom />} />
          <Route path="balcony" element={<Balcony />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="lawn" element={<Lawn />} />
          <Route path="bed-room" element={<Bedroom />} />
          
        
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
