import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles.css';
import TrajNet from './TrajNet';
import OCTraN from './OCTraN';
import BengaluruDrivingDataset from './BengaluruDrivingDataset';
import HardwareAcceleratedStereoVision from './HardwareAcceleratedStereoVision';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/TrajNet" element={<TrajNet />} />
        <Route path="/OCTraN" element={<OCTraN />} />
        <Route path="/BengaluruDrivingDataset" element={<BengaluruDrivingDataset />} />
        <Route path="/HardwareAcceleratedStereoVision" element={<HardwareAcceleratedStereoVision />} />
      </Routes>
    </Router>
  );
}

export default App;