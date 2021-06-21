import React from 'react';
import SearchBar from '../components/searchBar';
import SearchList from '../components/searchList';

const SearchPage: React.FC = () => {
  return (
    <div className="SearchPage">
      <SearchBar />
      <SearchList />
    </div>
  );
};

export default SearchPage;
