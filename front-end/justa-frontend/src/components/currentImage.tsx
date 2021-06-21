import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrentImage: React.FC = () => {
  const { currentImage } = useContext(AppContext);

  return (
    <div className="CurrentImage">
      <img src={currentImage} alt="teste" />
    </div>
  );
};

export default CurrentImage;
