import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';  // Import the HomePage component
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import NewDiary from './components/NewDiary';
import ViewDiary from './components/ViewDiary';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />"
        <Route path="/newdiary" element={<NewDiary />} />
        <Route path="/viewdiary" element={<ViewDiary />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;