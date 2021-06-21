import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ReturnButton: React.FC = () => {
  const { setPageStatus } = useContext(AppContext);

  const handleReturnButton = () => {
    setPageStatus('search');
  };

  return (
    <div className="returnButton">
      <button type="button" onClick={handleReturnButton}>
        ❰❰
      </button>
    </div>
  );
};

export default ReturnButton;
