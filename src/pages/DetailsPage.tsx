import React from 'react';
import DetailsCard from '../components/detailsCard';
import ReturnButton from '../components/returnButton';

const DetailsPage: React.FC = () => {
  return (
    <div className="DetailsPage">
      <ReturnButton />
      <DetailsCard />
    </div>
  );
};

export default DetailsPage;
