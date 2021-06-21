import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DetailsCard: React.FC = () => {
  const { selectedItem } = useContext(AppContext);

  return (
    <div className="detailsCard">
      <ul>
        <li>{selectedItem.char_id}</li>
        <li>{selectedItem.name}</li>
        <li>{selectedItem.birthday}</li>
        <li>{selectedItem.occupation}</li>
        <li>{selectedItem.status}</li>
      </ul>
    </div>
  );
};

export default DetailsCard;
