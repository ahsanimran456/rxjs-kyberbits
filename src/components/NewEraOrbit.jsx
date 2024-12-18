import React from 'react';
import './components.css';

const OrbitingDesign = () => {
  return (
    <div className="new-era-circle">
      {/* Parent Circle Lines */}
      <div className="orbiting-circle outer"></div>
      <div className="orbiting-circle mid"></div>
      <div className="orbiting-circle inner"></div>

      {/* Center Lines */}
      <div className="orbiting-center-lines">
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Side Circles */}
      <div className="orbiting-child orbiting-left">
        <span>QUSD</span>
      </div>
      <div className="orbiting-child orbiting-right">
        <span>USD</span>
      </div>
    </div>
  );
};

export default OrbitingDesign;
