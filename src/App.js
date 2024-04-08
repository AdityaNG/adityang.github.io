import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles.css';
import TrajNet from './TrajNet';
import OCTraN from './OCTraN';
import BengaluruDrivingDataset from './BengaluruDrivingDataset';
import HardwareAcceleratedStereoVision from './HardwareAcceleratedStereoVision';
import SOccDPT from './SOccDPT';
import DriveLLaVA from './DriveLLaVA';
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
        <Route path="/SOccDPT" element={<SOccDPT />} />
        <Route path="/DriveLLaVA" element={<DriveLLaVA />} />
      </Routes>
    </Router>
  );
}

export default App;