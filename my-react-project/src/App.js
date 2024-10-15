import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';  // Import the HomePage component
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import NewDiary from './components/NewDiary';
import ViewDiary from './components/ViewDiary';
import Questionnaire from './components/Questionnaire';
import Solution1 from './components/quiz-components/Solution1';
import Solution2 from './components/quiz-components/Solution2';
import Solution3 from './components/quiz-components/Solution3';
import Solution4 from './components/quiz-components/Solution4';
import Solution5 from './components/quiz-components/Solution5';

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
        <Route path="/solution1" element={<Solution1 />} />
        <Route path="/solution2" element={<Solution2 />} />
        <Route path="/solution3" element={<Solution3 />} />
        <Route path="/solution4" element={<Solution4 />} />
        <Route path="/solution5" element={<Solution5 />} />
      </Routes>
    </Router>
  );
}

export default App;