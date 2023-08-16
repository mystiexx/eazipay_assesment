import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard" />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
