import React, { useContext } from 'react';
import WelcomeText from '../components/welcomeText';
import SearchBar from '../components/searchBar';
import SearchList from '../components/searchList';
import { AppContext } from '../context/AppContext';

const SearchPage: React.FC = () => {
  const { listStatus, selectedItem } = useContext(AppContext);

  return (
    <div className="SearchPage">
      <WelcomeText />
      <SearchBar />
      {listStatus && <SearchList />}
    </div>
  );
};

export default SearchPage;
