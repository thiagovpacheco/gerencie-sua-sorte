import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Dashboard />
      </div>
    </Router>
  );
};

export default App;