import React, { useContext } from 'react';
import SearchPage from './SearchPage';
import DetailsPage from './DetailsPage';
import CurrentImage from '../components/currentImage';
import { AppContext } from '../context/AppContext';

const MainPage: React.FC = () => {
  const { pageStatus, currentImage } = useContext(AppContext);

  return (
    <div className="Main">
      {pageStatus === 'search' && <SearchPage />}
      {pageStatus === 'details' && <DetailsPage />}
      {currentImage !== '' && <CurrentImage />}
    </div>
  );
};

export default MainPage;
