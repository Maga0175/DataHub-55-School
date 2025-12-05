import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Policy from './components/Policy/Policy';
import Programs from './components/Programs/Programs';
import Contacts from './components/Contacts/Contacts';
import Application from './components/Application/Application';
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/application" element={<Application />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
};

export default App;
