import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrescriptionForm from './components/PrescriptionForm';
import PrescriptionList from './components/PrescriptionList';
import PrescriptionDetail from './components/PrescriptionDetail';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>➕ Add Prescription</Link>
        <Link to="/prescriptions">📋 View Prescriptions</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PrescriptionForm />} />
        <Route path="/prescriptions" element={<PrescriptionList />} />
        <Route path="/prescription/:id" element={<PrescriptionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
