import React from 'react';
import DetailsCard from '../components/detailsCard';
import ReturnButton from '../components/returnButton';

const DetailsPage: React.FC = () => {
  return (
    <div className="DetailsPage">
      <DetailsCard />
      <ReturnButton />
    </div>
  );
};

export default DetailsPage;
