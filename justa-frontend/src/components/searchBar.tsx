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
    } else if (event.type === 'blur') {
      setListStatus(false);
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Who are you looking for?"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
      />
    </div>
  );
};

export default SearchBar;
