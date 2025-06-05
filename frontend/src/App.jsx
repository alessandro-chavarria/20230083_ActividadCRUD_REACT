import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BienvenidaPage from './pages/BienvenidaPage';
import Dashboard from './pages/Dashboard';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BienvenidaPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
