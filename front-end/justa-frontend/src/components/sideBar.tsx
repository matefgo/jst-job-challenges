import React from 'react';

const SideBar: React.FC = () => {
  return (
    <div className="SideBar">
      <div className="sideIcons">
        <span id="Br">5</span>
        <span id="Ba">6</span>
      </div>
      <p className="credits">
        developed by matefgo <br />
        all data provided by https://breakingbadapi.com/
      </p>
    </div>
  );
};

export default SideBar;
