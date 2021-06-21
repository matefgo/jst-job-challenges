import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SearchBar: React.FC = () => {
  const { setSearchTerm, setListStatus } = useContext(AppContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = (event: React.SyntheticEvent<HTMLInputElement>) => {
    if (event.type === 'focus') {
      setListStatus(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite aqui"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
    </div>
  );
};

export default SearchBar;
