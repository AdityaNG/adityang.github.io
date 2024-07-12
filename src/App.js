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
import D3Nav from './D3Nav';
import D3NavRandom from './D3NavRandom';

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
        <Route path="/D3Nav" element={<D3Nav />} />
        <Route path="/D3NavRandom" element={<D3NavRandom />} />
      </Routes>
    </Router>
  );
}

export default App;