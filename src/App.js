import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/DashBoard';
import AddDevice from './components/AddDevice';
import DeleteDevice from './components/DeleteDevice';
import Settings from './components/Settings';
import About from './components/About';
import Layout from './components/Layout'; 
import SetName from './components/SetName'; 
import SetEmail from './components/SetEmail';
import ChangePassword from './components/ChangePassword';

function App() {
  return (

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard2" element={<Layout><Dashboard /></Layout>} />
        <Route path="/addDevice" element={<Layout><AddDevice /></Layout>} />
        <Route path="/deleteDevice" element={<Layout><DeleteDevice /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/setName" element={<Layout><SetName /></Layout>} />
        <Route path="/setEmail" element={<Layout><SetEmail /></Layout>} />
        <Route path="/changePassword" element={<Layout><ChangePassword /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>

  );
}

export default App;